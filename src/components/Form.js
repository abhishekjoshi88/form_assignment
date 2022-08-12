import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [userInfo, setUserInfo] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    setUserInfo(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-between">
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          {errors.firstName?.type === "required" && "First name is required"}
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="last_name">LastName</label>
          <input
            id="last_name"
            {...register("lastName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.lastName?.type === "required" && "Last name is required"}
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            {...register("age", { required: true, min: 18, max: 99 })}
          />
          {errors.age?.type === "required" &&
            "Age is required min: 18, max: 99"}
        </div>
        <input type="submit" />
      </form>
      <div>{JSON.stringify(userInfo, undefined, 2)}</div>
    </div>
  );
};

export default Form;
