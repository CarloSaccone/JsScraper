import fs from "fs";

export const parsePage = async (page, browser, options) => {
  const participants = await page.evaluate(() => {
    let items = document.querySelectorAll(".participant-item");
    // console.log(items);
    const lines = [...items].map((item) => {
      const nameNode = item.querySelector(".participant-name");

      const name = nameNode?.textContent.replaceAll(",", "/");
      const link = nameNode?.href;
      const job = item
        .querySelector(".participant-job-title")
        ?.textContent.replaceAll(",", "/");
      const org = item
        .querySelector(".participant-org a")
        ?.textContent.replaceAll(",", "/");
      const country = item
        .querySelector(".participant-country")
        ?.textContent.replaceAll(",", "/");

      return [link, `${name},${job},${org},${country}`];
    });
    return lines;
  });

  console.log("@success", participants.length);

  // await page.click(
  //   "DIV.in-pagination.in-searchList__pagination > DIV.in-pagination__control[data-cy=pagination-next] > A.in-pagination__item > svg"
  // );

  //`${name},${job},${org},${country},${contact}`
  let csv = "name,job,org,country,email,phone\n";

  var loadMore = true;
  var index = 0;

  var stream = fs.createWriteStream("mipim-participants.csv", {
    flags: "a",
  });

  while (loadMore) {
    const item = participants[index];
    let [link, csvLine] = item;

    loadMore = false;
    index++;

    console.log("@opening link", `${index} of ${participants.length}`, link);
    // Create a new page
    const detailsPage = await browser.newPage();
    await detailsPage.setViewport(options);

    // Configure the navigation timeout
    await detailsPage.goto(link, {
      waitUntil: "load",
      timeout: 60000,
    });
    console.log("@detailsPage opened");

    const detailsPageLoaded = await detailsPage.waitForSelector(
      ".participant-more-info-container",
      {
        timeout: 60000,
      }
    );
    console.log("@detailsPage loaded");

    if (detailsPageLoaded) {
      const participant = await detailsPage.evaluate(() => {
        let item = document.querySelector(".participant-more-info-container");
        console.log(item);

        const email = item
          .querySelector(
            ".contact-items [data-dtm='participantdirectory_participantDetail_email']"
          )
          ?.textContent?.replaceAll(",", "/");

        const phone = item
          .querySelector(
            ".contact-items [data-dtm='participantdirectory_participantDetail_phone']"
          )
          ?.textContent?.replaceAll(",", "/");

        console.log(email, phone);

        const questionBlocks = item.querySelectorAll(".form-group-view-mode");

        const infoSections = {};
        [...questionBlocks]?.map((questionBlock) => {
          const question = questionBlock
            .querySelector("h4")
            ?.textContent?.replaceAll(",", "/");
          const answers = questionBlock.querySelectorAll(".label");
          const labels = [...answers].map((a) => {
            return a?.textContent?.replaceAll(",", "/");
          });
          console.log(email, phone, question, labels);
          infoSections[question] = labels.reduce(
            (s, label) => s + " ## " + label,
            ""
          );
          return {
            [question]: labels.reduce((s, label) => s + " ## " + label, ""),
          };
        });

        return { email, phone, infoSections };
      });

      console.log("@closing page", link);
      await detailsPage.close();

      csvLine = `${csvLine},${participant.email},${participant.phone}`;

      Object.keys(participant.infoSections).map((key) => {
        csvLine = `${csvLine},${key}: ${participant.infoSections[key]}`;
      });
      loadMore = true;

      stream.write(csvLine + "\n");
      // csv += csvLine + `\n`;
    }
  }

  // participants.forEach(async (item) => {

  // });

  // console.log("@csv ready");

  // fs.writeFileSync("mipim-participants.csv", csv);

  stream.end();

  console.log("@csv saved");

  return participants;
};

export const autoScroll = async (page, targetItems = 5) => {
  const scroll = await page.evaluate(async (targetItems) => {
    return await new Promise((resolve) => {
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        let items = document.querySelectorAll(".participant-item");

        console.log(scrollHeight, "items.length", items.length);

        window.scrollBy(0, scrollHeight);

        if (items.length >= targetItems) {
          clearInterval(timer);
          resolve(items.length);
        }
      }, 300);
    });
  }, targetItems);
  console.log("@scroll ended", scroll);
  return scroll;
};
