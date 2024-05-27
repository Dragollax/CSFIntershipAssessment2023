import { useEffect, useState } from 'react'
import './App.css'
import { Button } from '@mui/material'
import Submission from './components/Submittion';


function App() {
  const [randomFact, setRandomFact] = useState<string>("");
  const [todayRandFactDisp, setTodayRandFactDisp] = useState<boolean>(true);

  //fetch todays useless fact
  useEffect(() => {
      fetch("https://uselessfacts.jsph.pl/api/v2/facts/today").then((resp) => resp.json()).then(val => {
        setRandomFact(val.text);
      });
  }, []);
  
  return (
    <>
    {/* this first displays todays useless fact and then each time the button is clicked it will display a random one. */}
    <p>{todayRandFactDisp ? "Today's Random Fact" : "A Random Fact"}: {randomFact}</p> 
    <Button variant="contained" onClick={() => {
      fetch("https://uselessfacts.jsph.pl/api/v2/facts/random").then((resp) => resp.json()).then((val) => {
        setRandomFact(val.text);
        setTodayRandFactDisp(false);
      });
    }}>Another One?</Button>

      <Submission />
    </>
  )
}

export default App
