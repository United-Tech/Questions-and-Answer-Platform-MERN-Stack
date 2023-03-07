import React from "react";
import { Link } from "react-router-dom";
import "./AskQuestion.css";

export default function AskQuestion() {
  return (
    <div className="AskQuestion">
      <div className="container my-5">
        <div className="d-flex flex-column ms-5 mt-5 mb-2">
          <h1>Steps to write a good question</h1>
          <ul className="question_steps">
            <li>Summerize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>

        <form className="d-flex flex-column p-5 question_form  justify-content-between">
          <div className="linkDiv">
            <h3>Ask a Public Question</h3>

            <Link to="/" className="linkQuestion text-reset">
              Go to Question Page
            </Link>
          </div>

          <input
            className="question-title"
            type="text"
            name="question"
            Placeholder="Title"
          />

          <textarea
            className="question-input"
            placeholder="Question Description..."
            name="questionDescription"
          ></textarea>

          <button className="question-btn btn-lg" type="">
            <Link to='/'>Post Your Question</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
