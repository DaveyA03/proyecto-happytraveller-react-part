import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {
            console.log(result)
            
    if (typeof result.data === 'object') {
        
        alert('Creado Exitosamente!');
        navigate('/login');
    } else if (typeof result.data === 'string' && result.data === 'Already have an account') {
       
        alert('El usuario ya existe!');
    } else {
        
        alert('Hubo un error: ' + result.data);
    }


           
        })
        .catch(err => console.log(err))
    } 

    return(
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 className="text-center">Registrate</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Nombre</strong>
                        </label>
                        <input type="text"
                        placeholder="Ingresa tu nombre" 
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Correo</strong>
                        </label>
                        <input type="email" 
                         placeholder="Ingresa tu correo"
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
                         placeholder="Ingresa tu contraseña"
                         name="password"
                         className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}
                          />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Registrarse
                    </button>
                </form>
                   <p>¿Ya tienes una cuenta?</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none border-dark">
                        Inicia Sesion
                    </Link>
            </div>
        </div>
    );
}

export default Signup;