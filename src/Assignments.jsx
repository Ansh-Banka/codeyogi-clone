import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import ErrorPage from "./ErrorPage";

const Assignments = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  console.log(data);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.codeyogi.io/batches/1/assignments",
        {
          withCredentials: true,
        }
      );
      // console.log(response);
      await setData(response.data);
      // console.log(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-10 h-full">
      {!error && (
        <div>
          <h1 className="text-xl font-bold">Assignments</h1>

          <div className="bg-gray-200 ml-36 h-full">
            {data.map((assignment) => (
              <ul key={assignment.id}>
                <AssignmentCard id={assignment.id}>
                  {assignment.title}
                </AssignmentCard>
              </ul>
            ))}
          </div>
        </div>
      )}
      {error && <ErrorPage />}
    </div>
  );
};
export default Assignments;
