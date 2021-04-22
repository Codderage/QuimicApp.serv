import React, { useState } from "react";
import {
    LoginLogo,
    EmailInput,
    PasswordInput,
    RememberInput,
    SendButton,
    Link,
    Seccion,
} from "./login.styled";

const Login = () => {
    const [getState, setState] = useState();

    return (
        <Seccion className="container d-flex flex-column justify-content-centre align-items-center">
            <div>
                <LoginLogo />
            </div>
            <form action="cms/logged.html">
                <div className="form-group">
                    <EmailInput className="form-control mb-3" />
                </div>
                <div className="form-group">
                    <PasswordInput className="form-control mb-3" />
                </div>
                <div className="form-check mb-0">
                    <RememberInput />
                    <label className="form-check-label" htmlFor="loginRemember">
                        Recuerdame
                    </label>
                </div>
                <SendButton className="btn btn-lg my-4">Entrar</SendButton>
                <div>
                    <Link>He olvidado la contraseña</Link>
                </div>
            </form>
        </Seccion>
    );
};

export default Login;
