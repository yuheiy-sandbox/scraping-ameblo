const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')

request('http://ameblo.jp/ebizo-ichikawa/', (err, resp, body) => {
  if (!err && resp.statusCode === 200) {
    const $ = cheerio.load(body)
    const result = $('.skin-entryBody').html()
    console.log(result)
    fs.writeFileSync('result.html', result)
  }
})