import React, { useState, useContext} from "react";
import { Person } from "../model/model";
import { PersonContext } from "../../context/UserContext";

const AddContact = () => {
  const [person, setPerson] = useState<Person>({
    fullName: "",
    age: undefined,
    department: "",
  });
  const { personList, setPersonList } = useContext(PersonContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (person.fullName && person.department && person.age) {
      const newPerson: Person = {
        id: Date.now(),
        fullName: person.fullName,
        department: person.department,
        age: person.age,
      };

      setPersonList([...personList, newPerson]);
      setPerson({ fullName: "", age: NaN, department: "" });
    }
    console.log(person);
  };

  // useEffect(() => {
  //   setPerson({ fullName: "", age: NaN, department: "" });
  // }, [personList]);

  return (
    <div className="bg-gray-900 p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            data-testid="fullName"
            type="text"
            required
            value={person?.fullName}
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
            value={person?.age !== null ? person?.age : ""}
            type="number"
            required
            onChange={(event) => {
              setPerson({
                ...person,
                age:
                  event.target.value !== null
                    ? parseInt(event.target.value)
                    : NaN,
              });
            }}
            className="bg-gray-800 appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">
            Department
          </label>
          <input
            data-testid="department"
            required
            value={person?.department}
            type="text"
            onChange={(event) =>
              setPerson({ ...person, department: event.target.value })
            }
            className="bg-gray-800 appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:border-gray-500"
          />
        </div>
        <button
          data-testid="submit-button"
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium py-2 px-4 rounded focus:outline-none focus:bg-gray-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
