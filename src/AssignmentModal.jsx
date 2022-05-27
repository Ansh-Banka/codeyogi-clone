import Modal from "react-modal/lib/components/Modal";

const AssignmentModal = (props) => {
  const customStyles = {
    content: {
      position: "absolute",
      top: "80px",
      left: "150px",
      right: "150px",
      bottom: "80px",
    },
  };

  return (
    <div>
      <Modal isOpen={true}>
        <div className="space-y-5">
          <h1>Assignment URL</h1>
          <div>
            <input
              type="text"
              className="border-solid bg-slate-600 px-40 py-3"
              placeholder="Enter your URL"
            />
          </div>

          <button
            onClick={props.modalVisibilityHandler}
            className="bg-slate-500 px-3 py-2 mr-2 rounded-md"
          >
            Submit
          </button>

          <button
            onClick={props.modalVisibilityHandler}
            className="bg-red-500 px-3 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AssignmentModal;
