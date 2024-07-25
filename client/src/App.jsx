import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api") //fetching data from the server
      .then((res) => res.json()) // display the data in json format
      .then((data) => setData(data)); // set the data in the state
  }, []);
  return (
    <>
      
      {
        typeof data == "undefined" ? (
        <p> Loading...</p>
      )
       : (
        data.map((user, index) => 
        (
         <div> <h2 key={index}>{user.shop}</h2>
         <h2 >{user.ceo}</h2>
         </div>
         ))
      )}
    </>
  );
};

export default App;
