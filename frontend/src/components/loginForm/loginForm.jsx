import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthController from "../../controller/auth.controller";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
const _auth = new AuthController();

const LoginForm = () => {
  const signIn = useSignIn()
  const [name, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate()
  
  const handleSubmit =async (e) => {
    try {
      e.preventDefault();
      const res = await _auth.login(name,pass);
      signIn({
        token:res.data.token,
        expiresIn:60,
        tokenType:"Bearer",
        authState:{username:name}
      })
      navigate('/')
    } catch (error) {
      setError(error.response.data)
    }
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      {error && <h4 className="text-center text-light">{error}</h4>}
      <h4 className="text-center text-light">Login</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-white-50">Email address</Form.Label>
        <Form.Control 
        placeholder="Enter email"
        onChange={e=>setUserName(e.currentTarget.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-white-50">Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        onChange={e=>setPass(e.currentTarget.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
