import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div className="App App-header">
      <a className="text-link" href="https://platform.openai.com/examples">
        <h2>
          Explore what's possible with some examples -
          https://platform.openai.com/examples
        </h2>
      </a>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your question here..."
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        DO YOUR STUFF!
      </button>
      <a href="https://epletnev.github.io/chatgpt-clone-app">
        <button className="action-btn">TAKE ME BACK</button>
      </a>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
