//Deploy your React app using GitHub pages
//https://www.linkedin.com/pulse/deploy-your-react-app-using-github-pages-hasibul-islam/
//Page blocked because of a disallowed MIME type (“text/html”)
//https://github.com/vitejs/vite/discussions/13910

// Componentes
import {GrFormNext, GrFormPrevious} from "react-icons/gr";


import './App.css'

function App() {
  
  return (
    <div className="app">
        <h2>Avalie a sua compra</h2>
        <p>Agradecemos a sua compra e confiança em nós depositada! </p>
        <p>Utilize o formulário abaixo para avaliar a sua experiência.</p>
        <div className="form-container">
          <p>Etapas</p>
          <form>
            <div className="actions">
              <button type='button'><span>Voltar</span></button>
              <button type='submit'>Avançar</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default App
