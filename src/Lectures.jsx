import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import ErrorPage from "./ErrorPage";

const Lectures = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

    console.log(data);
    console.log(error);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.codeyogi.io/batches/1/sessions",
        {
          withCredentials: true,
        }
      );
      console.log(response);
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
    <div className="m-10">
      {!error && (
        <div>
          <h1 className="text-xl font-bold">Lectures List</h1>

          <div className="bg-gray-200">
            {data.map((lecture) => (
              <ul key={lecture.id}>
                  <Card recording={lecture.recording_url}>{lecture.topic}</Card>
              </ul>
            ))}
          </div>
        </div>
      )}

      {error && <ErrorPage />}
    </div>
  );
};
export default Lectures;
