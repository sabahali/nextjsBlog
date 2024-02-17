import Image from "next/image";
import { Posts } from "./components/Posts";
export const revalidate = 86400 
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white text-slate-200">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Sabah Ali</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
