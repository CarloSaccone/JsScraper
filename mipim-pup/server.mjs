// (async () => {
//   const browser = await puppeteer.launch({
//       headless: false,
//     });
//   const page = await browser.newPage();
//   await page.setRequestInterception(true);
//   await page.goto('https://www.google.com/');
// })();

import puppeteer from "puppeteer";
import { parsePage, autoScroll } from "./utils.mjs";
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

const options = { width: 1280, height: 700, deviceScaleFactor: 1 };

const loginurl =
  "https://auth.reedexpo.com/secure/Account/Login?ReturnUrl=%2Fsecure%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DRX-AUTH-CL-Pkce01%26redirect_uri%3Dhttps%253A%252F%252Fwww.mipim.com%252Fservices%252Frxauth-pkce%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access%2520roles%26state%3De668b5bd37c84296ab8929088dcdfbd7%26code_challenge%3DHzj4OBSoubjp6dw0h8GlnMhbb4POpPhciAr1PQysUn0%26code_challenge_method%3DS256%26ui_locales%3Den-GB%26acr_values%3Devent_edition_id%253Aeve-32f820fc-5899-4194-ac25-1e485336da83%26response_mode%3Dquery";

const investors = //7209
  "https://www.mipim.com/en-gb/portal/participant-portal/participant-directory.html?refinementList%5B0%5D%5B0%5D=ppsFilterData.Your%20company%20activity.lvl0%3AINVESTORS%20%26%20FINANCIAL%20INSTITUTIONS";

const developers = //4710
  "https://www.mipim.com/en-gb/portal/participant-portal/participant-directory.html?refinementList%5B0%5D%5B0%5D=ppsFilterData.Your%20company%20activity.lvl0%3ADEVELOPERS";

const realestatebusinessservices = //3412
  "https://www.mipim.com/en-gb/portal/participant-portal/participant-directory.html?refinementList%5B0%5D%5B0%5D=ppsFilterData.Your%20company%20activity.lvl0%3AREAL%20ESTATE%20BUSINESS%20SERVICES%20%26%20SUPPLIERS";

const brokers = //1559
  "https://www.mipim.com/en-gb/portal/participant-portal/participant-directory.html?refinementList%5B0%5D%5B0%5D=ppsFilterData.Your%20company%20activity.lvl0%3AADVISER%20%2F%20AGENT%20%2F%20BROKER";

(async () => {
  var myArgs = process.argv.slice(2);
  const [dataurl = brokers, targetItems = 1559] = myArgs;
  // console.log(dataurl);
  // console.log(targetItems);
  // return;

  // Create an instance of the chrome browser
  // But disable headless mode !
  const browser = await puppeteer.launch({
    headless: true,
    args: [`--window-size=${options.width},${options.height}`], // new option
  });

  // Create a new page
  const page = await browser.newPage();
  await page.setViewport(options);

  // Configure the navigation timeout
  await page.goto(loginurl, {
    waitUntil: "load",
    // Remove the timeout
    timeout: 0,
  });

  await page.$eval(
    "#username",
    (el) => (el.value = "lorenzo.belloni@yeldo.com")
  );
  await page.$eval("#password", (el) => (el.value = "Yeldoyeldo1!"));

  const [response] = await Promise.all([
    page.waitForNavigation(),
    page.click("#submit"),
  ]);

  await page.goto(dataurl, {
    waitUntil: "load",
    // Remove the timeout
    timeout: 0,
  });

  // Do your stuff
  // ...
  // console.log(await page.$eval('LI.nd-list__item.in-feat__item[aria-label=superficie]', el => el.textContent))
  await page.waitForSelector(".participant-item", {
    timeout: 60000,
  });
  console.log("@loaded");

  await autoScroll(page, targetItems);

  console.log("@parsePage start");

  await parsePage(page, browser, options);
})();
