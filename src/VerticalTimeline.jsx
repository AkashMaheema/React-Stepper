// VerticalTimeline.js
import React, { useState } from "react";
import './Timeline.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const VerticalTimelineComponent = () => {
  const [showDetails, setShowDetails] = useState(Array(5).fill(false));

  const handleToggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <VerticalTimeline className="timeline">
      {[0, 1, 2, 3, 4].map((index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element ${
            showDetails[index] ? "open" : ""
          }`}
          date=""
          contentStyle={{ background: 'rgba(0, 238, 255, 0.356)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 238, 255, 0.356)' }}
          iconStyle={{ background: "#050100", cursor: "pointer" }}
          style={{ margin: '100px auto 100px auto ' }}
        >
          <h3
            className={`vertical-timeline-element-title text-white text-center`}
            onClick={() => handleToggleDetails(index)}
          >
            Event {index + 1}
          </h3>
          {showDetails[index] && (
            <div className="text-center">
              <p>Description {index + 1}</p>
            </div>
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
