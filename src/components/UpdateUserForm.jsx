import { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import Success from "./Success";
import Bug from "./Bug";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateUserForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("Don't have form data");
    console.log(formData);
  };

  if (Object.keys(formData).length > 0)
    return <Success message={"Data added"}></Success>;

  //   if (Object.keys(formData).length > 0) return <Bug message={"Error"}></Bug>;

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4">
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="firstname"
          placeholder="First Name"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          onChange={setFormData}
          placeholder="Last Name"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          onChange={setFormData}
          placeholder="Email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div>
        <input
          type="text"
          name="number"
          onChange={setFormData}
          placeholder="Salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div>
        <input
          type="date"
          name="date"
          onChange={setFormData}
          className="border px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            name="status"
            onChange={setFormData}
            value="Active"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-500">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="status"
            onChange={setFormData}
            value="Inactive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-500">
            Inactive
          </label>
        </div>
      </div>
      <button
        className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500"
        onClick={handleSubmit}
      >
        Update
        <span>
          <BiBrush size={23} />
        </span>
      </button>
    </form>
  );
};

export default UpdateUserForm;
