# Vivliostyle Concurrent Build Bug

## Reproduce

1. Clone repo
2. Install dependencies: `npm i`
3. Run script: `node index.mjs`

Expected error:

```
Building two PDFs at the same time...
node:internal/process/promises:394
    triggerUncaughtException(err, true /* fromPromise */);
    ^

page.pdf: Protocol error (Page.printToPDF): Printing failed
    at buildPDF (/Users/ray/Projects/vivliostyle-bug/node_modules/@vivliostyle/cli/dist/output/pdf.js:191:28)
    at async build (/Users/ray/Projects/vivliostyle-bug/node_modules/@vivliostyle/cli/dist/build.js:84:30) {
  name: 'Error'
}

Node.js v22.11.0
```
