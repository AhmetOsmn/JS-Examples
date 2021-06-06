import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
            <img src="https://pbs.twimg.com/profile_images/1360862753175527425/uaj6iR9N_400x400.jpg"
                alt="Profile"
                className="n-11 h-11 rounded-full" />
            <div className="flex flex-col">
                <span className="font-bold text-md text-black">
                    Ahmet Osman Sezgin
                </span>
                <span className="text-sm text-gray-dark"> 
                    @ahmetosmansezgin1
                </span>
            </div>
            <div className="flex">
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                
            </div>
        </div>
    )
}

export default UserBox
