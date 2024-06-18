"use client"

import React, {ChangeEvent, KeyboardEvent, memo, useRef, useState} from 'react';

interface ConfirmationCodeInputProps {
  length?: number;
  onComplete: (code: string) => void;
}

const ConfirmationCodeInput = memo<ConfirmationCodeInputProps>(({
                                                                  length = 4,
                                                                  onComplete
                                                                }) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  // const [isFilled, setIsFilled] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]$/.test(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      // Move focus to next input if value is a digit and not the last input
      if (value && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      // Call onComplete if all inputs are filled
      if (newValues.every((val) => val !== '')) {
        onComplete(newValues.join(''));
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const newValues = [...values];

    if (e.key === 'Backspace') {
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
      if (values[index]) {
        newValues[index] = "";
        setValues(newValues);
      }
    } else {
      if (values[index]) {
        newValues[index] = e.key;
        setValues(newValues);
      }
    }
  };

  return (
    <div style={{display: 'flex', gap: '8px'}}>
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, index)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
          ref={(el) => (inputsRef.current[index] = el)}
          className={"text-c-primary bg-c-bg-dark border-2 border-c-primary"}
          style={{
            width: '60px',
            height: '60px',
            fontSize: '24px',
            textAlign: 'center',
            borderRadius: '4px',
          }}
        />
      ))}
    </div>
  );
});
ConfirmationCodeInput.displayName = "ConfirmationCodeInput";

export {
  ConfirmationCodeInput
}
