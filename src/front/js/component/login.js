import React, { useContext, useState } from "react";
import "../styles/login.css";
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const login = async () => {
        await actions.setToken(email, password);
        setEmail('');
        setPassword('');
        navigate("/home");
    }

    return(<>
        <div className="flex flex-row justify-center items-center h-full p-16">
            <div className="flex flex-col justify-start align-stretch gap-y-2 w-80 p-8 bg-gray-400 rounded-lg">
                <div className="flex flex-row justify-start align-stretch gap-y-2">
                    <i>icon</i>
                    <span>HomeFix</span>
                </div>
                <span>Bienvenido</span>
                <span>Ingresa tus datos</span>
                <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={login}>Ingresar</button>
            </div>    
        </div>
    </>)
}

export default Login;