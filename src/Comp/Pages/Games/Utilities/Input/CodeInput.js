import React, { useRef, useEffect } from "react";
import ShortUniqueId from "short-unique-id";

const CodeInput = ({ codeInputs, setCodeInputs, position }) => {
  const [code, setCode] = React.useState("");
  const inputRefs = useRef([]);
  // const code = uid.randomUUID(9).toLocaleUpperCase();

  useEffect(() => {
    const uid = new ShortUniqueId();
    setCode(uid.randomUUID(9).toLocaleUpperCase());
    // Initialize refs
    inputRefs.current = Array.from(
      { length: codeInputs.length },
      (_, index) => inputRefs.current[index] || React.createRef()
    );
  }, [codeInputs.length]);

  const handleInputChange = (index, value) => {
    // Replace '0' with 'O'
    value = value.replace(/0/g, "O");

    const newCodeInputs = [...codeInputs];
    newCodeInputs[index] = value.toUpperCase(); // Convert to uppercase
    setCodeInputs(newCodeInputs);

    // Move to the next input field if the current input is not empty
    if (value === "" && index > 0) {
      // If the current input is empty, move focus to the previous input and clear its value
      newCodeInputs[index - 1] = "";
      setCodeInputs(newCodeInputs);
      inputRefs.current[index - 1].current.focus();
    } else if (value === "" && index === 0) {
      // If the first input is empty and backspace is pressed, do nothing
      return;
    } else if (index < codeInputs.length - 1) {
      // If the current input is not the last one, move focus to the next input
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace key press
    if (e.key === "Backspace" && index > 0 && codeInputs[index] === "") {
      // If backspace is pressed and the current input is empty, move focus to the previous input and clear its value
      const newCodeInputs = [...codeInputs];
      newCodeInputs[index - 1] = "";
      setCodeInputs(newCodeInputs);
      inputRefs.current[index - 1].current.focus();
    }
  };

  return (
    <div>
      <fieldset className="number-code">
        <legend>{`Security Code - Position ${code}`}</legend>
        <div className="flex flex-row gap-2">
          {codeInputs.map((input, index) => (
            <input
              key={index}
              id={`code-input-${index}-${code}`}
              name={`code-${code}`}
              className="code-input border-2 w-[2rem]"
              required
              value={input}
              ref={inputRefs.current[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default CodeInput;
