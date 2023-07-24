import express , {Request,Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Connection } from './database/db';

// import { Connection } from './database/db.js';
// import router from './routes/route.js';
dotenv.config();
 

const app = express();
// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

app.get('/',(req,res) =>{
    res.send( "Hello")
})

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

Connection(username||'',password||'');