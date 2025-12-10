'use client'
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';


export default function Navbar() {
  return (
    <nav className="p-4 bg-emerald-600 shadow-md fixed w-full z-10">
      <ul className="flex space-x-6 justify-center ">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <ThemeToggle />
      </ul>
    </nav>
  );
}
