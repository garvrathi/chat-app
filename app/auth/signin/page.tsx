import Link from "next/link";

const page = () => {
  return (
    <div className="flex">
      <div className="bg-[url('/images/bg2.jpg')] bg-no-repeat bg-cover h-screen hidden lg:block lg:w-[50%] xl:w-[65%]"></div>
      <div className="flex-1 flex h-screen justify-center items-center px-4">
        <form className="w-[90%]">
          <h1 className="capitalize text-xl font-semibold text-white mb-8">
            Sign In
          </h1>
          <div className="mt-6">
            <input
              type="text"
              name="email"
              placeholder="email..."
              className="w-full h-14 rounded-lg outline-none bg-[#363738] text-white px-4"
            />
          </div>
          <div className="mt-6">
            <input
              type="password"
              name="password"
              placeholder="password..."
              className="w-full h-14 rounded-lg outline-none bg-[#363738] text-white px-4"
            />
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="SignIn"
              className="w-full block cursor-pointer bg-[#0071db] text-white text-lg font-semibold capitalize rounded-lg h-14 px-4"
            />
          </div>
          <Link
            href="/auth/signup"
            className="inline-block mt-4 text-zinc-400 font-semibold hover:text-white focus:text-white"
          >
            Don't have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default page;
