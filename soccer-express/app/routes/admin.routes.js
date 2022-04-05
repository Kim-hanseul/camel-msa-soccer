const express =  require('express');
const adminRouter = express.Router()

adminRouter.use(function timeLog(req, res, next) {
    console.log('### Admin router ###');
    next();
});