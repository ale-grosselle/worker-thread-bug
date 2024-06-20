## Next.js Worker thread bug
In this project we show the bug that happens when we try to use the worker_threads module in a Next.js project.

## How to reproduce the bug
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. On the console you will see the following error: "uncaughtException: Error: Cannot find module '/_next/_rsc_app_lib_create-invoice_ts.js'"
