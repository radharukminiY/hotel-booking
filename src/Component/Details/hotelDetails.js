import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails";

class Details extends Component{
  constructor(){
    super()
    this.state={
      details:'',
      tripId:sessionStorage.getItem('tripid')
    }
  }
  render(){
    let {details} = this.state
    return(
      <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.city_name}</h3>
                                <h3>{details.address}</h3>
                              </div></div>
                              <div className="row">
                              <Tabs>
                              <TabList>
                              <Tab>Overview</Tab>
                              <Tab>contact</Tab>
                              </TabList>
                              <TabPanel>
                              <h2>Abous This place</h2>
                              <p>{details.name} is good place to stay and enjoy your holiday.
                              This place is historically and archectrally ancient.
                              A lot of tourists and business peoples visit this place.</p>
                              </TabPanel>
                              <TabPanel><h2>contact info</h2>
                              <p>phone no:091994932476</p>

                              </TabPanel>
                              </Tabs>

                              </div>

                              <div>
                              <Link to="{'/list/${this.state.tripId}'}" className="btn btn-danger">Back</Link> &nbsp;
                              <Link to={`/booking/${details.name}`}  className="btn btn-success">Place Booking</Link>
                              </div>
                               </div></div>
                                </div>
    )
  }
//  componentDidMount(){
  //  var hotelIdid = this.props.match.params.id;
  //  sessionStorage.setItem('hotelid',hotelId)
  //  axios.get(`${url}/${tripid}`)
  //  .then((response)=> {this.setState({details:response.data})})
  //}

  // we use async await instand of componentDidMount
   async componentDidMount(){
  var hotelId =this.props.match.params.id;
  let response =await axios.get(`${url}/${hotelId}`);
  this.setState({details:response.data[0]})
}
}
export default Details;
