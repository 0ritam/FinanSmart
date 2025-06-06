import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="relative mx-auto  flex max-w-7xl flex-col items-center justify-center">
        <Navbar />
        <div className="absolute inset-y-0 left-0 h-full w-px bg-white/20">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-white/20">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-white/20">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>

        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
            {("Track Your Finances with Ease".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            )))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-white/90"
          >
            Take control of your financial future with our powerful expense tracking and budgeting tools.
            Start your journey to financial freedom today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/dashboard">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-60 transform rounded-lg bg-white px-6 py-2 font-medium text-blue-600 transition-all duration-300 hover:bg-blue-50"
              >
                Get Started
              </motion.button>
            </Link>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="relative z-10 mt-20 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
          >
            <div className="w-full overflow-hidden rounded-xl border border-white/30">
              <img
                src="/hero.png"
                alt="Finance Dashboard Preview"
                className="aspect-[16/9] h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-white/20 px-4 py-4">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-white to-blue-300" />
        <h1 className="text-base font-bold text-white md:text-2xl">FinanSmart</h1>
      </div>
    </nav>
  );
};


export default LandingPage;
