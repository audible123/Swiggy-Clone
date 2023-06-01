import { useState } from "react";
import React  from "react";

const Section = ({ title, details }) => {

     const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="shadow-2xl border-2 my-5 p-3">
      <h1 className="text-xl font-bold">{title}</h1>

      {isVisible ? (
        <button
          className="bg-gradient-to-r from-blue-900 to-black text-white p-1 my-2 rounded-xl"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button className="bg-gradient-to-r from-blue-900 to-black text-white p-1 my-2 rounded-xl" onClick={() => setIsVisible(true)}>
          Show
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
