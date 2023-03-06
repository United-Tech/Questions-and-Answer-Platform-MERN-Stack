import React, { useState, useEffect } from "react";

function AnswerDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/data.json`);
        const json = await response.json();
        const data = json.Data;
        setData(data);
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
    return <div>Error: Unable to fetch answer</div>;
  }

  return (
    <>
      {data.map((data) => {
        const { answer } = data;
        return <p>{answer}</p>;
      })}
    </>
  );
}


export default AnswerDetail;
