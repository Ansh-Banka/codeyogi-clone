import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssignmentModal from "./AssignmentModal";

const AssignmentCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const modalVisibilityHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-4 cursor-pointer w-auto my-4 mx-9 h-56 bg-white rounded-lg flex flex-col shadow-lg">
      <div
        onClick={() => {
          navigate(`/assignments/${props.id}/details`);
        }}
        className='flex flex-col'
      >

        <li className="font-bold pr-96">
          <MDEditor.Markdown
            source={props.children}
            className="!bg-white !text-black"
          />
        </li>
        <span className="grow pt-36" />


      </div>
      {/* <span className="grow" /> */}

      <div className="items-center text-center text-base text-slate-600 hover:font-bold">
        <div className="cursor-pointer" onClick={modalVisibilityHandler}>
          Submit
        </div>
      </div>

      {showModal && (
        <AssignmentModal modalVisibilityHandler={modalVisibilityHandler} />
      )}
    </div>
  );
};

export default AssignmentCard;
