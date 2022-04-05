const express =  require('express');
const basicRouter = express.Router()

basicRouter.use(function timeLog(req, res, next) {
    console.log('### Admin router ###');
    next();
});