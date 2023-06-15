import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../services/apiServices";
const DetalQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  useEffect(() => {
    fetchQuestions();
  }, [quizId]);
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    console.log(">>> check question : ", res);
  };
  console.log("check params: ", params);
  return <div className="detail-quiz-container">DetalQuiz</div>;
};
export default DetalQuiz;
