import Link from "next/link";
import { Button } from "./ui/button";

export function AppHeader() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent max-w-none">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="leading-7 font-medium text-zinc-800">
          <p>Rizky Ramadhan</p>
        </Link>

        <nav className="flex items-center gap-x-6 text-sm/6 text-zinc-800">
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="shrink-0">
          <Button>Coming Soon</Button>
        </div>
      </div>
    </header>
  );
}
