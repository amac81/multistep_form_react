//Deploy your React app using GitHub pages
//https://www.linkedin.com/pulse/deploy-your-react-app-using-github-pages-hasibul-islam/
//Page blocked because of a disallowed MIME type (“text/html”)
//https://github.com/vitejs/vite/discussions/13910

// Componentes
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {FiSend} from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

// Hooks
import { useForm } from "./hooks/useForm"
import { useState } from "react";

import './App.css'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);
  
  const updateFieldHandler = (key, value) => {
    setData((prev) =>{
      return {... prev, [key]:value };
    });
  
  };

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler}/>, <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, <Thanks data={data}/>];  
  const {currentStep, currentComponent, changeStep, isFirstStep, isLastStep} = useForm(formComponents);
  
  return (
    <div className="app">
      <div className="header">
        <h2>Avalie a sua compra</h2>
        <p>Agradecemos a sua compra e confiança em nós depositada! </p>
        <p>Utilize o formulário abaixo para avaliar a sua experiência.</p>
      </div>
      <div className="form-container">
        {<Steps currentStep={currentStep}/>}
        <form onSubmit = {(e)=>changeStep(currentStep +1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">     
            {!isFirstStep && (
            <button type="button" onClick={()=>changeStep(currentStep - 1)}>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button>
            )}
            {!isLastStep ? (
              <button type="submit">
              <span>Avançar</span>
              <GrFormNext/>
            </button>
            ) : (
            <button type="button">
            <span>Enviar</span>
            <FiSend/>
          </button>
          )}              
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
