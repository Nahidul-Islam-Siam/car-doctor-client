
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProviders";



const CheckOut = () => {
    const service = useLoaderData()
    const {title, _id,price, name,img} = service
    
// const {user} = useContext(AuthContex)
const {user} = useContext(AuthContex)
const handleBookService = e =>{
  e.preventDefault()
  const form = e.target;
  const name = form.name.value
  const date = form.date.value
  const email = user?.email
  const booking = {
    CustomerName: name,
    email,
    date,
    img,
    service: title,
    service_id: _id,
    price: price
  }
  console.log(booking);

  fetch('http://localhost:5000/bookings',{
    method: 'POST',
    headers: {
'content-type': 'application/json'
    },
    body:JSON.stringify(booking)
  })
  .then(res => res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedId){
      alert('service book successfully')
    }
  })
}

    return (
        <div>
         <h2 className="text-center text-3xl">Book Sevices: {title}</h2>

      <form onSubmit={handleBookService} className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
      
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
      
        </div>
        <div className="form-control mt-6">

          <input className="btn btn-primary w-full" type="submit" value='Order Confirm' />
        </div>
      </form>
    </div>

    );
};

export default CheckOut;