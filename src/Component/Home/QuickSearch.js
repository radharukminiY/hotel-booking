import React,{Component,Fragment} from 'react';
import QuickDisplay from './QuickDisplay';

const QuickUrl = "https://developerfunnel.herokuapp.com/booking";

class QuickSearch extends Component{
    constructor(props){
      super(props)
      this.state={
      tripType:''
        }

    }

render(){
console.log(this.state.tripType);
return(
    <Fragment>
    {[
    <QuickDisplay tripdata={this.state.tripType}/>
  ]}
</Fragment>


        )
    }

  componentDidMount(){
  fetch(QuickUrl,{method:'GET'})
  .then((res) => res.json())
  .then((data) => {
    this.setState({tripType:data})
        })
    }
}

export default QuickSearch;
