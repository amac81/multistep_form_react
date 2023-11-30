import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css"

const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante para nós. Em breve receberá um cupão de desconto de 10% para aplicar na sua próxima compra.</p>
      <p>Para concluir a avaliação clique no botão enviar.</p>
      <h3>Resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com a compra:</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>

    </div>
  )
}

export default Thanks