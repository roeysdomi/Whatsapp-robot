
const puppeteer = require('puppeteer')
const fs = require('fs').promises;

const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
//puppeteer.use(AdblockerPlugin({ blockTrackers: true }))



// That's it, the rest is puppeteer usage as nformal 😊
async function pupcheck ()
{

           try{

             console.log(`open`);
          const browser=await puppeteer.launch( {headless: true,defaultViewport: null,executablePath:"./node_modules/puppeteer/.local-chromium/win64-848005/chrome-win/chrome" ,userDataDir: "./mydatadir", args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--single-process'
           ]})
          const page = await browser.newPage()
          await page.goto('https://facebook.com/')

          await browser.close();
          return base64Image = await image.toString('base64');

           }
           catch(err)
           {
             console.log(err)
           }


}

module.exports.pup=pupcheck;
