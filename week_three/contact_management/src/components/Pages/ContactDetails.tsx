import React, { useState, useContext } from "react";
import { Person } from "../model/model";
import { PersonContext } from "../../context/UserContext";

const ContactDetails: React.FC = () => {
  const [person, setPerson] = useState<Person>({});
  const { personList, setPersonList } = useContext(PersonContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setPersonList([
      ...personList,
      {
        id: Date.now(),
        fullName: person.fullName,
        department: person.department,
        age: person.age,
      },
    ]);
    setPerson({});
  };

  const handleDelete = (id: number) => {
    if (id) {
      const updatedList = personList.filter((person) => person.id !== id);
      setPersonList(updatedList);
    }
  };

  return (
    <div className="bg-gray-900 p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={person.fullName ?? ""}
            onChange={(event) =>
              setPerson({
                ...person,
                fullName: event.target.value,
              })
            }
            className="bg-gray-800 appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">
            Age
          </label>
          <input
            value={person.age ?? ""}
            type="number"
            onChange={(event) =>
              setPerson({
                ...person,
                age: parseInt(event.target.value) || undefined,
              })
            }
            className="bg-gray-800 appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">
            Department
          </label>
          <input
            value={person.department ?? ""}
            type="text"
            onChange={(event) =>
              setPerson({ ...person, department: event.target.value })
            }
            className="bg-gray-800 appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:border-gray-500"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium py-2 px-4 rounded focus:outline-none focus:bg-gray-700"
          >
            Submit
          </button>
          <div>
            <button
              type="button"
              className="bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded focus:outline-none focus:bg-red-500 mr-2"
              onClick={() => handleDelete(person.id || 0)}
            >
              Delete
            </button>
           
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactDetails;
