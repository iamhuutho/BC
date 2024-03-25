import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border- z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex">
        <Link href="/login">Log in</Link>
        <Link href="/register">Register</Link>
      </div>
    </main>
  );
}
