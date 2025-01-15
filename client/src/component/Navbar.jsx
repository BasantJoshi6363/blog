import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [lsLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="flex justify-between items-center px-4 w-auto h-14 bg-purple-900 text-white font-semibold">
            <div className="bg-white w-9 h-9 rounded-full flex gap-5 items-center">
                <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />

                <h4>blogify</h4>
            </div>
            <ul className="list-none flex justify-between items-center">
                {lsLoggedIn ? (<div>
                    <li className="list-none">
                        <Link to="/" className="mr-5 hover:text-gray-300">Home</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/cat/sport" className="mr-5 hover:text-gray-300">Sports</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/cat/politics" className="mr-5 hover:text-gray-300">Politics</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/cat/science" className="mr-5 hover:text-gray-300">Science</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/cat/lifestyle" className="mr-5 hover:text-gray-300">lifestyle</Link>
                    </li>
                </div>) : (<div><li className="list-none">
                    <Link to="/login" className="bg-indigo-500 hover:text-indigo-500 hover:bg-white py-1 px-3">
                        login
                    </Link> <Link to="/register" className="bg-indigo-500 hover:text-indigo-500 hover:bg-white py-1 px-3">
                        register
                    </Link>

                </li></div>)}


            </ul>
        </div>

    )
}

export default Navbar