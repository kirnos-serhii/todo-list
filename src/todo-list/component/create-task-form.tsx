import React, {FormEvent, FunctionComponent, useState} from 'react';

interface Props {
    handleCreate: (taskName: string) => void,
}

const CreateTaskForm: FunctionComponent<Props> = (props: Props) => {

    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (value === '') {
            setErrorMessage('Value can\'t be empty');
            return;
        }

        props.handleCreate(value);
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="input-group">
            <input
                type="text"
                id="add-new-todo"
                className="form-control"
                placeholder="Task name"
                aria-describedby="add-button"
                onChange={(event) => setValue(event.target.value)}
                value={value}
            />
            <button className="btn btn-outline-success" id="add-button">Add</button>
        </div>
        {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
    </form>
    )
}

export default CreateTaskForm;
