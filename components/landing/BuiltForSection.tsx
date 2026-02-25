"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BuiltForSection() {
  const [active, setActive] = useState<string | null>("students");

  const items = [
    {
      id: "students",
      title: "For students",
      content:
        "Consolidate all your lecture materials, notes, and readings. When something doesn't click, the AI breaks it down and helps you practice.",
    },
    {
      id: "self",
      title: "For self-learners",
      content:
        "Structure your independent learning journey. Get summaries, quizzes, and explanations tailored to your pace.",
    },
    {
      id: "research",
      title: "For researchers",
      content:
        "Organize research papers, extract key insights, and collaborate efficiently across complex ideas.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 mb-8 md:mb-10 leading-tight">
            Built for how <br className="hidden sm:block" /> you learn
          </h2>

          <div className="space-y-5 md:space-y-6">
            {items.map((item) => (
              <div key={item.id} className="border-b font-serif pb-4">

                {/* HEADER */}
                <button
                  onClick={() =>
                    setActive(active === item.id ? null : item.id)
                  }
                  className="flex items-center justify-between w-full text-left py-2"
                >
                  <span className="text-base md:text-lg text-neutral-800">
                    {item.title}
                  </span>

                  <motion.span
                    animate={{ rotate: active === item.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl"
                  >
                    +
                  </motion.span>
                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {active === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base mt-3 text-neutral-500 max-w-md">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="mt-12 md:mt-0">
          <div className="p-2 md:p-4">

            <div className="mb-6 md:mb-8 flex items-center justify-center">
              <Image
                src="/builtimg.png"
                alt="Built illustration"
                width={400}
                height={400}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
              />
            </div>

            <p className="text-neutral-800 font-serif text-base md:text-lg leading-relaxed">
              "I almost don't use Google Drive anymore.
              SelfNote centralizes everything."
            </p>

            <p className="mt-3 text-sm text-neutral-500">
              Arizon, Graduate student
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}