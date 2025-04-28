'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Hero */}
      <motion.section
        className="w-full max-w-2xl text-center px-6 py-12 rounded-lg shadow-md bg-white/90"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center mb-6 space-y-3">
          {/* Logo */}
          <Image
            src="/logo.png"           // Replace with your logo filename in public folder
            alt="ATSBoost Logo"
            width={120}
            height={120}
            priority
          />
          
          <p className="text-gray-500 text-sm font-medium">Upgrade your resume, beat the bots!</p>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Land Your Next Job Faster <span className="text-blue-600">with AI + ATS Optimization</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Upload your resume for a free ATS scan. Get actionable feedback, AI rewrites, and proven recommendations to help you stand out.
        </p>
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="inline-block"
        >
          <Link
            href="/upload"
            className="bg-blue-600 hover:bg-blue-700 text-white text-base rounded-lg px-6 py-3 font-semibold shadow transition-all"
          >
            Get Started Free
          </Link>
        </motion.div>
        <p className="mt-4 text-gray-400 text-xs">
          <span className="font-medium">You’re closer than you think!</span>
        </p>
      </motion.section>

      {/* Features */}
      <section className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-6">
        {[
          { title: 'Upload Resume', desc: 'PDF, DOCX, or TXT. Fast, secure, no sign-up needed.' },
          { title: 'ATS Score + AI Tips', desc: 'See your match score and instantly actionable improvements.' },
          { title: 'Boost Your Odds', desc: 'Download reports, get rewrites, and get noticed by employers.' },
        ].map(f => (
          <motion.div
            key={f.title}
            className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-blue-600 text-xl mb-1 font-bold">{f.title}</span>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} ATSBoost. All rights reserved.
        <span className="mx-2">|</span>
        <Link href="/privacy" className="underline hover:text-blue-600">Privacy</Link>
      </footer>
    </main>
  );
}