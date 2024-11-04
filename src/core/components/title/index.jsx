import React from "react"
import './index.scss'
import { useNavigate } from "react-router-dom"

const Title = ({ title, subtitle, voltar = true }) => {
  const navigate = useNavigate()

  return (
    <div className="title-container-main">
      {voltar && (
        <button onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6f6f6f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
        </button>
      )}
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
    </div>
  )
}

export default Title