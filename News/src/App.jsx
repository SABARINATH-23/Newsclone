import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Business from './Pages/Business';
import Home from './Pages/Home';
const App = ()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/business' element={<Business/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;

// https://newsdata.io/api/1/news?apikey=pub_85954884a6390dc6a99ae5e495bf9a5d68e76&q=business