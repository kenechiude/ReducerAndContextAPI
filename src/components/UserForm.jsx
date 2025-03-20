import { useState } from "react";
import { useData } from "../context/AppContext";

export default function UserForm() {
  const [formData, setFormData] = useState({ userName: "", nationalID: "" });
  const { dispatch, userName } = useData();

  function handleSubmitForm(e) {
    e.preventDefault();
    if (formData.userName && formData.nationalID) {
      dispatch({
        type: "updateUserData",
        payload: {
          userName: formData.userName,
          nationalID: formData.nationalID,
        },
      });
      setFormData({ userName: "", nationalID: "" });
    }
  }

  return (
    userName != "" || (
      <form onSubmit={handleSubmitForm} className="user-form">
        <span>Customer full name</span>
        <input
          type="text"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
        <span>National ID</span>
        <input
          type="number"
          value={formData.nationalID}
          onChange={(e) => {
            setFormData({ ...formData, nationalID: e.target.value });
          }}
        />
        <button>Create New Customer</button>
      </form>
    )
  );
}
