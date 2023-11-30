import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css"

const reviewFeedbackEmojis = {
  unsatisfied:<BsFillEmojiFrownFill/>,
  neutral:<BsFillEmojiNeutralFill/>,
  satisfied:<BsFillEmojiSmileFill/>,
  very_satisfied:<BsFillEmojiHeartEyesFill/>,
}

const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco <span>{data.name}</span></h2>
      <p>A sua opinião é muito importante para nós. Em breve receberá um cupão de desconto de 10% para aplicar na sua próxima compra.</p>
      <p>Para concluir a avaliação clique no botão enviar.</p>
      <h3>Resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com a compra:</span>
        {reviewFeedbackEmojis[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>
      <div className="comments-container">
        <p>{data.comment}</p>
      </div>      
    </div>
  )
}

export default Thanks