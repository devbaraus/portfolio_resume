const puppeteer = require('puppeteer')
const { watchFile } = require('fs')

;(async () => {
  async function generate() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto((process.env.URL || 'http://localhost:8080') + '/print', {
      waitUntil: 'networkidle0',
    })

    const pdf = await page.pdf({
      printBackground: true,
      path: 'public/resume.pdf',
      width: '900px',
      height: '1275px',
      // format: 'letter',
    })

    await browser.close()

    console.log('Resume generated!')
  }

  try {
    await generate()

    const watcher = watchFile('./dist/print/index.html', async () => {
      await generate()
    })
  } catch (err) {
    throw err
  }
})()
