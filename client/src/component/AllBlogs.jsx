import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const AllBlogs = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await axios.get(`http://localhost:5000/blog/blogs`)
            setData(resp.data.blogs)
            console.log(resp.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>

            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

                <div className="border-b mb-5 flex justify-between text-sm">
                    <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">

                        <a href="#" className="font-semibold inline-block"> BLogs</a>
                    </div>
                    <a href="#">See All</a>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {data.map((item) => {
                        return (
                            <div key={item._id} className="rounded overflow-hidden shadow-lg flex flex-col">
                                <a href="#"></a>
                                <div className="relative"><Link href="#">
                                    <img className="w-full"
                                        src={item.image}
                                        alt="Sunset in the mountains" />
                                    <div
                                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                    </div>
                                </Link>
                                    <a href="#!">
                                        <div
                                            className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                           {item.category}
                                        </div>
                                    </a>
                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <a href="#"
                                        className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{item.title}</a>
                                    <p className="text-gray-500 text-sm">
                                        {item.content}
                                    </p>
                                </div>
                                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">

                                        <span className="ml-1">6 mins ago</span>
                                    </span>

                                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                            </path>
                                        </svg>
                                        <span className="ml-1">39 Comments</span>
                                    </span>
                                </div>
                            </div>
                        )
                    })}


                </div>

            </div>




        </div>
    )
}

export default AllBlogs