import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { toastifyError, toastifySeccess } from '../../utils/toastifyHelper';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {

    if (email == "" || password) {
      toastifyError("Fields are empty.!!")
    }
    e.preventDefault(); // Prevent page reload on form submission

    // Prepare the data to be sent to the backend
    const data = {
      email,
      password,
    };
    try {

      const resp = await axios.post("http://localhost:5000/api/v1/login", data);
      localStorage.setItem("token", resp.data.token)
      navigate("/")
      toastifySeccess("user login successful.!!")

    } catch (error) {
      toastifyError(error.message)
    }

  }

  return (
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
        </header>
        <form onSubmit={handleSubmit}>
          <div >
            <label className="block mb-2 text-indigo-500">email/username</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username" />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
          </div>
          <div>
            <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
          </div>
        </form>
        <footer>
          <Link className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</Link>
          <Link className="text-indigo-700 hover:text-pink-700 text-sm float-right" to={"/register"}>Create Account</Link>
        </footer>
      </div>
    </div>

  )
}
export default Login