import React, { useState } from 'react'
import logo from '../assets/logo.png'
import profilepic from '../assets/profile pic.webp'
import searchicon from '../assets/search icon.png'
function Header() {
    const [menuBtn, setMenuBtn] = useState("hidden")

    const menubtn = () => {
        const btn = menuBtn === "hidden" ? "flex" : "hidden";
        setMenuBtn(btn)
    }

    return (
        <div className='border-b-2 pb-4'>
            <div
                className='px-10 h-20 flex items-center justify-between'>
                <img
                    className='w-8 h-8 md:mr-48'
                    src={logo} />
                <div
                    className=' w-96 flex justify-around'>
                    <span
                        className='rounded-full  px-4 py-2 hover:bg-gray-100 hover:text-black'>
                        Stays
                    </span>
                    <span
                        className='rounded-full text-gray-400 px-4 py-2 hover:bg-gray-100 hover:text-black'>
                        Experiences
                    </span>
                    <span
                        className='rounded-full text-gray-400  px-4 py-2 hover:bg-gray-100 hover:text-black'>
                        Online Experiences
                    </span>
                </div>
                <div
                    className='flex items-center gap-3'>
                    <span
                        className='rounded-full px-3 text-md py-2 hover:bg-gray-100 hover:text-black'>
                        Airbnb your home
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        className='w-4 h-6 mr-2'>
                        <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z" />
                    </svg>
                    <div className="flex items-center px-2 py-1 border-2 rounded-full hover:shadow-md">
                        <div class="relative inline-block text-left">
                            <button
                                type="button"
                                onClick={menubtn}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className='w-4 h-4 mx-2'>
                                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                </svg>
                            </button>

                            <div
                                className={`${menuBtn} absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} >
                                <div
                                    className="w-48" >
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" >Login</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" >Sign up</a>
                                    <hr />
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Airbnb your home</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Help center</a>
                                </div>
                            </div>
                        </div>

                        <img
                            className='w-10 h-10'
                            src={profilepic} />
                    </div>

                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex border-2 rounded-full shadow-md gap-3'>
                    <div
                        className='py-4 px-4 items-center text-sm rounded-full hover:bg-gray-100'>
                        <h1
                            className='text-xs'>
                            Where
                        </h1>
                        <input
                            type="text"
                            placeholder='Search destination'
                            className='border-none outline-none bg-transparent' />
                    </div>
                    <button
                        className='py-4 px-4  text-sm rounded-full hover:bg-gray-100 text-left'>
                        <h1
                            className='text-xs'>
                            Check in
                        </h1>
                        <h1
                            className='text-gray-400'>
                            Add dates
                        </h1>

                    </button>
                    <button
                        className='py-4 px-4  text-sm rounded-full hover:bg-gray-100 text-left'>
                        <h1
                            className='text-xs'>
                            Check in
                        </h1>
                        <h1
                            className='text-gray-400'>
                            Add dates
                        </h1>

                    </button>
                    <button
                        className='flex py-3 px-4 items-center text-sm rounded-full hover:bg-gray-100 text-left'>
                        <div className='flex w-40 px-4 flex-col'>
                            <h1
                                className='text-xs'>
                                Who
                            </h1>
                            <h1
                                className='text-gray-400 '>
                                Add guests
                            </h1>
                        </div>
                        <div 
                            className='bg-[#ff385c] px-3 py-3 rounded-full hover:bg-[#DF1461]'>
                        <img 
                            src={searchicon} 
                            className='w-5 h-5'/>
                        </div>


                    </button>

                </div>
            </div>


        </div>
    )
}

export default Header
