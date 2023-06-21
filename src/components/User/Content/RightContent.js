import CountDown from "./CountDown";

const RightContent = (props) => {
  const { dataQuiz } = props;
  console.log(dataQuiz);
  const onTimeUp = () => {
    props.handeleFinishQuiz();
  };
  return (
    <>
      <div className="main-timer">
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 1 &&
          dataQuiz.map((item, index) => {
            return (
              <div key={`question-${index}`} className="question">
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default RightContent;
