'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <motion.section
        className="w-full max-w-2xl mx-auto text-center px-6 py-12 rounded-lg shadow bg-white/90 mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center mb-6 space-y-3">
          <Image src="/logo.png" alt="ATSBoost Logo" width={100} height={100} priority />
          
          <p className="text-gray-500 text-sm font-medium">Upgrade your CV, beat the bots!</p>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
          Land Your Next Job Faster <span className="text-green-600">with AI + ATS Optimization</span>
        </h1>
        <p className="text-gray-600 mb-6">
          In South Africa’s 32.1% unemployment market, ATSBoost helps you beat Applicant Tracking Systems. Upload your CV for a free scan and get AI-driven feedback to land interviews.
        </p>
        <motion.div whileHover={{ scale: 1.04 }} className="inline-block">
          <Link
            href="/upload"
            className="bg-green-600 hover:bg-blue-900 text-white text-base rounded-lg px-6 py-3 font-semibold shadow transition"
          >
            Get Started Free
          </Link>
        </motion.div>
        <p className="mt-4 text-gray-400 text-xs">
          <span className="font-medium">You are closer than you think!</span>
        </p>
      </motion.section>

      {/* SERVICES/FEATURES [id=services for navbar anchor] */}
      <section id="services" className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full px-6">
        {[
          {
            title: 'CV Upload',
            desc: 'Upload your CV in PDF, DOCX, or TXT formats. Fast, secure, and seamless.',
            icon: '📄',
          },
          {
            title: 'ATS Scoring',
            desc: 'Get a 0–100 score on ATS compatibility, with subscores for keywords and formatting.',
            icon: '✅',
          },
          {
            title: 'Job Description Matching',
            desc: 'Paste a job posting to align your CV with specific keywords for better ATS results.',
            icon: '🔍',
          },
          {
            title: 'AI Recommendations',
            desc: 'Receive AI-powered suggestions to improve keywords, formatting, and content.',
            icon: '🤖',
          },
          {
            title: 'Detailed Reporting',
            desc: 'Download PDF reports with in-depth analysis and actionable improvements.',
            icon: '📊',
          },
        ].map((f, index) => (
          <motion.div
            key={f.title}
            className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <span className="text-green-600 text-3xl mb-2">{f.icon}</span>
            <span className="text-blue-900 text-xl mb-1 font-bold">{f.title}</span>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-6 text-gray-400 text-xs mt-auto">
        &copy; {new Date().getFullYear()} ATSBoost. All rights reserved.
        <span className="mx-2">|</span>
        <Link href="/terms" className="underline hover:text-green-600">Terms</Link>
        <span className="mx-2">|</span>
        <Link href="/privacy" className="underline hover:text-green-600">Privacy</Link>
      </footer>
    </main>
  );
}