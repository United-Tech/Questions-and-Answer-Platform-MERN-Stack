import React, { useState, useEffect } from "react";
import "./Question.css";

function Question() {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/data.json`);
        const json = await response.json();
        const data = json.Data;
        setQuestion(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
    
    console.log(question);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div>
      <h2>Question</h2>
      {/* {question.map((data) => { */}
      {/* const { User_question, User_questionDes } = data; */}
      {/* let singleQuestion = ( */}
      <div>
        <h4>{question[0].User_question}</h4>
        <h5>{question[0].User_questionDes}</h5>
      </div>
      {/* ); return singleQuestion; */}
      {/* })} */}
    </div>
  );
}

export default Question;
