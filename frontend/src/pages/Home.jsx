import React from "react";

function Home() {
  const name = localStorage.getItem("LoginUser");

  console.log("name", name);
  return <div>welcome {name}</div>;
}

export default Home;
