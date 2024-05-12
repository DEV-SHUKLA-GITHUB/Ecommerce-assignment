import Link from "next/link";
import { api } from "~/trpc/server";
import { Inter } from "@next/font/google";
import SignupForm from "./_components/Signup";
import Header from "./_components/header";
import Verify from "./_components/Verify";
import Login from "./_components/Login";
import Main from "./_components/Home";
const inter=Inter({
  subsets:['latin'],
})
export default async function Home() {

  return (
    <div className={inter.className}>
      <Header/>
      {/* <SignupForm /> */}
      {/* <Verify/> */}
      {/* <Login /> */}
      <Main/>
    </div>
  );
}

