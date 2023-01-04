import { useState,useEffect } from "react";
import AuthController from "../../controller/auth.controller"
const _auth = new AuthController();

const Home = () => {
  const [data, setData] = useState([]);
  const users = async ()=>{
    try {
      const res = await _auth.index()
      setData(res.data)
      // console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
     users().catch(err=>{
      console.log(err)
     })
  },[])
  return (
    <div>
      {
        data.map(e=>{
          return <div key={e.id}>
            <h1 className="text-light">{e.username}</h1>
            <h1>{e.password}</h1>
          </div>
        })
      }
    </div>
  )
}

export default Home