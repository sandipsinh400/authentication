
import './App.css'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from './auth/Firebase'
import Signin from './auth/Signin'
import Googleauth from './auth/Googleauth'

function App() {
  const{register,handleSubmit}=useForm()
  async function singup(data) {
    const {email,password}=data
    await createUserWithEmailAndPassword(auth,email,password)
    .then((res)=>{
      console.log(res.user);
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit(singup)}>
        <input type="text"{...register("email")}/>
        <input type="text"{...register("password")}/>
        <button>sign up</button>
      </form>
      <Signin/>
      <Googleauth/>
    </>
  
  )
}

export default App
