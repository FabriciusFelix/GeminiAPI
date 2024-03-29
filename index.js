const express = require('express');
const path = require('path');
const app = express();

const router = express.Router();    
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})
router.get('/contato', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/contato.html'))
})
app.use(router)
app.listen(process.env.PORT || 7070, ()=> console.log('server listening on port 7070'));
// process.title = 'GeminiApi';
// var args = process.argv,
//    port = args[2] || 7070,
//    webServer = require('./server');

//  webServer.listen(port, function() {
//    console.log('Server started at port ' + port);
//  });


// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const dotenv = require("dotenv");
// dotenv.config()
// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// async function run() {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
//   const prompt = "O que é você?"

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();