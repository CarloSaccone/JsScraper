import { exec } from "child_process";
import puppeteer from "puppeteer";

export const beep = () => {
  // process.stderr.on("\x07");
  // process.stdout.write("\x07");
  // require("child_process").exec("powershell.exe [console]::beep(500,600)");
  // exec(`rundll32 user32.dll,MessageBeep`);

  // // Single beep
  // exec("[console]::beep(1000, 500)", { shell: "powershell.exe" });

  // Multiple beeps
  exec("1..3 | %{ [console]::beep(1000, 500) }", { shell: "powershell.exe" });
};

export const createPage = async (browser) => {
  const options = { width: 1440, height: 1000, deviceScaleFactor: 1 };

  // Create an instance of the chrome browser
  // But disable headless mode !
  if (!browser)
    browser = await puppeteer.launch({
      headless: false,
      args: [`--window-size=${options.width},${options.height}`], // new option
    });

  // Create a new page
  const page = await browser.newPage();
  await page.setViewport(options);

  return page;
};

//#########################################################################################################
export const findSede = async (page) => {
  console.log("@findSede");

  await page.waitForSelector("app-scelta-sede table tbody tr", {
    timeout: 0,
  });

  console.log("@app-scelta-sede opened");

  //find sedi
  var sedi = await page.evaluate(() => {
    const nodiSede = [
      ...document.querySelectorAll("app-scelta-sede table tbody tr"),
    ];
    const nomiSede = nodiSede.map((i) => i.textContent);
    console.log(nomiSede);
    return nomiSede;
  });

  console.log("@sedi", sedi);

  const fabiola = (element) => element.includes("fabiola");
  // if (sedi.some(fabiola)) beep();
  console.log("found:", sedi.some(fabiola));
  return sedi.some(fabiola);
};

//#####################################################################################################################
export const reloadPage = async (page) => {
  console.log("@reloadPage");

  //back click
  await page.waitForSelector(".btn.btn-outline-secondary", {
    timeout: 0,
  });

  console.log("@back button found");

  await Promise.all([
    page.waitForNavigation(),
    page.click(".btn.btn-outline-secondary"),
  ]);

  console.log("@back button clicked");

  //continue click
  await page.waitForSelector(".btn.btn-primary", {
    timeout: 0,
  });

  console.log("@next button found");

  // await Promise.all([page.waitForNavigation(), page.click(".btn.btn-primary")]);

  // console.log("@next button clicked");
};
