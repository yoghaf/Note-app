import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { Context } from "../utils/MyContext";
import { useContext } from "react";

import ToastNotif from "../components/Toast";
function Register() {
  // showpassword
  const [showPassword, setShowPassword] = useState("password");
  const handleShowPassword = (e) => {
    e.preventDefault();
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };
  // context

  const { Register } = useContext(Context);
  const [FieldValue, setFieldValue] = useState({ name: "", email: "", password: "" });
  const [short, setShort] = useState(true);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    setFieldValue({ ...FieldValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FieldValue.password.length > 0 && FieldValue.password.length < 6) {
      setShort(false);
    } else if (FieldValue.password.length >= 6) {
      setShort(true);
      console.log(FieldValue);
      const responseData = await Register(FieldValue);
      console.log(responseData);
      setStatus(`Register ${responseData.status}`);
      setMessage(responseData.message);
    }
  };

  return (
    <div className="flex justify-center p-10 ">
      <Form.Root className="FormRoot" onSubmit={handleSubmit}>
        <Form.Field className="FormField" name="name">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <Form.Label className="FormLabel">Name</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="bg-slate-300 rounded-lg h-5 p-3 " type="text" required onChange={handleChange} />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="email">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <Form.Label className="FormLabel">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="bg-slate-300 rounded-lg h-5 p-3 " type="email" required onChange={handleChange} />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="password">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }} className="gap-2">
            <Form.Label className="FormLabel">Password</Form.Label>
            {!short ? <Form.Message className="FormMessage">must be at least 6 characters</Form.Message> : null}
          </div>
          <Form.Control asChild>
            <input className="bg-slate-300 rounded-lg h-5 p-3 " type={showPassword} required onChange={handleChange} />
          </Form.Control>
          <button className="text-black font-medium cursor-pointer hover:text-blue-500" onClick={handleShowPassword}>
            Show Password
          </button>
        </Form.Field>
        <Form.Submit asChild>
          <ToastNotif text="mamat" open={open} setOpen={setOpen} success={status} message={message}>
            <button onClick={() => setOpen(true)} className="w-full bg-black rounded-lg h-10 text-white flex items-center justify-center hover:bg-blue-500" type="submit">
              Register
            </button>
          </ToastNotif>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export default Register;
