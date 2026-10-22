import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>React Form – Textarea with State</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="message">Enter your text:</label>
        <br />
        <textarea
          id="message"
          rows="6"
          cols="60"
          placeholder="Type something here..."
          value={text}
          onChange={handleChange}
        />
      </form>

      <h3>Updated Value:</h3>
      <p
        style={{
          border: "1px solid #999",
          padding: "10px",
          minHeight: "40px",
          whiteSpace: "pre-wrap",
        }}
      >
        {text}
      </p>
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default App;
