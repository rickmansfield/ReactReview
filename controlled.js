//CONTROLLED--------------
//Controlled and uncontrolled components are just different approaches to handling input-form elements in react.
function FormValidation(props) {
    let [inputValue, setInputValue] = useState("");

    let updateInput = e => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <form>
                <input type="text" value={inputValue} onChange={updateInput} />
            </form>
        </div>
    );
}