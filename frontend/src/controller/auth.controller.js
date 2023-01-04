import axios from 'axios'

class AuthController {
    async index (){
        const res = await axios.get('http://localhost:3001/api/auth/all')
        return res
    }
    // lohin handler
    async login (name,pass) {
        const user = {
            username:name,
            password:pass
        }
        const res = await axios.post('http://localhost:3001/api/auth/login',
        user
        )
        return res
    }
    // signUp handler
    async signUp (name,pass){
        try {
            const res = await axios.post('http://localhost:3001/api/auth/register',{username:name,password:pass})
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
}
export default AuthController