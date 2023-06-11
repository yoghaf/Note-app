import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../utils/MyContext";

function Card({ title, owner, description, date, archived, id, setNotes }) {
  const { token, ArchiveNote, DeleteNote, GetNotes } = useContext(Context);

  const handleArchive = async (token, id) => {
    await ArchiveNote(token, id);
    console.log(token);
    const responseNotes = await GetNotes(token);
    setNotes(responseNotes.data);
  };
  const handleDelete = async (token, id) => {
    await DeleteNote(token, id);
    const responseNotes = await GetNotes(token);
    setNotes(responseNotes.data);
  };

  return (
    <div className="border-2 rounded-lg w-full  shadow-md hover:shadow-lg">
      <div className="flex justify-between items-center p-5">
        <div className="flex flex-col gap-1 ">
          <Link to={`/dashboard/detail/${id}`}>
            <div className="font-bold text-2xl">{title}</div>
          </Link>
          <div className="font-normal text-sm text-slate-400  ">{owner}</div>
        </div>
        <div className="font-bold text-sm">{date}</div>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className={`${description.lengt > 20 ? "truncate" : ""}`}>{description}</div>
        <div className="flex gap-2 p-3">
          <button
            onClick={() => handleArchive(token, id)}
            className={`font-bold py-2 px-4 shadow-md hover:shadow-lg rounded-full cursor-pointer text-white ${archived ? "bg-blue-500 hover:bg-blue-700" : "bg-slate-400 hover:bg-slate-500"}  `}
          >
            {archived ? "Unarchiv" : "Archive"}
          </button>

          <button onClick={() => handleDelete(token, id)} className="bg-red-500 rounded-xl cursor-pointer shadow-md hover:shadow-lg  hover:bg-red-700 text-white font-bold py-2 px-4 ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: propTypes.string,
  owner: propTypes.string,
  description: propTypes.string,
  date: propTypes.string,
  archived: propTypes.bool,
  id: propTypes.string,
  setNotes: propTypes.func,
};

export default Card;
