import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: auto;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f4f4f4;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const RangeInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 5px 0;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px 0;
`;

const Password: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(12);
  const [includeUpper, setIncludeUpper] = useState<boolean>(true);
  const [includeLower, setIncludeLower] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

  // Function to generate a password
  const generatePassword = useCallback(() => {
    let chars = "";
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+=-{}[]<>?/";

    if (!chars) return;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(newPassword);
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols]);

  // Automatically generate a new password when settings change
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <Container>
      <h2>Password Generator</h2>
      <Input type="text" value={password} readOnly />

      <Label>Password Length: {length}</Label>
      <RangeInput type="range" min="6" max="20" value={length} onChange={(e) => setLength(Number(e.target.value))} />

      <CheckboxContainer>
        <Label><input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Uppercase</Label>
        <Label><input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Lowercase</Label>
        <Label><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /> Numbers</Label>
        <Label><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} /> Symbols</Label>
      </CheckboxContainer>
    </Container>
  );
};

export default Password;
