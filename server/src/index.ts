import express, {Router, Express} from 'express';
import cors from 'cors';

const port: number = 4000;

const app: Express = express();
app.use(cors());
app.use(express.json());

export const router: Router = express.Router();


router.get('/', async (req, res) => {
  return res.status(200).json({message: "test"});
});

router.get('/something', async (req, res) => {
  return res.status(200).json({message: "test somethign else."});
});


app.use('/', router);
app.listen(port, () => console.log("Server Started on " + port));
