import React from 'react';
import './essayforms.css'
class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 'Enter the perfect policy here',
                     value2: "Enter the local school policy here",
                     finalAnswer: -1,
                     showFinalAnswer: false
                    };
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
        this.setState({value: event.target.value});
        event.preventDefault();
    }
    handleChange2(event){
        this.setState({value2: event.target.value});
        event.preventDefault();
    }
    handleSubmit(event) {
        var result = Sentencesimilar(this.state.value, this.state.value2); 
        result = result*100;
        result = result.toFixed(2); 
        this.setState({
            finalAnswer: result,
            showFinalAnswer : true
        });
        event.preventDefault();
    }
  
    render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
            <h4 class="h4Essay">
            Please paste your model policies, which you know are correct:
            </h4>
            <textarea class="EssayTextarea" value={this.state.value} onChange={this.handleChange} /> 
            <h4 class="h4Essay">
            Please paste your local policies, which you want to compare:
            </h4>
            <textarea class="EssayTextarea" value={this.state.value2} onChange={this.handleChange2} />    
            <input class="essaySubmit Essaybutton5" type="submit" value="Submit" />
            </form>
            {this.state.showFinalAnswer && <h2 class="h2Essay">The perfect policy and the local policy are {this.state.finalAnswer}% similar</h2>}
         </div> 
        
      );
    }
  }

  function Sentencesimilar(s1, s2) {
    var b = s1;
    var s = s2;
    if (s1.length < s2.length) {
      b = s2;
      s = s1;
    }
    var bl = b.length;
    if (bl === 0) {
      return 1.0;
    }
    return (bl - finalDist(b, s)) / parseFloat(bl);
  }

  function finalDist(s, t) {
    s = s.toLowerCase();
    t = t.toLowerCase();
  
    var dists = new Array();
    var i =0;
    var j = 0;
    for (i = 0; i <= s.length; i++) {
      var endVal = i;
      for (j = 0; j <= t.length; j++) {
        if (i === 0)
        dists[j] = j;
        else {
          if (j > 0) {
            var newValue = dists[j - 1];
            if (s.charAt(i - 1) !== t.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, endVal),
              dists[j]) + 1;
            dists[j - 1] = endVal;
            endVal = newValue;
          }
        }
      }
      if (i > 0)
        dists[t.length] = endVal;
    }
    return dists[t.length];
  }

  export default EssayForm