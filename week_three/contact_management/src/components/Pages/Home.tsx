import React, { useContext } from "react";
import { PersonContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { personList } = useContext(PersonContext);
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <ul className="space-y-4">
        {personList.map((person, index) => (
          <li
            key={index}
            className="bg-gray-700 px-6 py-4 rounded-lg text-gray-300 shadow-md"
          >
            <h3 className="text-lg font-medium mb-1">{person.fullName}</h3>
            <p className="text-gray-400 text-lg">
              <span className="mr-5 text-base font-semibold">
                {" "}
                Age: {person.age}{" "}
              </span>{" "}
              <span className="mr-5 text-base font-semibold">
                {" "}
                Department: {person.department}{" "}
              </span>
            </p>
            <div className=" m-2 flex justify-end">
              <Link
                // type="button"
                to={`/edit/${person.id}`}
                className=" block mr-10  bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded focus:outline-none focus:bg-blue-500"
              >
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
