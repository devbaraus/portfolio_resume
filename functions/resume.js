const puppeteer = require('puppeteer-core')
const chromium = require('chrome-aws-lambda')

exports.handler = async (event, context) => {
  const browser = await chromium.puppeteer.launch({
    // Required
    executablePath: await chromium.executablePath,

    // Optional
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  })

  const page = await browser.newPage()

  await page.goto((process.env.URL || 'http://localhost:8080') + '/resume.pdf', {
    waitUntil: 'networkidle0',
  })

  const pdf = await page.pdf({
    printBackground: true,
    path: 'dist/resume.pdf',
    width: '900px',
    height: '1275px',
    // format: 'letter',
  })

  await browser.close()

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/pdf',
    },
    body: JSON.stringify({
      buffer: pdf,
    }),
  }
}
