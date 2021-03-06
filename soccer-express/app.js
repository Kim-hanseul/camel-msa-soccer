require('dotenv').config();
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
const board = require('./app/routes/board.route')
const todo = require('./app/routes/todo.routes')
const user = require('./app/routes/user.routes')
const admin = require('./app/routes/admin.routes')
const game = require('./app/routes/game.routes')
const basic = require('./app/routes/basic.routes')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api/board', board)
app.use('/api/user', user)
app.use('/api/basic', basic)
app.use('/api/game', game)
app.use('/api/admin', admin)
app.use('/api/todo', todo)
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
app.listen(port, () => {
  console.log({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})

function computeBMI(payload){
  const {name, height, weight} = payload
      //Obtain user inputs
      let _height=Number(height);
      let _weight=Number(weight);

      //Perform calculation
      let bmi = _weight/Math.pow(_height,2);

      let output = Math.round(bmi*100)/100;
      var result = {name, height, weight}
      console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
      if (output<18.5)
        result.bmi = "저체중";
      if (output>=18.5 && output<=25)
        result.bmi = "정상";
      if (output>=25 && output<=30)
        result.bmi = "과체중";
      if (output>30)
        result.bmi = "경도비만";
        console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
      return result
}
app.post("/api/basic/bmi", (req, res)=>{
  const {name, height, weight} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`이름 : ${name}`)
  console.log(`키 : ${height}`)
  console.log(`몸무게 : ${weight}`)
  const json = computeBMI({name, height, weight})
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
})

