import propTypes from "prop-types";
function Card({ title, owner, description, date, archived }) {
  return (
    <div className="border-2 rounded-lg w-full  shadow-md hover:shadow-lg">
      <div className="flex justify-between items-center p-5">
        <div className="flex flex-col gap-1 ">
          <div className="font-bold text-2xl">{title}</div>
          <div className="font-normal text-sm text-slate-400  ">{owner}</div>
        </div>
        <div className="font-bold text-sm">{date}</div>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className={`${description.lengt > 20 ? "truncate" : ""}`}>{description}</div>
        <div className="flex gap-2">
          <button className={`font-bold py-2 px-4  rounded-full ${archived ? "bg-blue-500 hover:bg-blue-700 text-white  " : "bg-slate-400  text-black "}`}>Archived</button>
          <button className="bg-red-500 rounded-lg hover:bg-red-700 text-white font-bold py-2 px-4 ">Delete</button>
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
};

export default Card;
