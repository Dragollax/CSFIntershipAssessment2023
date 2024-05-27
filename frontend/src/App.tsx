import { useEffect, useState } from 'react'
import './App.css'
import { Button, TextField } from '@mui/material'

function App() {
  const [todaysFact, setTodaysFact] = useState<string>("");

  useEffect(() => {
    (async () => {
      let resp = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today");
      resp = await resp.json();
      //@ts-ignore
      setTodaysFact(resp.text);
    })();
  }, []);

  return (
    <>
    <p>Todays useless fact: {todaysFact}</p>
    <TextField
          id="outlined-textarea"
          label="add a useless fact here"
          placeholder="Placeholder"
          multiline
          style={{width: "100%"}}
        />
    <Button variant="contained">Submit</Button>
    </>
  )
}

export default App
