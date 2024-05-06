import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../../Provider/AuthProviders";
import BookingsRow from "./BookingsRow";
import axios from "axios";


const Bookings = () => {
    const {user} = useContext(AuthContex)
const [bookings, setbookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
console.log(bookings);
    useEffect(()=>{

      axios.get(url, {withCredentials:true})
      .then(res=>{
        setbookings(res.data)
      })
        // fetch(url)
        // .then(res=> res.json())
        // .then(data => setbookings(data))
    },[url])



    const handleDelete = id =>{
        const proceed = confirm('Are You sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                  alert('deleted successfully')
                  const remaining = bookings.filter(booking => booking._id !==id)
                  setbookings(remaining)
                }
            })
        }
    }




     
    const handleConfirm = (id)=>{

    

      fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify({status: 'confirm'})
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
          // adfsadf
          const remaining = bookings.filter(booking=> booking._id !== id)
          const updated = bookings.find(booking => booking._id === id)
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining]
          setbookings(newBookings)
            }
      })
      
    
    
    }
        
    
    return (
        <div>
            <h1>Booking list : {bookings.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
  {
  bookings.map(booking=><BookingsRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingsRow>)
  }

   
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default Bookings;