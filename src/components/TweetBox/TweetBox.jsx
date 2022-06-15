import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  //const submit = document.querySelector("button.tweet-submit-button");
  const [disabled, setDisabled] = React.useState(true);
  function handleOnTweetTextChange(evt) {
    //evt.preventDefault();
    //const submit = document.querySelector("button.tweet-submit-button");
    console.log(evt.target.value);
    
    if (evt.target.value.length > 140 || evt.target.value.length === 0) {
      console.log("changed to disabled");
      setDisabled(true);
    } else {
      console.log("changed to not disabled");
      setDisabled(false);
    }
    props.setTweetText(evt.target.value);
  }

  function handleOnSubmit() {
    const submit = document.querySelector("button.tweet-submit-button");
    console.log("clicled");
    let newTweet = {name: props.userProfile.name, 
                    handle: props.userProfile.handle, 
                    text: props.tweetText, 
                    comments: 0, 
                    retweets: 0, 
                    likes: 0, 
                    id: props.tweets.length};
    let newTweets = props.tweets;
    newTweets.push(newTweet);
    console.log(newTweets);
    props.setTweets(newTweets);
    props.setTweetText("");
    setDisabled(true);
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disabled={disabled}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span className={props.tweetText.length > 140 ? "red" : ""}>{props.tweetText.length > 0 ? 140 - props.tweetText.length : null}</span>
}

export function TweetSubmitButton({handleOnSubmit, disabled}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} disabled={disabled}>Tweet</button>
    </div>
  )
}
