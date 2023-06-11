import * as Form from "@radix-ui/react-form";
import { useState, useContext } from "react";
import { Context } from "../../utils/MyContext";
import { useNavigate } from "react-router-dom";

function AddNote() {
  const [Fields, setFields] = useState({
    title: "",
    body: "",
  });
  const { token, AddNotes } = useContext(Context);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFields({ ...Fields, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await AddNotes(token, Fields);

    if (responseData.status === "success") {
      navigate("/dashboard/notes");
    }
  };

  return (
    <div className="flex justify-center p-10 ">
      <Form.Root className="FormRoot" onSubmit={handleSubmit}>
        <Form.Field className="FormField" name="title">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <Form.Label className="FormLabel">Title</Form.Label>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please add a title
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="bg-slate-300 rounded-lg h-5 p-3 " type="text" required onChange={handleChange} />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="body">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <Form.Label className="FormLabel">Description</Form.Label>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please add a description
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="bg-slate-300 rounded-lg h-20 p-3" type="text" required onChange={handleChange} />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="w-full bg-black rounded-lg h-10 text-white flex items-center justify-center hover:bg-blue-500" type="submit">
            Create Note
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export default AddNote;
