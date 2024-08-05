import Register from "./Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Chat with experts.",
};

const page = () => {
  return <Register />;
};

export default page;
