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
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
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
          className={"text-c-dark"}
          style={{
            width: '40px',
            height: '40px',
            fontSize: '24px',
            textAlign: 'center',
            borderRadius: '4px',
            border: '1px solid #ccc'
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
