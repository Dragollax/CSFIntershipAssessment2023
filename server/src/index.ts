import express, {Router, Express} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const port: number = 4000;

//setup express
const app: Express = express();
app.use(cors());
app.use(express.json());


//setup mongoose
mongoose.connect("mongodb://root:password@localhost/CSF_Takehome")
const db: mongoose.Connection = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

export const router: Router = express.Router();


router.get('/', async (req, res) => {
  return res.status(200).json({message: "test"});
});

router.get('/something', async (req, res) => {
  return res.status(200).json({message: "test somethign else."});
});

app.use('/', router);
app.listen(port, () => console.log("Server Started on " + port));
