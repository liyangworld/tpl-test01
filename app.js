const express = require('express')
const app = express();

app.get('/',(req,res)=>{
	res.send('welcome!')
})

app.listen(6002,()=>{
	console.log('服务器监听于 http://localhost:6002')
})