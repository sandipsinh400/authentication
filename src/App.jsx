
import './App.css'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from './auth/Firebase'
import Signin from './auth/Signin'
import Googleauth from './auth/Googleauth'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const{register,handleSubmit,formState: { errors }}=useForm()
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
      <div className="container mt-5">
      <h2 className="text-center mb-4">Sing up</h2>
      <form onSubmit={handleSubmit(singup)} className="w-50 mx-auto p-4 border rounded">
        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">login</button>
      </form>
    </div>
      <Signin/>
      <Googleauth/>
    </>
  
  )
}

export default App
