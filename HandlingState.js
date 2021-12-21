//Functional components use the useState Hook 
function ClassRoom(props) {
    let [studentsCount, setStudentsCount] = useState(0);

    const addStudent = () => {
        setStudentsCount(++studentsCount);
    }
    return (
        <div>
            <p>Number of students in class room: {studentsCount}</p>
            <button onClick={addStudent}>Add Student</button>
        </div>
    )
}