require('dotenv').config();  
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const auth = require('./routes/auth');
const api = require('./routes/search')



const app = express();
const port = 8002;

sequelize.sync()
    .then(()=>{
        console.log('db 연결 성공');
    })
    .catch((err)=>{
        console.error(err); 
    })

app.use(cors({
  origin: 'http://localhost:3000',  
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: false               
}));

app.use(express.json());
app.use('/auth', auth);
app.use('/api', api);


app.get('/', (req, res) => {
    res.send("fuck you2");
});

app.listen(port, () => {
    console.log( port + '들어옴');
});