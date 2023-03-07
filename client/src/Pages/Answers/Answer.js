import React from "react";
import "./Answer.css";

import Question from "../Questions/Question";

import AnswerDetail from "../AnswerDetail/AnswerDetail";
const Answer = () => {
  return (
    <div className="fixWidth">
      <div className="container">
        <Question />
        <h5 className="community_answer my-3 pt-2 pb-4">
          Answer From The Community
        </h5>

        <div className="container">
          <AnswerDetail />
        </div>

        <h5 className="text-center my-4">Answer The Top Question</h5>
        {/* <Link to="/try" className="text-center my-4">
        Go to Question Page
      </Link> */}
        <div className="text-center my-4">Go to Question Page</div>
        <form className="mx-5" method="post">
          <div>
            <textarea type="text" name="answer" placeholder="Your Answer ..." />
          </div>
          <button className="btn btn-lg btn-primary my-3 fs-5" type="submit">
            Post Your Answer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Answer;
