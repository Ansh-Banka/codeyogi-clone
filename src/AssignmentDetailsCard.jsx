import { DateTime } from "luxon";
import React, { useState } from "react";
import AssignmentModal from "./AssignmentModal";

const AssignmentDetailsCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  let dueDate = props.data.due_date;
  console.log(dueDate);
  dueDate = DateTime.fromISO(dueDate).toFormat('ccc DDD');
  console.log('readable date : ', dueDate);

  const modalVisibilityHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-4 w-auto my-4 mx-9 h-auto space-y-5 bg-white rounded-lg flex flex-col shadow-lg">
      <h1 className="text-xl font-semibold pb-4 border-b-2">
        {props.children}
      </h1>

      <div className="flex pb-4 border-b-2">
        <h2 className="font-medium text-slate-500">Title</h2>
        <span className="grow" />
        <p className="grow">{props.data.title}</p>
      </div>

      <div className="flex pb-4 border-b-2">
        <h2 className="font-medium text-slate-500">Due Date</h2>
        <span className="grow" />
        <p className="grow  mx-80 pl-12">{dueDate}</p>
      </div>

      <div className="flex pb-4 border-b-2">
        <h2 className="font-medium text-slate-500">Description</h2>
        <span className="grow" />
        <p className="grow">{props.data.description}</p>
      </div>

      <div className="items-center text-left text-base text-slate-600">
        <span className="cursor-pointer bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-600" onClick={modalVisibilityHandler}>
          Submit
        </span>
      </div>

      {showModal && (
        <AssignmentModal modalVisibilityHandler={modalVisibilityHandler} />
      )}
    </div>
  );
};
export default AssignmentDetailsCard;
