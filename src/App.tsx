import Schoolinput from "../components/SchoolInput";
import JobInput from "../components/JobInput";
import NewPersonalInput from "../components/newPersonalInput";
import "./App.css";

function App() {
  return (
    <div className="content">
      <header>
        <h1>CV-APP</h1>
      </header>
      <NewPersonalInput />
      <Schoolinput />
      <JobInput />
    </div>
  );
}

export default App;
