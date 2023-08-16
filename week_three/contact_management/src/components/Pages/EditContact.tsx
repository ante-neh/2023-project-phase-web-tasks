import React, { useState, useEffect, useContext } from "react";
import { Person } from "../model/model";
import { PersonContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

const EditContact: React.FC = () => {
  const params = useParams();
  const id = Number(params.id); // Convert id to a number
  const navigate = useNavigate();
  // const id = useParams()

  const [person, setPerson] = useState<Person>({});
  const { personList, setPersonList } = useContext(PersonContext);

  useEffect(() => {
    if (id) {
      const p = personList.find((person) => person.id === id);
      if (p) {
        setPerson(p);
        console.log(p);
      }
    }
  }, [id]);

  const handleUpdate = (id: number) => {
    const updatedPersonList = personList.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return {
        id: person.id,
        fullName: person.fullName,
        age: person.age,
        department: person.department,
      };
      // }
    });
    setPersonList(updatedPersonList);
    navigate("/");
    setPerson({});
  };

  const handleDelete = (id: number) => {
    if (id) {
      const updatedList = personList.filter((person) => person.id !== id);
      setPersonList(updatedList);
      navigate("/");
    }
  };

  return (
    <div className="bg-gray-900 p-4">
      <form>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">
            Full Name
          </label>
          <input
          data-testid="fullName"
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
          data-testid="age"
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
            data-testid="department"
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
          data-testid="update-button"
            type="button"
            onClick={() => handleUpdate(person.id || 0)}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-600 font-medium py-2 px-4 rounded focus:outline-none focus:bg-gray-700"
          >
            Update
          </button>
          <div>
            <button
              data-testid="delete-button"
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

export default EditContact;
