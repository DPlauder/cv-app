import { useState } from "react";
import ViewJob from "./ViewJob";

export default function JobInput() {
  const jobData = {
    company: "",
    position: "",
    tasks: "",
    start: "",
    end: "",
  };
  const [UserData, setUserData] = useState(jobData);
  const [show, setShow] = useState(false);

  const blockStyle = { display: "block" };
  const paddingStyle = { padding: "10px" };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...UserData, [type]: e?.target?.value });
  };

  return (
    <div className="containerJob">
      <button onClick={() => (show ? setShow(false) : setShow(true))}>
        Job
      </button>
      {show && (
        <form>
          <div style={paddingStyle}>
            <label style={blockStyle}>Company</label>
            <input
              type="text"
              value={UserData.company}
              onChange={(e) => handleInputChange(e, "company")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Position</label>
            <input
              type="text"
              value={UserData.position}
              onChange={(e) => handleInputChange(e, "position")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Task</label>
            <input
              type="text"
              value={UserData.tasks}
              onChange={(e) => handleInputChange(e, "tasks")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Start Date</label>
            <input
              type="date"
              value={UserData.start}
              onChange={(e) => handleInputChange(e, "start")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>End Date</label>
            <input
              type="date"
              value={UserData.end}
              onChange={(e) => handleInputChange(e, "end")}
            ></input>
          </div>
        </form>
      )}
      {!show && <ViewJob {...UserData}></ViewJob>}
    </div>
  );
}
