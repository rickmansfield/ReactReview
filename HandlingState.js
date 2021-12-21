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

//class component to accomplish the same
class ClassRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { studentsCount: 0 };

        this.addStudent = this.addStudent.bind(this);
    }

    addStudent() {
        this.setState((prevState) => {
            return { studentsCount: prevState.studentsCount++ }
        });
    }

    render() {
        return (
            <div>
                <p>Number of students in class room: {this.state.studentsCount}</p>
                <button onClick={this.addStudent}>Add Student</button>
            </div>
        )
    }
}