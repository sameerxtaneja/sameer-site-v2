'use client';

import { motion } from 'framer-motion';
import ThemeToggle from '../components/ThemeToggle';
import Image from 'next/image';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 font-canela"
    >
      {/* Toggle Button */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Layout Container */}
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        {/* Left: Image + Links */}
        <div className="flex flex-col items-center space-y-2.5">
          <Image
            src="/sameer.jpg"
            alt="Sameer Taneja"
            width={230}
            height={230}
            className="rounded-lg shadow-lg object-cover"
          />

          {/* Social Links */}
          <div className="text-sm space-x-3 underline text-center">
            <a href="https://twtr.openinapp.co/z8ltg" target="_blank" className="hover:-translate-y-0.5 transition-transform duration-200">x.</a>
            <a href="https://insta.openinapp.co/308hv" target="_blank" className="hover:-translate-y-0.5 transition-transform duration-200">ig.</a>
            <a href="https://yt.openinapp.co/cy0lk" target="_blank" className="hover:-translate-y-0.5 transition-transform duration-200">yt.</a>
            <a href="https://linkedin.openinapp.co/0opyb" target="_blank" className="hover:-translate-y-0.5 transition-transform duration-200">in.</a>
            <a href="https://openinapp.link/sdqvx" target="_blank" className="hover:-translate-y-0.5 transition-transform duration-200">gh.</a>
          </div>

          {/* Subpage Links */}
          <div className="text-sm space-x-3 text-center">
            <a href="/life-story" className="underline hover:text-black dark:hover:text-white hover:-translate-y-0.5 transition-transform duration-200">life story.</a>
            <a href="/beliefs" className="underline hover:text-black dark:hover:text-white hover:-translate-y-0.5 transition-transform duration-200">beliefs.</a>
            <a href="/thoughts" className="underline hover:text-black dark:hover:text-white hover:-translate-y-0.5 transition-transform duration-200">thoughts.</a>
          </div>
        </div>

        {/* Right: Text */}
        <div className="text-lg space-y-2 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight">
            Sameer Taneja
          </h1>
          <p>entrepreneur ~ in the making.</p>
          
          <p>25 years into the game of life.</p>
          <p>a product of grit & consistency.</p>
          <p>love doing hard things ~ peaks, marathons, ice-baths, you name it...</p>
          <p>currently building an AI company ~ in stealth.</p>
          <p>simultaneously, documenting my journey to greatness.</p>
          <p>playing w the body & mind, obsessed with the science of being human..</p>
        </div>
      </div>
    </motion.main>
  );
}
