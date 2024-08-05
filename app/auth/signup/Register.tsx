"use client";
import { useRegisterMutation } from "@/store/services/authService";
import { register } from "module";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChange = (e:ChangeEvent<HTMLInputElement) => {
    setState({...state,[e.target.name]:e.target.value})

  }
  const [register, {isLoading}] = useRegisterMutation()
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    register(state).unwrap().then(data = > {
        console.log(data)
      }).catch(error => {
        console.log(error)
    })
  }
  return (
    <div className="flex">
      <div className="bg-[url('/images/bg2.jpg')] bg-no-repeat bg-cover h-screen hidden lg:block lg:w-[50%] xl:w-[65%]"></div>
      <div className="flex-1 flex h-screen justify-center items-center px-4">
        <form className="w-[90%]" onSubmit={onsubmit}>
          <h1 className="capitalize text-xl font-semibold text-white mb-8">
            new user? Signup Here!
          </h1>
          <div>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={onChange}
              placeholder="name..."
              className="w-full h-14 rounded-lg outline-none bg-[#363738] text-white px-4"
            />
          </div>
          <div className="mt-6">
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={onChange}
              placeholder="email..."
              className="w-full h-14 rounded-lg outline-none bg-[#363738] text-white px-4"
            />
          </div>
          <div className="mt-6">
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={onChange}
              placeholder="create password..."
              className="w-full h-14 rounded-lg outline-none bg-[#363738] text-white px-4"
            />
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="signup"
              className="w-full block cursor-pointer bg-[#0071db] text-white text-lg font-semibold capitalize rounded-lg h-14 px-4"
            />
          </div>
          <Link
            href="/auth/signin"
            className="inline-block mt-4 text-zinc-400 font-semibold hover:text-white focus:text-white"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
