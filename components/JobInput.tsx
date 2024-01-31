import { ChangeEvent, useState } from "react";
import ViewJob from "./ViewJob";

export default function JobInput() {
  const jobData = {
    company: "",
    position: "",
    tasks: "",
    start: "",
    end: "",
  };
  const [userData, setUserData] = useState(jobData);
  const [show, setShow] = useState(false);

  const blockStyle = { display: "block" };
  const paddingStyle = { padding: "10px" };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...userData, [type]: e?.target?.value });
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
              value={userData.company}
              onChange={(e) => handleInputChange(e, "company")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Position</label>
            <input
              type="text"
              value={userData.position}
              onChange={(e) => handleInputChange(e, "position")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Task</label>
            <input
              type="text"
              value={userData.tasks}
              onChange={(e) => handleInputChange(e, "tasks")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Start Date</label>
            <input
              type="date"
              value={userData.start}
              onChange={(e) => handleInputChange(e, "start")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>End Date</label>
            <input
              type="date"
              value={userData.end}
              onChange={(e) => handleInputChange(e, "end")}
            ></input>
          </div>
        </form>
      )}
      {!show && <ViewJob {...userData}></ViewJob>}
    </div>
  );
}
