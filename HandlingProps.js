//Example of handling props in a Functional component
<StudentInfo name="Vivek" rollNumber="23" />

function StudentInfo(props) {
    return (
        <div className="main">
            <h2>{props.name}</h2>
            <h4>{props.rollNumber}</h4>
        </div>
    )
}

// these props are handled in a different way in class components
// notice here the keyword "this"
class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <h2>{this.props.name}</h2>
                <h4>{this.props.rollNumber}</h4>
            </div>
        )
    }
}