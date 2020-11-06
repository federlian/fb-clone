import React from "react";
import "./StoryReel.css"
import Story from "./story/Story";

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  )
}

export default StoryReel