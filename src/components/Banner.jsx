"use client";

import {
    Magnifier,
    MapPin,
    Briefcase
} from "@gravity-ui/icons";
import { motion } from "motion/react"


const Banner = () => {
    return (
        <div>

            <div className="relative z-10 mx-auto flex md:min-h-[70vh] lg:min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 text-center">

                {/* Top Badge */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
                        <Briefcase className="h-4 w-4 text-orange-400" />
                        <span className="font-semibold text-white">
                            50,000+
                        </span>
                        <span className="text-gray-400">
                            NEW JOBS THIS MONTH
                        </span>
                    </div>
                </motion.div>

                {/* Heading */}
                <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
                    Find Your Dream Job Today
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-3xl text-base text-gray-400 sm:text-lg md:text-xl">
                    HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
                </p>

                {/* Search Box */}
                <div className="mt-12 w-full max-w-4xl">
                    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:flex-row">

                        {/* Job Input */}
                        <div className="flex flex-1 items-center gap-3 px-5 py-5">
                            <Magnifier className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Job title, skill or company"
                                className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden w-px bg-white/10 md:block" />

                        {/* Location Input */}
                        <div className="flex flex-1 items-center gap-3 px-5 py-5">
                            <MapPin className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location or Remote"
                                className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                            />
                        </div>

                        {/* Search Button */}
                        <button className="m-2 flex items-center justify-center rounded-xl bg-violet-600 px-6 py-4 text-white transition-all duration-300 hover:bg-violet-500">
                            <Magnifier className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Trending Tags */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <span className="text-sm text-gray-400">
                        Trending Position
                    </span>

                    {[
                        "Product Designer",
                        "AI Engineer",
                        "DevOps Engineer",
                    ].map((tag) => (
                        <button
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;