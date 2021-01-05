import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import RoomFilter from '../filters/roomfilter';
import CostFilter from '../filters/costfilter';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class ListingApi extends Component{
    constructor(){
        super()

        this.state={
            hoteldata:''
        }
    }
    setDataPerFilter(sortedData){
      this.setState({hoteldata:sortedData})
    }


    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <RoomFilter roomperType={(data)=> {this.setDataPerFilter(data)}}/>
                        <CostFilter costperFilter={(data)=> {this.setDataPerFilter(data)}}/>

                    </div>
                    <div className="col-md-10">
                        <ListingDisplay listdata={this.state.hoteldata}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <CostFilter costperType={(data)=> {this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay listdata={this.state.hotellist}/>
                    </div>
                </div>
            </div>

        )
    }

    componentDidMount(){
        var tripid = this.props.match.params.id;
        sessionStorage.setItem('tripid',tripid)
        axios.get(`${url}/${tripid}`)
        .then((response) => {this.setState({hotellist:response.data})})
    }
}

export default ListingApi;
