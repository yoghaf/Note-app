import * as Form from "@radix-ui/react-form";
import { useState, useContext } from "react";
import { Context } from "../utils/MyContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
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

  const { Login, isDark } = useContext(Context);
  const [FieldValue, setFieldValue] = useState({ email: "", password: "" });
  const [short, setShort] = useState(true);

  const handleChange = (e) => {
    setFieldValue({ ...FieldValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FieldValue.password.length > 0 && FieldValue.password.length < 6) {
      setShort(false);
    } else if (FieldValue.password.length >= 6) {
      setShort(true);
      const responseData = await Login(FieldValue);
      localStorage.setItem("token", responseData.data.accessToken);
      console.log(responseData);
      if (responseData.status === "success") {
        navigate("/");
        window.location.reload();
      }
    }
  };

  return (
    <div className="flex justify-center p-5 ">
      <Form.Root className="FormRoot" onSubmit={handleSubmit}>
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
            <input className={` rounded-lg h-5 p-3 ${isDark ? "text-black bg-yellow-200" : "bg-slate-300"}`} required onChange={handleChange} />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="password">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <Form.Label className="FormLabel">Password</Form.Label>
            {!short ? <Form.Message className="FormMessage">must be at least 6 characters</Form.Message> : null}
          </div>
          <Form.Control asChild>
            <input className={` rounded-lg h-5 p-3 ${isDark ? "text-black bg-yellow-200" : "bg-slate-300"}`} type={showPassword} required onChange={handleChange} />
          </Form.Control>
          <button className={` font-medium cursor-pointer${isDark ? "text-white hover:text-yellow-300" : "hover:text-blue-500 text-black"} `} onClick={handleShowPassword}>
            Show Password
          </button>
        </Form.Field>
        <Form.Submit asChild>
          <button
            className={`w-full rounded-lg h-10 flex font-medium items-center justify-center " type="submit
          ${isDark ? " bg-white text-black hover:bg-yellow-300" : " bg-black text-white hover:bg-blue-500"}`}
          >
            Login
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export default Login;
