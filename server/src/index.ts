import express, {Router, Express} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const port: number = 4000;
const charLimit: number = 10000;

//setup express
const app: Express = express();
app.use(cors());
app.use(express.json());


//setup mongoose
mongoose.connect("mongodb://database:27017/CSF_Takehome");
const db: mongoose.Connection = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
const uselessFactSchema = new mongoose.Schema({
  name: String,
  uselessFact: String,
  postedDate: Date,
  rating: Number
});
const uselessFacts = mongoose.model("uselessFacts", uselessFactSchema);


export const router: Router = express.Router();
router.use(express.json());

router.post('/', async (req, res) => {
  console.log(req.body);
  let {name, uselessFact, rating} = req.body;

  if(name == undefined || name === null || 
    (typeof name !== 'string' && !(name instanceof String))  || 
    name.length  <= 0) {
      return res.send(400).json({error: "Please enter a name."});
    }
  if(name.length >= charLimit) return res.send(400).json({error: `Please enter a name that is less than ${charLimit} characters.`});

  if(uselessFact == undefined || uselessFact === null || 
    (typeof uselessFact !== 'string' && !(uselessFact instanceof String))  || 
    uselessFact.length  <= 0) {
      return res.send(400).json({error: "Please enter a useless fact."});
    }
  if(name.length >= charLimit) return res.send(400).json({error: `please enter a useless fact that is less than ${charLimit} characters.`});
  
  if(typeof rating !== 'number' || rating < 0 || rating > 1) return res.send(400).json({error: 'please enter a rating that is number and is greater than or equal to 0 and less than or equal to 1.'})
  
  
  // let dbResp = await new uselessFacts({name: name, uselessFact: uselessFact, postedDate: Date.now(), rating: rating}).save();

  return res.sendStatus(200);
});



app.use('/', router);
app.listen(port, () => console.log("Server Started on " + port));
