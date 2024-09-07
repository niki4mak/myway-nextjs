"use client"

import React, {
  ChangeEvent,
  ChangeEventHandler,
  ClipboardEventHandler,
  KeyboardEvent,
  memo,
  useEffect,
  useRef,
  useState
} from 'react';

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

  useEffect(() => {
    // Handle autofill from the browser
    const handleAutofill = (e: any) => {
      const newValue = e.target.value;
      if (newValue && newValue.length > 1) {
        e.preventDefault();
        const newValues = newValue.split('').slice(0,4);
        setValues(newValues);
        onComplete(newValue);
      }
    };

    inputsRef.current[0]?.addEventListener('input', handleAutofill);

    return () => {
      inputsRef.current[0]?.removeEventListener('input', handleAutofill);
    };
  }, [length, onComplete]);

  const handlePaste: ClipboardEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const paste = e.clipboardData?.getData('text');

    if (paste) {
      const pasteArray = paste.split('').slice(0, length);
      const newValues = [...values];

      // Paste into the first fields up to the length of the inputs
      pasteArray.forEach((char, index) => {
        if (/^[0-9]$/.test(char)) {
          newValues[index] = char;
        }
      });

      setValues(newValues);

      // Call onComplete if all inputs are filled
      if (newValues.every((val) => val !== '')) {
        onComplete(newValues.join(''));
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    e.preventDefault();
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
    } else {
      return;
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
    <form style={{display: 'flex', gap: '8px'}} autoComplete={"one-time-code"}>
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
          onPaste={handlePaste} // Handle paste event
          ref={(el) => (inputsRef.current[index] = el)}
          autoComplete={"one-time-code"}
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
    </form>
  );
});
ConfirmationCodeInput.displayName = "ConfirmationCodeInput";

export {
  ConfirmationCodeInput
}
