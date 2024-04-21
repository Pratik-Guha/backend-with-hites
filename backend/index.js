import express from 'express';

const app = express();
app.use(express.static('dist'));

app.get('/',(req,res)=>{
    res.send('hello from express');
    
})
app.get('/api/jokes',(req,res)=>{ 
    const jokes=[
        {
        id:1,
        title:"This is Great Legend Pratik Guha",
        content:"funny"
    },
    {
        id:2,
        title:"I will marry a beautiful woman",
        content:"funny"
    }
    ];
    res.send(jokes);
})

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})