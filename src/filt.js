import React from "react";
// import Users from "./data";

const Filt = ({ item, name, age, level, department }) => {
    // const { name, age, level, department } = item;
  return (
    <div className="group">
      <div className="first">
      {name &&
        <p>Name:</p>
        }
        {age &&
        <p>Age:</p>
        }
        {level &&
        <p>Level:</p>
        }
        {department &&
        <p>Department:</p>
        }
      </div>
      <div className="second">
        <p>{item}</p>
      </div>
    </div>
// name.length
// malik you will just have to call only "item" here
  );
};

export default Filt;
