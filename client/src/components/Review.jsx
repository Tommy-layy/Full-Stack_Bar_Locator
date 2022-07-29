import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Review = (props) => {
  let navigate = useNavigate()

  const [reviewValues, setReviewValues] = useState({
    name:"",
    bar: "",
    text: "",
    date:"",
    rating: ""

})
const handleChange = (e) => {
  setReviewValues({ ...reviewValues, [e.target.name]: e.target.value })
}
const handleSubmit = (e) => {
  e.preventDefault()
  console.log('submit')
  axios.post('httpl://localhost:3001/api/review', reviewValues)
  navigate('/bar')
}

return (
  <div>
    <h1>Leave a review for a bar you've visited recently!</h1>
    <h4>Your information below.</h4>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={reviewValues.name}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        name="bar"
        placeholder="Bar You Wish To Review"
        value={reviewValues.bar}
        onChange={handleChange}
      />
      <br></br>

      <br></br>
      <input
        type="text"
        name="text"
        placeholder="Your Review"
        value={reviewValues.text}
        onChange={handleChange}
      />
      <br></br>
      

      <br></br>
      <input
        type="text"
        name="date"
        placeholder="Today's Date"
        value={reviewValues.date}
        onChange={handleChange}
      />
      <br></br>

      <br></br>
      <input
        type="text"
        name="rating"
        placeholder="Rating Out Of 5"
        value={reviewValues.rating}
        onChange={handleChange}
      />
      <br></br>

      <button type="submit-button">Submit Review</button>
      <br></br>
    </form>
  </div>
)
}


export default Review