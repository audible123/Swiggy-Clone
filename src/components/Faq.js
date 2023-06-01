import React, { useEffect, useState } from "react";
import QuestionList from "./QuestionList";

const FAQ = () => {
  const [userFAQ, setUserFAQ] = useState("");

  const fetchFAQ = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/support/issues/faq");
    const json = await data.json();

    setUserFAQ(json);
    console.log(json);
    console.log(userFAQ?.data?.issues?.data[0]);
  };

  useEffect(() => {
    fetchFAQ();
  }, []);

return (
  <div className="relative h-auto">
    {userFAQ?.data?.issues?.data.map((Question) => (
      <div key={Question.id}>
        <QuestionList {...Question} />
      </div>
    ))}
  </div>
);
};

export default FAQ;