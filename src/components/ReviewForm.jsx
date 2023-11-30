import "./ReviewForm.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";


const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input 
            type="radio" 
            name="review" 
            required 
            value="unsatisfied"
            checked={data.review === "unsatisfied"} 
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input 
            type="radio" 
            name="review" 
            required 
            value="neutral" 
            checked={data.review === "neutral"} 
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input 
            type="radio" 
            name="review" 
            required 
            value="satisfied"
            checked={data.review === "satisfied"}  
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input 
            type="radio" 
            name="review" 
            required 
            value="very_satisfied" 
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill/>
          <p>Muito Satisfeito</p>
        </label>    
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea 
          name="comment" 
          id="comment" 
          placeholder="Diga-nos como foi a sua experiência" 
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        >
        </textarea>        
      </div>
    </div>
  );
};

export default ReviewForm