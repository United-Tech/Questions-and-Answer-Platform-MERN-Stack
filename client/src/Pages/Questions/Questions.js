import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Question.css";

const Questions = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("/Data.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data.Data);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/Data.json`);
        const json = await response.json();
        const data = json.Data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // console.log(data);

  return (
    <>
      <div className="home">
        <section className="home_top">
          <Link to="/AskQuestion" className="question_btn">
            Ask Question
          </Link>

          <div className="user_class">
            <h4>WelCome: Happy</h4>
          </div>
        </section>
        <div className="question_wrapper">
          <b>Questions</b>
        </div>
        <hr />
        {data.map((Api, data) => (
          <div className="all_user" key={data}>
            <div className="userName1">
              <i className="bi2 bi-person-circle"></i>
              <div className="user_name">
                <div>{Api.user_name}</div>
              </div>
            </div>

            <div className="user_question">
              <Link to="./Answer">{Api.User_question}</Link>
              <Link to="./Answer">
                <i className="bi1 bi-chevron-right"></i>{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
