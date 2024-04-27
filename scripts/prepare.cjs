/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const isCi = process.env.IS_CI !== undefined;
if (!isCi) {
  require('husky').install();
}
