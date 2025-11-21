const config = require('config');

const PORT = config.get('port') || 5000;

module.exports = { PORT };
