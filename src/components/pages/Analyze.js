import React from 'react';
import './Analyze.css'
import EssayForm from './essayform'

function Analyze() {
    return (
            
            <EssayForm />
            // document.getElementById('root')
    );
}
export default Analyze




// function similarity(s1, s2) {
//     var longer = s1;
//     var shorter = s2;
//     if (s1.length < s2.length) {
//       longer = s2;
//       shorter = s1;
//     }
//     var longerLength = longer.length;
//     if (longerLength == 0) {
//       return 1.0;
//     }
//     return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
//   }