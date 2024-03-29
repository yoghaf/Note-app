import { Context } from "../../utils/MyContext";
import { useContext, useEffect, useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as Label from "@radix-ui/react-label";
import Card from "../../components/Card";

function NoteList() {
  const { GetUser, token, GetNotes } = useContext(Context);
  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await GetUser(token);
      setUser(response.data);
    };
    const getNotes = async () => {
      const response = await GetNotes(token);
      setNotes(response.data);
    };
    getNotes();
    getUser();
  }, []);

  return (
    <div className="flex items-center flex-col p-10 gap-5">
      <div className="flex">
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image className="AvatarImage" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" alt="Colm Tuite" />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            CT
          </Avatar.Fallback>
        </Avatar.Root>
        <div style={{ display: "flex", padding: "0 20px", flexWrap: "wrap", gap: 15, alignItems: "center" }} className="flex-wrap">
          <Label.Root className="LabelRoot" htmlFor="firstName">
            Username
          </Label.Root>
          <input className="bg-slate-300 rounded-lg h-4 p-3 " type="text" id="firstName" defaultValue={user.name} />
          <Label.Root className="LabelRoot" htmlFor="firstName">
            Email
          </Label.Root>
          <input className="bg-slate-300 rounded-lg h-5 p-3 " type="text" id="firstName" defaultValue={user.email} />
        </div>
      </div>
      <div className="mt-2 w-1/2 flex gap-3 flex-col">
        {notes.map((note) => {
          return <Card setNotes={setNotes} key={note.id} id={note.id} title={note.title} owner={note.owner} description={note.body} date={note.createdAt} archived={note.archived} />;
        })}
      </div>
    </div>
  );
}

export default NoteList;
