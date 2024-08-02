import fetch from 'node-fetch'
import * as fs from 'fs'
global.btoa = (b) => Buffer.from(b).toString('base64')

if (process.argv.length < 3) {
    console.error(`Arguments:
        $1: use sandbox <t, f>
        $2: input url <e.g. https://adrwal.pl/cv>
        $3: output file <e.g. cv.pdf>`)
    process.exit(1)
}

const sandbox = process.argv[2] === 't'
const url = process.argv[3]
const output = process.argv[4]

fetch('https://api.pdfshift.io/v3/convert/pdf', {
    method: 'POST',
    headers: {
        Authorization: 'Basic ' + btoa(`api:${process.env.PDFSHIFT_API_KEY}`),
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        source: url,
        landscape: false,
        use_print: false,
        sandbox: sandbox,
        format: `273mmx386mm`,
    })
}).then(response => {
    response.body!.pipe(fs.createWriteStream(output))
})
