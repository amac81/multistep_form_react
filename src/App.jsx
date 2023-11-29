//Deploy your React app using GitHub pages
//https://www.linkedin.com/pulse/deploy-your-react-app-using-github-pages-hasibul-islam/
//Page blocked because of a disallowed MIME type (“text/html”)
//https://github.com/vitejs/vite/discussions/13910

// Componentes
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

// Hooks

import { useForm } from "./hooks/useForm"

import './App.css'

function App() {
  const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>];
  
  const {currentStep, currentComponent, changeStep} = useForm(formComponents);
  
  return (
    <div className="app">
        <h2>Avalie a sua compra</h2>
        <p>Agradecemos a sua compra e confiança em nós depositada! </p>
        <p>Utilize o formulário abaixo para avaliar a sua experiência.</p>
        <div className="form-container">
          <p>Etapas</p>
          <form onSubmit = {(e)=>changeStep(currentStep +1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              <button type="button" onClick={()=>changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext/>
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default App
