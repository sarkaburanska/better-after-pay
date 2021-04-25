## Dovetail - React quick project

It's time to build the next Afterpay. The first version of the Afterpay app was focused on providing a way for users to
pay in physical stores. It's time to go minimalist and make a bare bones version of the app using React web.

On first load the app should fetch from an API and display a barcode (using
the [react-barcode](https://www.npmjs.com/package/react-barcode) library) with a countdown timer (minutes:seconds). The
API is available at: [https://jet-gull-7204.twil.io/generate-barcode](https://jet-gull-7204.twil.io/generate-barcode)

When the countdown reaches zero, a button should be displayed to hit the API again and fetch another barcode. Tapping it
should fetch a new barcode and resume the countdown.

## Design

You don't need to worry too much about styling, as long as it is functional. Aim for something like this.

## What we're looking for

- Tidy code
- Don't try to over engineer it
- Think of loading and error states

Please don't spend any more than one or two hours on this.

Commit code as you go, and push to a public github repository. When you're done, send us the link.

## How to run this project?

Local run on http://localhost:300
`npm start`

Build?
`npm build`

Test?
`npm test`
