import React, { useState, useEffect } from 'react'
import { PopulerIcon } from '../Icon'
import TweetBox from '../components/TweetBox'
import Divider from '../components/Divider'
import db from '../firebase'
import FeedList from '../components/FeedList'

const Content = () => {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        db.collection("feed")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => 
            setTweets(snapshot.docs.map((doc) => doc.data())));
    }, []);

    console.log(tweets);

    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
            <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <PopulerIcon className="w-6 h-6 text-primary-base" />
            </header>
            <div className="flex space-x-4 px-4 py-3">
                <img
                    src="https://pbs.twimg.com/profile_images/1360862753175527425/uaj6iR9N_400x400.jpg"
                    alt="Profile"
                    className="w-11 h-11 rounded-full"
                />
                <TweetBox />
            </div>
            <Divider />

            <FeedList tweets={tweets}/>

        </main>
    )
}

export default Content
