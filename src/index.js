import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Components/Register';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from "react-router-dom";
import CustomSearch from './Components/CustomSearch';

ReactDOM.render((
       <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/custom-search" component={CustomSearch} />
         </Switch>
       </BrowserRouter>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
