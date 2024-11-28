import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
   
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const navigate = useNavigate()

   const handleSubmit = (e) => {
       e.preventDefault()
       axios.post('http://localhost:3001/login', {email, password})
       .then(result => {
         console.log(result)
         if(result.data === "Success") {
            alert('Bienvenido!')
            navigate('/home')
        } else {
          alert('la contra esta mal');
        }
       })

       .catch(err => console.log(err))
   } 
   

   return(
     
  <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
              <div className="bg-white p-3 rounded w-25">

              <div className="d-flex flex-column align-items-center">
              <img 
               src="./pictures/logo.jpeg" 
                  alt="Logo" 
                className="mb-2"
                 style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                    />
                 <h2>Inicia Sesión</h2>
                    </div>

                  <form onSubmit={handleSubmit}>
                     <div className="mb-3">
                          <label htmlFor="email">
                              <strong>Correo</strong>
                          </label>
                          <input type="email" 
                           placeholder="Ingresa un correo"
                           autoComplete="off"
                           name="email"
                           className="form-control rounded-0"
                          onChange={(e) => setEmail(e.target.value)}
                         />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="email">
                              <strong>Contraseña</strong>
                          </label>
                          <input type="password"
                           placeholder="Ingresa una contraseña"
                           name="password"
                           className="form-control rounded-0"
                          onChange={(e) => setPassword(e.target.value)}
                            />
                      </div>
                      <button type="submit" className="btn btn-success w-100 rounded-0">
                          Iniciar Sesion
                      </button>
                  </form>
                     <p>¿No tienes una cuenta?</p>
                      <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none border-dark">
                          Registrate
                      </Link>
              </div>
          </div>
      
   )
}

export default Login;