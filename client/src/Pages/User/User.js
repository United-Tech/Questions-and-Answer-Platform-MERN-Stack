import React, { useState, useEffect } from "react";
import "./User.css";

function User() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUser() {
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
    fetchUser();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: Unable to fetch User</div>;
  }
  return (
    <>
      {data.map((data) => {
        const { user_name } = data;

        return (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="100"
              fill="currentColor"
              class="bi bi-file-person"
              viewBox="0 0 15 11"
            >
              <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
              <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <p className="text-center">{user_name}</p>
          </>
        );
      })}
    </>
  );
}

export default User;
