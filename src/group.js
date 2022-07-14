import React from "react";
// import Users from "./data";

const Group = ({ item }) => {
    const { name, age, level, department } = item;
  return (
    <div className="group">
      <div className="first">
        <p>Name:</p>
        <p>Age:</p>
        <p>Level:</p>
        <p>Department:</p>
      </div>
      <div className="second">
        <p>{name}</p>
        <p>{age}</p>
        <p>{level}</p>
        <p>{department}</p>
        </div>
    </div>

// name.length
// malik you will just have to call only "item" here
  );
};

export default Group;
