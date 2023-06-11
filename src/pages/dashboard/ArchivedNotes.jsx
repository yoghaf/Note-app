import Card from "../../components/Card";
import * as Avatar from "@radix-ui/react-avatar";
import { useEffect, useState, useContext } from "react";
import * as Label from "@radix-ui/react-label";
import { Context } from "../../utils/MyContext";

function ArchivedNotes() {
  const { ArchivedNotes, token } = useContext(Context);

  const [notes, setNotes] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const response = await ArchivedNotes(token);
      setNotes(response.data);
    };

    getUser();
  }, []);

  return (
    <div className="flex items-center flex-col p-10 gap-5 ">
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
          <input className="bg-slate-300 rounded-lg h-4 p-3 " type="text" id="firstName" defaultValue={"tes"} />
          <Label.Root className="LabelRoot" htmlFor="firstName">
            Email
          </Label.Root>
          <input className="bg-slate-300 rounded-lg h-5 p-3 " type="text" id="firstName" defaultValue={"tes"} />
        </div>
      </div>
      <div className="w-1/2">
        <Card title={"tes"} id={"tes"} owner={"tes"} description={"tes"} date={"tes"} archived={true} />
      </div>
    </div>
  );
}

export default ArchivedNotes;
