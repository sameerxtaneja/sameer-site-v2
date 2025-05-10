'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex min-h-screen flex-col items-center justify-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4"
      >
        <img 
  src="/Sam personal DP.PNG" 
  alt="Sameer Taneja" 
  className="w-32 h-32 rounded-full mx-auto mb-6"
/>
        Sameer Taneja (Sam)
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 text-center max-w-xl"
      >
        showing up, building things, not settling.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="mt-6 flex gap-4 flex-wrap justify-center"
      >
        {[
          { name: 'Instagram', link: 'https://insta.openinapp.co/308hv' },
          { name: 'X', link: 'https://twtr.openinapp.co/z8ltg' },
          { name: 'LinkedIn', link: 'https://linkedin.openinapp.co/0opyb' },
          { name: 'YouTube', link: 'https://yt.openinapp.co/cy0lk' },
          { name: 'GitHub', link: 'https://openinapp.link/sdqvx' },
        ].map(({ name, link }) => (
          <motion.a
            key={name}
            href={link}
            target="_blank"
            className="px-4 py-2 border rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {name}
          </motion.a>
        ))}
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 max-w-2xl text-center"
      >
        <h2 className="text-2xl font-semibold mb-2">What I’m doing now</h2>
        <p className="text-gray-700 text-lg">
          Building <strong>SuperTeacher</strong> — India’s first AI grading tool for schools and tutors.
          <br />Living in Gurgaon, working out of my apartment, talking to teachers every day, and shipping product weekly.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 max-w-2xl text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Things I’ve Built</h2>
        <div className="space-y-8">
          {[
            {
              title: 'SuperTeacher',
              desc: `India’s first AI grading tool for teachers. Upload scanned answer sheets,
              get instant grading based on CBSE rubrics.`,
              role: 'Founder · 2025',
            },
            {
              title: 'Ripen',
              desc: `Community-led feedback platform for startups. YC W24 interview stage.`,
              role: 'Co-founder · 2023',
            },
            {
              title: 'Longevity Club',
              desc: `A private community for health-obsessed founders to track bloodwork and performance.`,
              role: 'Founder · 2023',
            },
          ].map(({ title, desc, role }) => (
            <motion.div
              key={title}
              className="border rounded p-4 text-left shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-700">
                {desc} <br />
                <span className="text-sm text-gray-500">{role}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
