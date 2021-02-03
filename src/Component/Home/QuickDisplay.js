import React,{Fragment} from 'react';
import './quickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) =>
{
  const listTrip = ({tripdata})=>{
    if(tripdata){
      return tripdata.map((item)=>{
        return(
          <Fragment>
          <Link to={`/list/${item.trip}`}>
          <div className="tileContainer">
          <div className="tileComponent1">
          <img src={item.image} alt="img"/>
          </div>
          <div className="tileComponent2">
          <div className="componentHeading">
          {item.name}
          </div>
          <div className="componentSubHeading">
          start your <Fragment> {item.name}</Fragment> with us
          </div>
          </div>
          </div>
          </Link>
            </Fragment>

        )
      })
    }
  }
  return(
    <div>
<div className="quickSearchContainer">
<p className="quickSearchHeding">
Quick Search
</p>
<p className="quickSearchHeading">
Discover trip by type
</p>
<br/><Fragment>
{listTrip(props)}</Fragment>
</div>
    </div>
  )
}

export default QuickDisplay;
