

import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from './Firebase'

function Signin() {
  const{register,handleSubmit}=useForm()

  async function singup(data) {
    const {email,password}=data
    await signInWithEmailAndPassword(auth,email,password)
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
        <button>sign in</button>
      </form>
    </>
  )
}

export default Signin
