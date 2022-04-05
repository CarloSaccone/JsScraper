

// (async () => {
//   const browser = await puppeteer.launch({
//       headless: false,
//     });
//   const page = await browser.newPage();
//   await page.setRequestInterception(true);
//   await page.goto('https://www.google.com/');
// })();

const puppeteer = require('puppeteer');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;


async function parsePage(page,ruleSet) {
  await page.waitForSelector(ruleSet.superficie.value);

  const superfici = await page.evaluate((ruleSet) =>
  {
    let items = document.querySelectorAll(ruleSet.superficie.value)
    return [Array.from(
      items,
    (element) => element.textContent), items.length]
    }, ruleSet
  )
  const prezzi = await page.evaluate((ruleSet) =>
  {
    let items = document.querySelectorAll(ruleSet.prezzo.value)
    return [Array.from(
      items,
      (element) => element.textContent), items.length]
    }, ruleSet
  )

  // console.log(superfici,prezzi)

  var pricesmq = superfici[0].map((i,index)=>{
    var sup = i.replace(ruleSet.superficie.replace,"").replace(/\./g, "")
    var price = prezzi[0][index].replace(ruleSet.prezzo.replace,"").replace(/\./g, "")
    var pricemq = Number(price) / Number(sup)
    // console.log(Number(price) , Number(sup), pricemq)
    return pricemq
  })
  pricesmq = pricesmq.filter(i=>i)

  const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
  const result = average(pricesmq ); // 5
  console.log(`found ${pricesmq.length} prices`, result);

  var hasNext = false
  try {
    hasNext = await page.waitForSelector('DIV.in-pagination.in-searchList__pagination > DIV.in-pagination__control > A.in-pagination__item > svg');

    if(!!hasNext)
      await page.click('DIV.in-pagination.in-searchList__pagination > DIV.in-pagination__control[data-cy=pagination-next] > A.in-pagination__item > svg');

    console.log("hasNext",!!hasNext)
  }
  catch(e){
    hasNext = false
  }

  return !!hasNext
}

(async () => {

  var myArgs = process.argv.slice(2);
  const [
    url = 'https://ourcodeworld.com',
    ruleSetString = `{\"superficie\":{\"field\":\"superficie\",\"value\":\"HTML > BODY > DIV > SECTION.in-wrapper.is-listView.in-searchList--list.in-searchList > DIV.in-main.in-searchList__main > UL.in-realEstateResults.nd-list > LI.nd-list__item.in-realEstateResults__item > DIV.in-card.nd-mediaObject.nd-mediaObject--colToRow.in-realEstateCard.in-realEstateCard--interactive.in-realEstateListCard > DIV.nd-mediaObject__content.in-card__content.in-realEstateListCard__content > UL.nd-list.nd-list--pipe.in-feat.in-feat--full.in-feat__mainProperty.in-realEstateListCard__features > LI.nd-list__item.in-feat__item[aria-label=superficie] > DIV.in-feat__data\",\"replace\":\"m²\"},\"prezzo\":{\"field\":\"prezzo\",\"value\":\"HTML > BODY > DIV > SECTION.in-wrapper.is-listView.in-searchList--list.in-searchList > DIV.in-main.in-searchList__main > UL.in-realEstateResults.nd-list > LI.nd-list__item.in-realEstateResults__item > DIV.in-card.nd-mediaObject.nd-mediaObject--colToRow.in-realEstateCard.in-realEstateCard--interactive.in-realEstateListCard > DIV.nd-mediaObject__content.in-card__content.in-realEstateListCard__content > UL.nd-list.nd-list--pipe.in-feat.in-feat--full.in-feat__mainProperty.in-realEstateListCard__features > LI.nd-list__item.in-feat__item.in-feat__item--main.in-realEstateListCard__features--main\",\"replace\":\"€ \"}}`
  ] = myArgs
  const ruleSet = JSON.parse(ruleSetString);


  // Create an instance of the chrome browser
  // But disable headless mode !
  const browser = await puppeteer.launch({
      headless: false
  });

  // Create a new page
  const page = await browser.newPage();

 

  // Configure the navigation timeout
  await page.goto(url, {
      waitUntil: 'load',
      // Remove the timeout
      timeout: 0
  });

  // Do your stuff
  // ...
  // console.log(await page.$eval('LI.nd-list__item.in-feat__item[aria-label=superficie]', el => el.textContent))

  var hasNext = await parsePage(page,ruleSet)
  while (hasNext){
    console.log("next page found")
    hasNext = await parsePage(page,ruleSet)
  }

})();