import React from "react";
import "./Answer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import Question from "../Questions/Question";

import AnswerDetail from "../AnswerDetail/AnswerDetail";
const Answer = () => {
  return (
    <div className="container">
      <Question />
      <h2 className="community_answer my-3">Answer From The Community</h2>

      <div>
        <AnswerDetail />
      </div>

      <h3 className="text-center my-4">Answer The Top Question</h3>
      {/* <Link to="/try" className="text-center my-4">
        Go to Question Page
      </Link> */}
      <div className="text-center my-4">Go to Question Page</div>
      <form className="mx-5" method="post">
        <div>
          <textarea type="text" name="answer" placeholder="Your Answer ..." />
        </div>
        <button className="btn btn-lg btn-primary my-3" type="submit">
          Post Your Answer
        </button>
      </form>
    </div>
  );
};

export default Answer;
