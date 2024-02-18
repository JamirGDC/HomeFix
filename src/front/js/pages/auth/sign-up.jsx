import React, { useContext, useState } from "react";
import sign from '@img/login.png';
import { Context } from '../../store/appContext';
import { useNavigate } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";



export function SignUp() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secret, setSecret] = useState('');
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const register = async () => {
    await actions.signup(email, password);
    setEmail('');
    setPassword('');
    navigate("/auth/completeperfil");
  }

   
  

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src={sign}
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Registrate en HomeFix</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingresa un email y contraseña para registrarse</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="email"
              label="name@mail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="password" label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                Estoy de acuerdo con los &nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terminos y condiciones
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" onClick={register} fullWidth>
            Registrarse Ahora
          </Button>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">Ingresar Ahora</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;
