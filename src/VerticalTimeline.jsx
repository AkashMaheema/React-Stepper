// VerticalTimeline.js
import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

const VerticalTimelineComponent = () => {
  const lottieContainerRef = useRef(null);
  const [showDetails, setShowDetails] = useState([false, false, false, false, false]);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: lottieContainerRef.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./json/web.json"),
    });

    return () => {
      animationInstance.destroy();
    };
  }, []);

  const handleToggleDetails = (index) => {
    setShowDetails((prevShowDetails) => {
      const newShowDetails = [...prevShowDetails];
      newShowDetails[index] = !newShowDetails[index];
      return newShowDetails;
    });
  };


  return (
    <VerticalTimeline className="timeline">
      <VerticalTimelineElement
        className={`vertical-timeline-element ${showDetails[0] ? "open" : ""}`}
        date=""
        contentStyle={{
          background: "rgba(0, 238, 255, 0.356)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgba(0, 238, 255, 0.356)",
        }}
        icon={<div ref={lottieContainerRef}></div>}
        iconStyle={{ background: "#050100", cursor: "pointer" }}
        style={{ margin: "100px auto 100px auto" }}
      >
        <h3
          className={`vertical-timeline-element-title text-white text-center`}
          onClick={() => handleToggleDetails(0)}
        >
          Event 1
        </h3>
        {showDetails[0] && (
          <div className="text-center">
            <p>Description 1</p>
          </div>
        )}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className={`vertical-timeline-element ${showDetails[1] ? "open" : ""}`}
        date=""
        contentStyle={{
          background: "rgba(0, 238, 255, 0.356)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgba(0, 238, 255, 0.356)",
        }}
        // icon={commonIcon}
        iconStyle={{ background: "#050100", cursor: "pointer" }}
        style={{ margin: "100px auto 100px auto" }}
      >
        <h3
          className={`vertical-timeline-element-title text-white text-center`}
          onClick={() => handleToggleDetails(1)}
        >
          Event 2
        </h3>
        {showDetails[1] && (
          <div className="text-center">
            <p>Description 2</p>
          </div>
        )}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={`vertical-timeline-element ${showDetails[2] ? "open" : ""}`}
        date=""
        contentStyle={{
          background: "rgba(0, 238, 255, 0.356)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgba(0, 238, 255, 0.356)",
        }}
        // icon={commonIcon}
        iconStyle={{ background: "#050100", cursor: "pointer" }}
        style={{ margin: "100px auto 100px auto" }}
      >
        <h3
          className={`vertical-timeline-element-title text-white text-center`}
          onClick={() => handleToggleDetails(2)}
        >
          Event 3
        </h3>
        {showDetails[2] && (
          <div className="text-center">
            <p>Description 3</p>
          </div>
        )}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={`vertical-timeline-element ${showDetails[3] ? "open" : ""}`}
        date=""
        contentStyle={{
          background: "rgba(0, 238, 255, 0.356)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgba(0, 238, 255, 0.356)",
        }}
        // icon={commonIcon}
        iconStyle={{ background: "#050100", cursor: "pointer" }}
        style={{ margin: "100px auto 100px auto" }}
      >
        <h3
          className={`vertical-timeline-element-title text-white text-center`}
          onClick={() => handleToggleDetails(3)}
        >
          Event 4
        </h3>
        {showDetails[3] && (
          <div className="text-center">
            <p>Description 4</p>
          </div>
        )}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={`vertical-timeline-element ${showDetails[4] ? "open" : ""}`}
        date=""
        contentStyle={{
          background: "rgba(0, 238, 255, 0.356)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgba(0, 238, 255, 0.356)",
        }}
        // icon={commonIcon}
        iconStyle={{ background: "#050100", cursor: "pointer" }}
        style={{ margin: "100px auto 100px auto" }}
      >
        <h3
          className={`vertical-timeline-element-title text-white text-center`}
          onClick={() => handleToggleDetails(4)}
        >
          Event 5
        </h3>
        {showDetails[4] && (
          <div className="text-center">
            <p>Description 5</p>
          </div>
        )}
      </VerticalTimelineElement>

      
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
