import { useState } from "react";

const LimitedInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow only up to 20 characters
    if (value.length <= 100) {
      setInputValue(value);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <label htmlFor="limited-input" style={{ fontWeight: "bold", display: "block", marginBottom: "10px" }}>
        Message
      </label>
        <input
            placeholder="ex: this is my message"
            type="text"
            value={config[type]?.mage}
            onChange={(e) => updateConfig(type,'mage',e.target.value)}
            className="MF_input_mage"
        />
      <input
        id="limited-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
        maxLength={100} // Restrict input to 20 characters
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "300px",
          color:"black"
        }}
      />
      <p style={{ marginTop: "10px", color: "gray" }}>
        {100 - inputValue.length} characters remaining
      </p>
    </div>
  );
};

export default LimitedInput;
