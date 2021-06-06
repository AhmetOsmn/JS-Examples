import React, { useState } from 'react'
import { EmojiIcon, GIFIcon, MediaIcon, PlanlaIcon, SurveyIcon } from '../Icon'

import db from '../firebase'
import firebase from 'firebase'

const TweetBox = () => {
    const [content, setContent] = useState('');
    const sendTweet = () => {
        if(content !== ''){
            db.collection('feed').add({
                displayName: "Ahmet Osman Sezgin",
                userName: "@AhmetOsmanSezg2",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                image: "https://64.media.tumblr.com/c9f8bdfb7ae61c3eb8a00e6ac5ca11a4/07dd3f9d137818fd-4f/s540x810/d83025e503bc5955cb004606132a99794b0cfab5.gif",
                avatar: "https://pbs.twimg.com/profile_images/1360862753175527425/uaj6iR9N_400x400.jpg"
                
            });

            setContent("");
        }
     }
    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
            <textarea 
                className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" 
                placeholder="What's happening ?"
                onChange={e => setContent(e.target.value)} 
                value={content} />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <MediaIcon className="text-primary-base w-6 h-6"></MediaIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GIFIcon className="text-primary-base w-6 h-6"></GIFIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <SurveyIcon className="text-primary-base w-6 h-6"></SurveyIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon className="text-primary-base w-6 h-6"></EmojiIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PlanlaIcon className="text-primary-base w-6 h-6"></PlanlaIcon>
                    </div>
                </div>
                <button 
                    className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    onClick={sendTweet}>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
