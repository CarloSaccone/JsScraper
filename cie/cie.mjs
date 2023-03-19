import { beep, createPage, findSede, reloadPage } from "./utils.mjs";

("https://www.prenotazionicie.interno.gov.it/cittadino/a/sc/wizardAppuntamentoCittadino/sceltaComune");
("https://www.prenotazionicie.interno.gov.it/cittadino/a/sc/wizardAppuntamentoCittadino/sceltaSede");

// const table = document.querySelector(".tabComuneScelto");
// const rows = table.querySelectorAll("tbody tr");

(async () => {
  var myArgs = process.argv.slice(2);
  const loginurl =
    "https://www.prenotazionicie.interno.gov.it/cittadino/n/sc/loginCittadino/sceltaLogin";

  const newAppUrl =
    "https://www.prenotazionicie.interno.gov.it/cittadino/a/sc/wizardAppuntamentoCittadino/sceltaComune";

  //open page
  const page = await createPage();

  //login
  await page.goto(loginurl, {
    waitUntil: "load",
  });
  console.log("@login page opened");

  //wait to be logged in with spid
  await page.waitForSelector("app-elenco-appuntamento-cittadino", {
    timeout: 60000,
  });
  console.log("@logged");

  await page.goto(newAppUrl, {
    waitUntil: "load",
  });

  await page.waitForSelector(".select-wrapper input", {
    timeout: 60000,
  });
  console.log("@form opened");

  await page.evaluate(() => {
    //select "Minori"
    const select = document.querySelector(".select-wrapper input");
    select.click();
  });

  console.log("@select opened");

  await page.waitForSelector(".filtrable", {
    timeout: 60000,
  });

  await page.evaluate(() => {
    var options = document.querySelectorAll(".filtrable");
    [...options].map((i) => {
      console.log(i);
      if (i.textContent.trim() === "Minori") i.click();
    });
  });

  console.log("@selected Minori");

  await page.evaluate(() => {
    //fill form
    document.querySelector("#nomeRichiedente").value = "Alice";
    document.querySelector("#cognomeRichiedente").value = "Saccone";
    document.querySelector("#codiceFiscaleRichiedente").value =
      "SCCLCA19D61H501Z";
    document.querySelector("input#comuneResidenza").value = "Roma";
  });

  console.log("@form filled");

  await page.waitForSelector(".typeahead.dropdown-menu.show", {
    timeout: 0,
  });

  console.log("@typeahead opened");

  await page.evaluate(() => {
    //select "Roma"
    document.querySelector(".typeahead.dropdown-menu.show li").click();
  });

  // btn btn-outline-secondary

  var found = await findSede(page);

  while (!found) {
    await reloadPage(page);
    found = await findSede(page);
  }
  beep();
})();
