import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox tweetText={props.tweetText} setTweetText={props.setTweetText} tweets={props.tweets} userProfile={props.userProfile} setTweets={props.setTweets}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        props.tweets.slice(0).reverse().map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet}></Tweet>
        })
      }</div>
    </div>
  )
}
