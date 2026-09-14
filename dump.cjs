const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://nathanieleyo.alphalink.digital', { waitUntil: 'networkidle0' });
    const text = await page.evaluate(() => document.body.innerText);
    console.log(text);
    await browser.close();
  } catch (e) {
    console.error(e);
  }
})();
