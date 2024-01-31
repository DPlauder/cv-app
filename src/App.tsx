import Schoolinput from "../components/SchoolInput";
import PersonalInput from "../components/PersonalInput";
import JobInput from "../components/JobInput";
import NewPersonalInput from "../components/newPersonalInput";

function App() {
  return (
    <div className="content">
      <header>
        <h1>CV-APP</h1>
      </header>
      <PersonalInput />
      <NewPersonalInput />
      <Schoolinput />
      <JobInput />
    </div>
  );
}

export default App;
