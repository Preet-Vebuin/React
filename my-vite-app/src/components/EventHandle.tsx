import React from "react";

// Define props type for AlertButton
type AlertButtonProps = {
  message: string;
  children: React.ReactNode; // Allows passing text or elements inside the button
};

const AlertButton: React.FC<AlertButtonProps> = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};  

const Toolbar: React.FC = () => {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
};

export default Toolbar;
