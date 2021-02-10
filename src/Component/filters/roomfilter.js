import React,{Component} from 'react';
import axios from 'axios';

const rurl="https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component{
  filterRoom=(event) =>{
    let roomType=event.target.value;
    let tripid=sessionStorage.getItem('tripid');
    let roomurl;
    if(roomType===''){
      roomurl=`${rurl}/${tripid}`

    }else{
      roomurl=`${rurl}/${tripid}?roomtype=${roomType}`

    }
    axios.get(roomurl)
    .then((response) => {this.props.roomperType(response.data)})
  }
  render(){
    return(
      <React.Fragment>
      <center>Room Type</center>
                  <div onChange={this.filterRoom}>
                      <label className="radio">
                          <input type="radio" value="" name="room"/>All
                      </label>
                      <label className="radio">
                          <input type="radio" value="1" name="room"/>Deluxe Room
                      </label>
                      <label className="radio">
                          <input type="radio" value="2" name="room"/>Premium Room
                      </label>
                      <label className="radio">
                          <input type="radio" value="3" name="room"/>Travel Room
                      </label>
                      <label className="radio">
                          <input type="radio" value="4" name="room"/>Semi Delux Room
                      </label>
                  </div>
      </React.Fragment>
    )
  }
}
export default RoomFilter;
