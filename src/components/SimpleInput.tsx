import { useState, useRef, ChangeEvent, FormEvent } from 'react';

const SimpleInput = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState<string>('');

  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event: FormEvent) => {
    event.preventDefault();

    if (enteredName.trim() === '') return;

    const enteredValue = nameInputRef.current?.value ?? null;
    console.log(enteredName);
    console.log(enteredValue);

    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
