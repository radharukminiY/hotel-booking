import React,{Component} from 'react';


const QuickUrl = "https://developerfunnel.herokuapp.com/booking";

class QuickSearch extends Component{
    constructor(props){
        super(props)

        this.state={
            tripType:''
        }

    }

    render(){
        return(
            <div>

            </div>
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
