import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskContextProvider } from 
'./context/TaskContext.jsx'

// React.StrictMode> es una etiqueta que te dira si estás escribiendo correctamente en código React. 
// Son recomendaciones que te brinda el entonrno de desarrollo para que no tengas errores.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
 
  </React.StrictMode>,
)
