import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/MyContext";

function DetailNote() {
  const { GetSingleNote, token } = useContext(Context);
  const [note, setNote] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getNote = async () => {
      const response = await GetSingleNote(token, id);
      setNote(response.data);
    };
    getNote();
  }, []);

  return (
    <div className=" mt-6 w-full flex justify-center">
      <div className="bg-slate-100  w-1/2 p-10 flex flex-col gap-10 rounded-lg">
        <Link to={"/dashboard/notes"} className="text-2xl cursor-pointer border-2 shadow-md hover:shadow-lg hover:bg-white p-1 flex justify-center rounded-full w-20 font-bold">
          {" "}
          Back
        </Link>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-4xl">{note.title}</div>
          <div className="font-normal  text-slate-400  ">{note.createdAt}</div>
          <div className="font-semibold   ">{note.owner}</div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="text-lg">{note.body}</div>
        </div>
        <div className="flex gap-2">
          <button className={`font-bold py-2 px-4  rounded-full  text-white ${note.archived ? "bg-blue-500 hover:bg-blue-700" : "bg-slate-400 hover:bg-slate-500"}  `}>{note.archived ? "Unarchiv" : "Archive"}</button>
          <button className="bg-red-500 rounded-lg hover:bg-red-700 text-white font-bold py-2 px-4 ">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DetailNote;
