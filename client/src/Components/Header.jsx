import React, { useEffect, useState } from "react";
import Card from "./Card";
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
      <div className=" flex flex-wrap justify-center align-middle gap-10  p-8  border-2 border-red-300 ">
        {typeof Backenddata.users === "undefined" ? (
          <h1>Loading.....</h1>
        ) : (
          Backenddata.users.map((user, index) => (
            <div className=" flex justify-center align-middle">
              <Card
                className=
                ""
                key={index}
                Data={user.title}
                img={user.img}
                avatar={user.avatar}
              />
              {/* <h4
                className="justify-center align-middle p-10 w-28 flex bg-lime-300 rounded-full"
                key={index}>
                {user}
              </h4> */}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Header