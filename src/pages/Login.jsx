import * as Form from "@radix-ui/react-form";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState("password");
  const handleShowPassword = (e) => {
    e.preventDefault();
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  return (
    <div className="flex justify-center p-10 ">
      <Form.Root className="FormRoot">
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
            <input className="Input" type="email" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="password">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <Form.Label className="FormLabel">Password</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type={showPassword} required />
          </Form.Control>
          <button className="text-black font-medium cursor-pointer hover:text-blue-500" onClick={handleShowPassword}>
            Show Password
          </button>
        </Form.Field>
        <Form.Submit asChild>
          <button className="w-full bg-black rounded-lg h-10 text-white flex items-center justify-center hover:bg-blue-500" type="submit">
            Login
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export default Login;
