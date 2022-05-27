const path = require('path');

module.exports = x => path.resolve(__dirname, '../../../..', ...x.split('/../..'));
