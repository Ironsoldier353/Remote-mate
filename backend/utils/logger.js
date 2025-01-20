const log = (message) => console.log(`[LOG]: ${message}`);
const errorLog = (error) => console.error(`[ERROR]: ${error}`);

module.exports = {
  log,
  errorLog,
};
