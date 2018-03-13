import React from 'react';
import { connect } from 'react-redux';

const Profiles = ({ profiles }) => (
  <div>
    { profiles.map( (p,i) => {
      return(
       <div key={i}>
         <h4>{i}</h4>
       </div>
      )
    })
   }
 </div>
)