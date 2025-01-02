import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { use } from 'react';
const Header = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/blog/blogs")
            setData(resp.data.blogs)
            console.log(resp.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div>
            <div className="flex justify-between items-center px-4 w-auto h-14 bg-purple-900 text-white font-semibold">
                <div className="bg-white w-9 h-9 rounded-full"></div>
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
                        <Link to="/signin" className="bg-indigo-500 hover:text-indigo-500 hover:bg-white py-1 px-3">
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>



            {data.map((item) => {
                return (
                    <div key={item._id} className="flex flex-col p-5 lg:px-48 lg:py-11">
                        <div className="bg-gray-100 p-5 mb-10">
                            <h1 className="font-bold text-2xl mb-2">{item.title}</h1>
                            <p className="my-3">{item.content}</p>
                            <button className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">Read More...</button>
                        </div>
                    </div>
                )
            })}


            {/* <div className="flex flex-col p-5 lg:px-48 lg:py-11">
    <div className="bg-gray-100 p-5 mb-10">
        <h1 className="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
            beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
            numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
            assumenda architecto animi veniam dolore dolor?</p>
        <button className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">Read More...</button>
    </div>

    
</div> */}
        </div>
    )
}

export default Header