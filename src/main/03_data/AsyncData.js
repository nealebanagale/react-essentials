import React, { useState , useEffect } from "react";


// https://api.github.com/users/nealebanagale

export function AsyncData({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!login) return;  // no login
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
  }, [login]);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  return  (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url}/>
    </div>
  );
  return <div>No User Available</div>
}

//Notes
// FETCHING DATA WITH HOOKS
// - useEffect and useState
//
// DISPLAY DATE FROM AN API
// - access object using keys
//
// HANDLING LOADIN STATES
// - When we make an HTTP request to an API, there are three possible States:
//   - pending or loading
//   - success
//   - failed (requests may be to a broken URL, we just have this empty screen)
