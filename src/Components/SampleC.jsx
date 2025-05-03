import React, { useState,useEffect } from "react";

const SampleC = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchusers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await res.json();
        // const json = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        setUser(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchusers();
  }, []);

  if (error) return <p>Error Message : {error}</p>;
  if (loading) return <p>Is Loading</p>;

  return (
    <div>
        {user.id}
        {user.title}
        {user.completed}
      {/* <ul>
        {user.map((use) => (
          <li key={use.id}>{use}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default SampleC;
