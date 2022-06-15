import * as React from "react"
import {useState} from 'react'
import AvatarIcon from "../AvatarIcon/AvatarIcon"
import { formatLikes } from "../../utils/format"
import "./Tweet.css"

export default function Tweet({ tweet }) {
  const [likes, setLikes] = useState(tweet.likes);
  const [collapsed, setCollapsed] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <div className="tweet" data-tweet-id={tweet.id}>
      <div className="tweet-avatar">
        <AvatarIcon />
      </div>

      <div className="tweet-content">
        <TweetUserInfo name={tweet.name} handle={tweet.handle} numComments={tweet.comments} collapsed={collapsed} setCollapsed={setCollapsed}/>
        <p style={collapsed ? {display: "none"} : {}} className="tweet-text">{tweet.text}</p>
        <TweetFooter liked={liked} setLiked={setLiked} collapsed={collapsed} numComments={tweet.comments} numRetweets={tweet.retweets} setLikes={setLikes} numLikes={likes}/>
      </div>
    </div>
  )
}

export function TweetUserInfo({ name, handle, collapsed, setCollapsed }) {
  return (
    <div className="tweet-user-info">
      <div className="meta">
        <p className="name">{name}</p>
        <span className="handle">@{handle}</span>
        <span className="dot">•</span>
        <span className="ts">1 min</span>
      </div>
      <i className="fa fa-angle-down" onClick={function(evt) {
        //style={{display: "none"}}
        if(collapsed){
          console.log("collapsed true")
          setCollapsed(false);
          evt.target.classList.remove("fa-angle-up");
          evt.target.classList.add("fa-angle-down");
          console.log("clicked", evt.target.classList);
        } else {
          setCollapsed(true);
          evt.target.classList.remove("fa-angle-down");
          evt.target.classList.add("fa-angle-up");

          console.log("clicked", evt.target.classList);
          
        }
        
      }}></i>
    </div>
  )
}

export function TweetFooter({ numComments, numRetweets, numLikes, setLikes, collapsed, liked, setLiked }) {
  
  return (
    <div className="tweet-footer" style={collapsed ? {display: "none"} : {}}>
      <span>
        <i className="fa fa-comment"></i>
        {numComments || 0}
      </span>
      <span>
        <i className="fa fa-retweet"></i>
        {numRetweets || 0}
      </span>
      <span onClick={function(evt) {
        if(liked) {
          setLiked(false);
          setLikes(numLikes-1);
        } else {
          setLiked(true);
          setLikes(numLikes+1);
        }
        console.log("clicked", numLikes);
      }}>
        <i className="fas fa-heart" style={liked ? {color: 'red'} : null}></i>
        {liked ? formatLikes(numLikes ?? 0) : formatLikes(numLikes ?? 0) }
      </span>
      <span>
        <i className="fa fa-envelope"></i>
      </span>
    </div>
  )
}
