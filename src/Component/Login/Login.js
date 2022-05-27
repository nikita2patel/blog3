import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()

    const [data,setdata] = useState({
        email: '',
        password:'',
        msg : ''
    })
    const handeldata = (e) =>{
        e.preventDefault();
        
        if(data.email==="nikita@gmail.com"  &&  data.password==="12345"){
            data.msg = "login";
            localStorage.setItem("token",data.msg)
        }
        else{
            alert("password email in not valid")
        }
        navigate('/Skills');



            }
  return (
    <div>
     <form>
         <label>Email</label><br></br>
         <input type="email"  value={data.email} onChange={(e)=>setdata({...data,email:e.target.value})}/><br></br>
         <label>Password</label><br></br>
         <input type="password"  value={data.password}  onChange={(e)=>setdata({...data,password:e.target.value})}/><br></br>
         <button type='submit'onClick={(e)=>handeldata(e)} >submit</button><br></br>




     </form>
    </div>
  )
}

export default Login
