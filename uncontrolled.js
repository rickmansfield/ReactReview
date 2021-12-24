//UNCONTROLLED-------------
//Controlled and uncontrolled components are just different approaches to handling input-form elements in react.
function FormValidation(props) {
    let inputValue = React.createRef();

    let handleSubmit = e => {
        alert(`Input value: ${inputValue.current.value}`);
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputValue} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}