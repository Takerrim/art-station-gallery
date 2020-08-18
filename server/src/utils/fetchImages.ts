import { webkit } from 'playwright'

const MAIN_PAGE_URL = 'https://www.artstation.com/community/channels'
const COMMUNITY_DATA_URL = 'https://www.artstation.com/api/v2/community/explore/projects/community.json'

export const fetchData = async (resMiddleware: any) => {
  const browser = await webkit.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  page.on('response', async (res) => {
    if (res.request().url().includes(COMMUNITY_DATA_URL)) {
      const jsonRes = await res.json() as any
      resMiddleware.json(jsonRes.data)
    }
  })

  await page.goto(MAIN_PAGE_URL)
  console.log(`went to ${MAIN_PAGE_URL}`)
  browser.close()
}


















// const browser = await webkit.launch()
// const context = await browser.newContext()
// const page = await context.newPage()
// page.on('response', async (res) => {
//   if (res.request().url().includes(COMMUNITY_DATA_URL)) {
//     const jsonRes = await res.json() as any
//     const writeAsync = promisify(writeFile)
//     let counter = 0
//     for(let item of jsonRes.data) {
//       if (counter++ < 2) {
//         const imgUrl = item.smaller_square_cover_url as string
//         const dotIndex = imgUrl.lastIndexOf('.')
//         const questionMarkIndex = imgUrl.lastIndexOf('?')
//         const ext = imgUrl.slice(dotIndex + 1, questionMarkIndex)
//         const img = await fetch(imgUrl)
//         const bin = await img.buffer()
//         await writeAsync(path.resolve(__dirname, `../images/img${item.id}.${ext}`), bin)
//       }
//     }
//   }
// })
