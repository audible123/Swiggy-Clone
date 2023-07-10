import { useState } from "react";
import React  from "react";
const Section = ({ title, details }) => {

     const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="shadow-2xl border-2 my-5 p-3 relative right-0">
      <h1 className="text-xl font-bold"> {title}</h1>

      {isVisible ? (
        <button
          className=" p-1 my-1.5 rounded-xl absolute right-2"
          onClick={() => setIsVisible(false)}
        >
          ^
        </button>
      ) : (
        <button className=" p-1 my-[-1.7rem] rounded-xl absolute right-5 " onClick={() => setIsVisible(true)}>
          V
        </button>
      )}
      {isVisible && <p className="">{details}</p>}

      {/* <button>Show</button>
    {isVisible && <p>{details}</p>}

    <button>Hide</button> */}
    </div>
  );
};

const QuestionList = ({ id, title, description }) => {
  return (
    <>
      <div className="">

        <Section title={title} details={description}/>
        
      </div>
    </>
  );
};

export default QuestionList;
