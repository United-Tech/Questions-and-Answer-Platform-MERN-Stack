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

if (loading) {
return <div>Loading...</div>;
}

if (error) {
return <div>Error: Unable to fetch data</div>;
}

return (
<div>
{question.map((data) => {
const { question_title, question_description } = data;
let singleQuestion = (
<div>
<h2>Question</h2>
<h4>{question_title}</h4>
<h5>{question_description}</h5>
</div>
);
return singleQuestion;
})}
</div>
);
}

export default Question;




