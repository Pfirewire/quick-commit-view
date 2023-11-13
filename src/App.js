import MenuBar from "./components/MenuBar";
import StudentList from "./components/StudentList";
import {useState} from "react";

function App() {
    const [ cohort, setCohort ] = useState("Select Cohort");
    return (
        <div>
            <MenuBar cohort={cohort} />
            <StudentList />
        </div>
    )
}

export default App;