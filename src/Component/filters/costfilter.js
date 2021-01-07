import React,{Component} from 'react';
import axios from 'axios';


const curl="https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component{
  filterRoom =(event) =>{
    let costType= (event.target.value).split(',');
    let lcost=costType[0];
    let hcost=costType[1];
    let tripId =sessionStorage.getItem('tripid');
    let costurl;
    if(costType==''){
      costurl=`${curl}/${tripId}`
    }else{
      costurl=`${curl}/${tripId}?hcost=${hcost}&lcost=${lcost}`
    }
    axios.get(costurl)
    .then((response) =>{this.props.costperType(response.data)})

    }
    render()
    {
      return(
        <React.Fragment>
        <center>Cost Type</center>
        <div onChange={this.filterRoom}>
        <label className="radio">
        <input type="radio" value="" name="room"/>All</label>
        <label className="radio">
        <input type="radio" value="500,5000" name="room"/>1000-5000</label>
        <label className="radio">
        <input type="radio" value="5001,8500" name="room"/>5001-8500</label>
        <label className="radio">
        <input type="radio" value="8501,12000" name="room"/>8501-12000</label>
        </div>
        </React.Fragment>
      )
    }
  }

export default CostFilter;
