import './Auth.scss'
import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";



function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Container fluid className="auth">

      <div className="container-form">
        {showLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              Create an account
              <span onClick={() => setShowLogin(!showLogin)}>Sign up</span>
            </>
          ) : (
            <>
              Login
              <span onClick={() => setShowLogin(!showLogin)}>
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </Container>
  )
}

export default Auth;