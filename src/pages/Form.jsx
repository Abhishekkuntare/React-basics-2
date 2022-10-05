import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="enter name" {...register("name")} />
        <input type="text" placeholder="email" {...register("email")} />
        <input type="number" placeholder="age" {...register("age")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <input
          type="password"
          placeholder="confirm password"
          {...register("conform")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
