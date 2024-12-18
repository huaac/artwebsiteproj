import React from "react"
import missionimg from "./img/missionimg.jpg"
import "./Mission.css"

const Mission = () => {
  return (
    <div className="mission">
      <div className="photo">
        <img src={missionimg} className="mission-img"></img>
      </div>
      <div className="statement">
        <p className="mission-title">Our Mission Statement:</p>
        <div className="text">
          <p>
          Learn how to draw anything by applying basic art techniques and advanced art techniques. 
          Whether you are a beginner or a skilled artist, 
          we provide individual art instruction for anyone with an interest in art, 
          allowing you to move at your own pace and enjoy learning art every step of the way.
          </p>
          <p>
            Learn to use mediums such as pastel, charcoal, watercolor, and oil. 
            Classes available for adults and children 5+.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission