import React, { useEffect, useState } from "react";

const Header = () => {
  const [Backenddata , setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);
  return (
    <>
      <div className="bg-blue-500 text-white text-center text-2xl p-4">
        APi DAta
      </div>
      <div>
        {
          typeof Backenddata.users === "undefined" ? (
          <h1>Loading.....</h1>
        ) : (
          Backenddata.users.map((user, index) => (
            <div className="flex justify-center">
              <h4
                className="justify-center align-middle p-10 w-28 flex bg-lime-300 rounded-full"
                key={index}>
                {user}
              </h4>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Header