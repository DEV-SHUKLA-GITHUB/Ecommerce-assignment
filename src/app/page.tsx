import Link from "next/link";
import { api } from "~/trpc/server";
import { Inter } from "@next/font/google";
const inter=Inter({
  subsets:['latin'],
})
export default async function Home() {

  return (
    <div className={inter.className}>
    </div>
  );
}

