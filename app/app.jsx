import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom';

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// Load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

ReactDOM.render(
    <HashRouter>
      <div>
        <Route path="/" component={Main}/>
        <Route exact path="/" component={Weather} />
        <Route path="/about" component={About}/>
        <Route path="/examples" component={Examples}/>
      </div>
    </HashRouter>,
  document.getElementById('app')
  );

