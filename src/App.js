import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FormBody from './component/FormBody'
import List from './component/List'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<FormBody/>}></Route>
          <Route path='/list' element={<List/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
