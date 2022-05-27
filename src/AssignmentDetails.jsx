import axios from "axios";
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import AssignmentDetailsCard from "./AssignmentDetailsCard";
import ErrorPage from "./ErrorPage";

const AssignmentDetails = (props) => { const [data, setData] = useState([]);
const [error, setError] = useState(false); console.log(data); console.log('error - ',error);
const params = useParams(); const assignId = params.assignmentId; console.log('param - ', assignId); const fetchData = async () => {
    try {
        const response = await axios.get( `https://api.codeyogi.io/assignments/${assignId}`, 
        { withCredentials: true, } );
    console.log(response);
    await setData(response.data);
    console.log(data); }
    catch (error) {
        console.log(error);
        setError(true); }
        useEffect(() => { fetchData(params); }, []);}
    return (
    <div className="m-10">
    {
    <h1>{params.assignmentId}</h1> } {!error && (
    <div>
        <AssignmentDetailsCard data={data}>Assignment Details</AssignmentDetailsCard>
    </div>
    )} {error &&
    <ErrorPage />}
</div>);
};

export default AssignmentDetails;