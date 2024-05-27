import express, { Router, Express } from 'express';
import cors from 'cors';


const port: Number = 4000;


const app: Express = express();
app.use(cors());
app.use(express.json());

app.use('/api', (await import('./api/routes.js')).router);


app.listen(port, () => console.log("Server Started on " + port));
