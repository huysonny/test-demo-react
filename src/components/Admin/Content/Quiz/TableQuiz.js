import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../services/apiServices";
import ModalDelteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";
import ModalViewQuiz from "./ModalViewQuiz";
const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
  const [dataDelete, setDataDelete] = useState({});
  const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [showModalViewQuiz, setShowModalViewQuiz] = useState(false);
  const [dataView, setDataView] = useState({});

  const handleClickDeleteQuiz = (quiz) => {
    setShowModalDeleteQuiz(true);
    console.log("quiz", quiz);
    setDataDelete(quiz);
  };

  const handleClickBtnUpdate = (quiz) => {
    setShowModalUpdateQuiz(true);
    setDataUpdate(quiz);
  };

  const handelClickBtnView = (quiz) => {
    setShowModalViewQuiz(true);
    setDataView(quiz);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);
  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };
  const resetViewData = () => {
    setDataView({});
  };
  return (
    <>
      <div>List Quizzes</div>
      <table className="table table-hover table-bordered mt-2 my-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col" style={{ width: "10%" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`table-quiz-${index}`}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td style={{ display: "flex", gap: "5px" }}>
                    <button
                      className="btn btn-warning "
                      onClick={() => handleClickBtnUpdate(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClickDeleteQuiz(item)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => handelClickBtnView(item)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalDelteQuiz
        show={showModalDeleteQuiz}
        setShow={setShowModalDeleteQuiz}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />
      <ModalUpdateQuiz
        show={showModalUpdateQuiz}
        setShow={setShowModalUpdateQuiz}
        resetUpdateData={resetUpdateData}
        dataUpdate={dataUpdate}
        fetchQuiz={fetchQuiz}
      />
      <ModalViewQuiz
        show={showModalViewQuiz}
        setShow={setShowModalViewQuiz}
        dataView={dataView}
        resetViewData={resetViewData}
      />
    </>
  );
};
export default TableQuiz;
