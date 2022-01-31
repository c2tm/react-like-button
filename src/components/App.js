import {useState} from 'react';
import './App.css';



function App() {

  const [buttonCount, countUpdate] = useState(0);

  const buttonText = () => {
    if (buttonCount === 1) {
      return (`1 Like`);
    } else {
      return (`${buttonCount} Likes`);
    }
  }  

  return (
    <div className="App">
      <button type="submit" className="button" onClick={() => countUpdate(buttonCount + 1)}>
        <span>{buttonText()}</span>                           
        </button>
    </div>
  );
}

export default App;
