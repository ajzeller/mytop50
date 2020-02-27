const dotenv = require('dotenv');
const withSass = require("@zeit/next-sass");

dotenv.config();

module.exports = withSass({
  env: {
    BASE_URL: process.env.BASE_URL
  }
})
