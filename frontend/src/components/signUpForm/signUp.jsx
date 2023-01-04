import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthController from "../../controller/auth.controller";
const _auth = new AuthController()

const SignUp = () => {
    const [userName, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [done,setDone] = useState(false);

    const handleSubmit =async (e) => {
        e.preventDefault();
        await _auth.signUp(userName,pass)
        setDone(true)
        setTimeout(()=>{setDone(false)},3000)
    }
    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
                {done && <h4 className="text-center text-light">user : {userName} added</h4>}
                  <h4 className="text-center text-light">Sign up</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    placeholder="Enter email"
                    onChange={e => setUser(e.currentTarget.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={e => setPass(e.currentTarget.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
    )
}

export default SignUp