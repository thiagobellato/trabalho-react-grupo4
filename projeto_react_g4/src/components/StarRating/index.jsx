import { useState } from "react";
import {FaStar} from "react-icons/fa"
import './style.css'

export default function StarRating() {

    const[rating, setRating] = useState(null)
    const[hover, setHover] = useState(null)
    return(
        <div className="oi">
            {[...Array(5)].map((star,index) =>{
                const currentRating =index + 1;
                return(
                    <label className="strela">
                        <input type="radio" name="rating" value={currentRating} 
                        onClick={() =>setRating(currentRating)}
                        />
                        <FaStar className="star" size={50}
                        color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            {/* <p>Your rating is {rating}</p> */}
    </div>
    )
    
    
}