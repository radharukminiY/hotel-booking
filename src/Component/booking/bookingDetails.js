import React from 'react';
//import { useHistory } from "react-router-dom";

const BookingView = (props) => {
    const renderTable = ({bookdata}) => {
        if(bookdata){
            return bookdata.map((item) => {
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.count}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Booking List</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Hotel</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>No.Person</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>

        </div>
            )
                 }


export default BookingView;
