import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { ProductInput, userInput } from "./formSource";
import './style/dark.scss'
import {DarkModeContext} from './context/darkModeContext'
import { useContext } from "react";


function App() {

  const {darkmode} = useContext(DarkModeContext)
  
  
  return (
    <div class={darkmode ? "app dark" : "app"}>
     <BrowserRouter>
     <Routes>
       <Route path="/">
          <Route index  element={<Home  />} />
          <Route path="login" element={<Login/>}  />
          <Route path="users" >
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>} />
            <Route path="new" element={<New inputs={userInput}  title="Add New User" />} />
          </Route>
          <Route path="products" >
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>} />
            <Route path="new" element={<New inputs={ProductInput} title="Add New product" />} />
          </Route>
       </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
