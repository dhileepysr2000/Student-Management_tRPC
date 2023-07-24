import Signup from './Signup';
import Tables from './Tables';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './Update';

// import Discription from "./Discription"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
      {/* <Discription/> */}
    </>
  )
}

export default App
