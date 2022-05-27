import MDEditor from "@uiw/react-md-editor";

const Card = (props) => {
    console.log(props.children)
    console.log(props.recording);
    return ( <div className = "p-4 w-auto my-4 mx-9 h-56 bg-white rounded-lg flex flex-col shadow-lg" >
        <li className = "font-semibold" >
        <MDEditor.Markdown source = { props.children }
        className = "!bg-white !text-black" />
        </li>
        <span className = "grow" / >
        <div className = "items-center text-center text-base text-slate-600 hover:font-semibold" >
        <a href = { props.recording } > Watch / Download Recording </a> </div> </div>
    );
};

export default Card;