import ListItem from "./controller/listItem";

let express = require('express'); 
let app = express(); 
let listItem=new ListItem;

app.listen(3000,function(){
    console.log("hello"+process.cwd());
});

app.get('/abc', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let log=JSON.stringify(req.query)
    console.log(log);
    res.send('Hello World!'+log);
});

app.get('/refresh', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let info=listItem.handlerefresh();
    console.log(info);
    res.send(info);
});

app.get('/add', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let name=req.query.name;
    let info=listItem.handleAdd(name);
    console.log(info);
    res.send(info);
});

app.get('/finish', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let key=req.query.key;
    let info=listItem.handleFinished(key);
    console.log(info);
    res.send(info);
});

app.get('/finishall', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let info=listItem.handleFinishAll();
    console.log(info);
    res.send(info);
});

app.get('/finishnone', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let info=listItem.handleFinishNone();
    console.log(info);
    res.send(info);
});

app.get('/delete', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let key=req.query.key;
    let info=listItem.handleDelete(key);
    console.log(info);
    res.send(info);
});

