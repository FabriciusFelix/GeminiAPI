const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
var cors = require("cors");
dotenv.config()

const express = require('express');
const path = require('path');
var app = express();
app.use(cors(corsOptions));

var corsOptions = {
    origin: 'http://localhost:5500',
    optionsSuccessStatus: 200 // For legacy browser support
}

const router = express.Router();    
router.get('/',(cors(corsOptions)), (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'));
    res.json({success: true})
})
router.get('/home',(cors(corsOptions)), (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
    
    
})
router.get('/home.css',(cors(corsOptions)), (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.css'))
})
router.get('/contato', (req, res)=>{
    
    res.sendFile(path.join(__dirname + '/pages/contato.html'))
})


router.get('/prompt',(cors(corsOptions)), (req, res)=>{
    const genAI = new GoogleGenerativeAI(process.env.API_KEY)
    var responseToFront = '';            
    console.log(req.url)
    console.log('Body'+req.body)
    console.log('Carregando genAI')
    async function run() {
       const model = genAI.getGenerativeModel({ model: "gemini-pro"});
       const prompt = req.url.replace('/prompt?','')
       const result = await model.generateContent(prompt);
       const response = await result.response;
       const text = response.text();
       responseToFront = text;
       console.log( 'Response dentro da api: '+ responseToFront) 
    //    res.json(text);
    return res.json({
        success: true,
        message: responseToFront
    }) 
    }
    run(); 
    
})

app.get('/api/user',(req,res) => {
    const user = [{
        id:123,
        name: 'John'
    },{
        id:234,
        name: 'Bob'
    },{
        id:345,
        name: 'Sue'
    }];
    res.json(user);
});
app.post('/prompt',function (req, res){
    console.log('dentro do Post')
    const genAI = new GoogleGenerativeAI(process.env.API_KEY)
    var responseToFront = '';    
    let data = req.body;
    console.log('Valor data: ',req.body)
    if (tipeof(data) == undefined) {
        data = 'Quantos anos Micheal Jackson tinha?'
    }
    console.log(req.body)
    console.log('Carregando genAI')
    async function run() {
       const model = genAI.getGenerativeModel({ model: "gemini-pro"});
       const prompt = data;
       const result = await model.generateContent(prompt);
       const response = await result.response;
       const text = response.text;
       responseToFront = text;
       console.log( 'Response dentro da api: '+ responseToFront) 
       res.json(responseToFront);
    }
    run();
})
app.post('/api/prompt', (req, res)=>{
    console.log('dentro do Post')
    const genAI = new GoogleGenerativeAI(process.env.API_KEY)   
    let data = '';
    console.log(req.text)
    console.log('Carregando genAI')
    async function run() {
       const model = genAI.getGenerativeModel({ model: "gemini-pro"});
       const prompt = req.body;
       const result = await model.generateContent(prompt);
       const response = await result.response;
       const text = response.text;
       responseToFront = text;
       console.log( 'Response dentro da api: '+ responseToFront) 
       res.send(responseToFront)
    }
    run();        
})


app.use(router)
app.listen(process.env.PORT || 7070, ()=> console.log('server listening on port 7070'));
