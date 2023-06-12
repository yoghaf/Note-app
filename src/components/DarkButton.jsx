import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useContext, useEffect } from "react";
import { Context } from "../utils/MyContext";

function DarkButton() {
  const { DarkMode, isDark, setIsDark } = useContext(Context);

  useEffect(() => {
    const dark = localStorage.getItem("isDark");
    if (dark !== null) {
      setIsDark(JSON.parse(dark));
      if (JSON.parse(dark)) {
        const body = document.querySelector("body");
        body.classList.add("DarkMode");
      }
    }
  }, []);

  const handleDarkMode = () => {
    const newIsDark = !isDark;
    localStorage.setItem("isDark", JSON.stringify(newIsDark));
    setIsDark(newIsDark);
    DarkMode();
  };

  return (
    <div className={`border-2 rounded-full ${isDark ? "border-white" : "border-black"}`}>
      <button onClick={handleDarkMode} className={`w-20 flex p-2 rounded-full text-2xl shadow-md cursor-pointer hover:shadow-lg ${isDark ? "justify-end text-white bg-black" : "justify-start"}`}>
        {isDark ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
}

export default DarkButton;
