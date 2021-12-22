//Example of handling props in a Functional component
//In functional components, the handling of props is pretty straight forward. Any prop provided as an argument to a functional component, can be directly used inside HTML elements:
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