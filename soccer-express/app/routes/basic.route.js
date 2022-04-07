const { write } = require('../controllers/basic.controller');
module.exports = x => x.app.post(`${x.url}/basic`, write)  ;