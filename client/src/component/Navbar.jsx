import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IsAuth } from '../context/Authenticated'

const Navbar = () => {
    const {isAuth} = useContext(IsAuth)
  return (
    <div className="flex justify-between items-center px-4 w-auto h-14 bg-purple-900 text-white font-semibold">
                <div className="bg-white w-9 h-9 rounded-full">
            <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />

                <h4>blogif</h4>
                </div>
                <ul className="list-none flex justify-between items-center">
                    <li className="list-none">
                        <Link to="/" className="mr-5 hover:text-gray-300">Home</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/sports" className="mr-5 hover:text-gray-300">Sports</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/politics" className="mr-5 hover:text-gray-300">Politics</Link>
                    </li>
                    <li className="list-none">
                        {isAuth ? ( <Link to="/logout" className="bg-indigo-500 hover:text-indigo-500 hover:bg-white py-1 px-3">
                            Logout
                        </Link>): ( <Link to="/" className="bg-indigo-500 hover:text-indigo-500 hover:bg-white py-1 px-3">
                            Sign In
                        </Link>)}
                       
                    </li>
                </ul>
            </div>

  )
}

export default Navbar