import Table from 'react-bootstrap/Table';
import { getHistory } from '../services/apiServices';
import { useEffect, useState } from 'react';
const ModalHistory = () => {
   
    const [history, setHistory] = useState([]);
    useEffect(() => { fetchHistory() }, []);
    const fetchHistory = async () => {
        let res = await getHistory();
        if (res && res.EC === 0) {
            let newData = res?.DT?.data?.map((item) => {
                return {
                    total_correct: item.total_correct,
                    total_questions: item.total_questions,
                    name: item.quizHistory.name,
                    description: item.quizHistory.description,
                }
            })
            setHistory(newData);
        }
    };

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Name</th>
                        <th>Total Question</th>
                        <th>Total Correct</th>

                    </tr>
                </thead>
                <tbody>
                    {history && history.length > 0 &&
                        history.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{item.description}</td>
                                    <td>{item.name}</td>
                                    <td>{item.total_questions}</td>
                                    <td>{item.total_correct}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default ModalHistory;