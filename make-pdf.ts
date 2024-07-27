import fetch from 'node-fetch'
import * as fs from 'fs'
global.btoa = (b) => Buffer.from(b).toString('base64')

fetch('https://api.pdfshift.io/v3/convert/pdf', {
    method: 'POST',
    headers: {
        Authorization: 'Basic ' + btoa(`api:${process.env.PDFSHIFT_API_KEY}`),
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        source: 'https://www.adrwal.pl/cv',
        landscape: false,
        use_print: false,
        sandbox: true,
        format: `273mmx386mm`,
    })
}).then(response => {
    response.body!.pipe(fs.createWriteStream('cv.pdf'))
})
