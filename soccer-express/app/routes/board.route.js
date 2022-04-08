const { boardform ,boardlist } = require('../controllers/board.controller');
module.exports = x => {x.app.post(`${x.url}/write`, boardform)
                        x.app.get(`${x.url}/list`,boardlist)}