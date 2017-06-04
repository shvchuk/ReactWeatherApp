import React, {Component} from 'react';
import Nav from 'Nav';

// class Main extends React.Component{
//   render(){
//     return(
//         <div>
//           <Nav/>
//           <h2>Main Component</h2>
//
//         </div>
//     );
//   }
// }

const Main = (props) => {
  return(
      <div>
        <Nav/>
          <div className="row">
            <div className="columns medium-6 large-4 small-centered">
              {props.children}
            </div>
          </div>
      </div>
  );
};

module.exports = Main;