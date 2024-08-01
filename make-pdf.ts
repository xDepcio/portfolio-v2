import fetch from 'node-fetch'
import * as fs from 'fs'
global.btoa = (b) => Buffer.from(b).toString('base64')

if (process.argv.length < 3) {
    console.error('Provide first argument whether to use sandbox or not (t, f)')
    process.exit(1)
}

const sandbox = process.argv[2] === 't'

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
        sandbox: sandbox,
        format: `273mmx386mm`,
    })
}).then(response => {
    response.body!.pipe(fs.createWriteStream('Alekasnder-Drwal-CV.pdf'))
})
