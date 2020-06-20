const webpack = require('webpack');

let lastTime = Date.now();
let handler = null;

if (process.env.CI) {
  handler = (percentage, message, ...args) => {
    if ((Date.now() - lastTime) < 5000) {
      return;
    }
    lastTime = Date.now();
    const percentageDisplay = percentage.toFixed(2) * 100;
    console.info(percentageDisplay, '%', message, ...args);
  };
}

const progressPlugin = new webpack.ProgressPlugin(handler);

module.exports = progressPlugin;
