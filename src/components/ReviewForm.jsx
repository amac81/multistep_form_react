import "./ReviewForm.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";


const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" name="review" required value="unsatisfied"/>
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" required value="neutral"/>
          <BsFillEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" required value="satisfied"/>
          <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" required value="very_satisfied"/>
          <BsFillEmojiHeartEyesFill/>
          <p>Muito Satisfeito</p>
        </label>    
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder="Diga-nos como foi a sua experiência" required></textarea>        
      </div>
    </div>
  );
};

export default ReviewForm