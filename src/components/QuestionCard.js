function QuestionCard({ faq }) {
    return (
      <div>
        {faq && faq.map((item) => (
          <div className="m-5 shadow-2xl" key={item.id}>
            <h2 className="font-bold">{item.title}</h2>
            <p className="">{item.description}</p>
          </div>
        ))}
      </div>
    );
  }

export default QuestionCard