const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:8080/print/', {
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
})()



