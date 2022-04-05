const express =  require('express');
const gameRouter = express.Router()

gameRouter.use(function timeLog(req, res, next) {
    console.log('### Admin router ###');
    next();
});