import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"
import 'emoji-picker-element';

export default function TweetInput(props) {
  console.log("expand", props.expand);
  let classN = props.expand ? "expanded" : ""
;  return (
    <div className="tweet-textarea">
      <AvatarIcon />
      

      <textarea className={classN} name="new-tweet-input" type="text" placeholder="What's Happening?" value={props.value} onChange={props.handleOnChange} onFocus={function (evt) {
        evt.target.classList.add("expanded")
      }} onBlur={function(evt) {
        if(props.value === "") {
          evt.target.classList.remove("expanded");
        }
      }}></textarea>

      <SmileIcon />
    </div>
  )
}

export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>
