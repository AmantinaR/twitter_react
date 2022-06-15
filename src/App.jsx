import * as React from "react"
import {useState} from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"

export default function App() {
  const [userProfile, setUserProfile] = useState(codepathUserProfile);
  const [tweets, setTweets] = useState([firstTweet]);
  const [tweetText, setTweetText] = useState("");

  const extraInfo = {
    following: 5,
  }
  return (
    <div className="app">
      <Navbar navLinks={navLinks}/>
      <main>
        <UserProfile userProfile={userProfile}/>
        <Feed tweetText={tweetText} setTweetText={setTweetText} tweets={tweets} setTweets={setTweets} userProfile={userProfile}/>
        <Advertisements />
      </main>
    </div>
  )
}
