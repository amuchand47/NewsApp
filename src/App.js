import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = ()=> {
  
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
    return (

      <div>

        <BrowserRouter>
          
          <NavBar/>

          <Routes>
            <Route exact path="/" element = { <News key="general" pageSize={pageSize} apiKey={apiKey} country="us" category ="general"/>}/>
            <Route exact path="/business" element = { <News key="business" pageSize={pageSize} apiKey={apiKey} country="us" category ="business"/>}/>
            <Route exact path="/entertainment" element = { <News key="entertainment" pageSize={pageSize} apiKey={apiKey} country="us" category ="entertainment"/>}/>
            <Route exact path="/general" element = { <News key="general" pageSize={pageSize} apiKey={apiKey} country="us" category ="general"/>}/>
            <Route exact path="/health" element = { <News key="health" pageSize={pageSize} apiKey={apiKey} country="us" category ="health"/>}/>
            <Route exact path="/science" element = { <News key="science" pageSize={pageSize} apiKey={apiKey} country="us" category ="science"/>}/>
            <Route exact path="/sports" element = { <News key="sports" pageSize={pageSize} apiKey={apiKey} country="us" category ="sports"/>}/>
            <Route exact path="/technology" element = { <News key="technology" pageSize={pageSize} apiKey={apiKey} country="us" category ="technology"/>}/>    
          </Routes>

        </BrowserRouter>
      
      </div>

    )
  
}

export default App