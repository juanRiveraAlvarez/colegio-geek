import express, {Express} from "express";

const app: Express = express();

app.listen(4000,()=>{
    console.log("Running in port")
})