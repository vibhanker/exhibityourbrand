import './App.css';

import LandingPage from './components/Pages/LandingPage/LandingPage';
import Firestore from "./components/FirebaseLearn/firestore";

function App() {
  return (
    <div className="App">
        <LandingPage/>
        {/* <Firestore/> */}
    </div>
  );
}

export default App;
