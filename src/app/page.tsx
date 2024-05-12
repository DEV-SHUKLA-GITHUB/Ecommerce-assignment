import Link from "next/link";
import { api } from "~/trpc/server";
import { Inter } from "@next/font/google";
import SignupForm from "./signup/page";
import Header from "./_components/header";
import Verify from "./verify/page";
import Login from "./login/page";
import Main from "./home/page";
const inter=Inter({
  subsets:['latin'],
})
export default async function Home() {

  return (
    <div className={inter.className}>
      {/* <Header/> */}
      {/* <SignupForm /> */}
      {/* <Verify/> */}
      {/* <Login /> */}
      {/* <Main/> */}
      hello
    </div>
  );
}

