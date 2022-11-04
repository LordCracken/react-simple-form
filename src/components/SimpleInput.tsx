import { useState, ChangeEvent, FormEvent } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState<string>('');
  const [enteredNameTouched, setEnteredNameTouched] = useState<boolean>(false);

  const enteredNameIsValid = enteredName.trim() !== '' && enteredNameTouched;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event: FormEvent) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) return;

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
