import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="mb-4 text-5xl font-mono">Learning Next</h1>
      <Link className="border-1 p-3 rounded-xl mb-2 cursor-pointer bg-teal-300 text-black font-semibold" href="/signup">Let's Signup</Link>
      <Link className="border-1 p-3 rounded-xl mb-2 cursor-pointer bg-green-400 text-black font-semibold" href="/signin">Let's Signin</Link>
    </div>
  );
}
