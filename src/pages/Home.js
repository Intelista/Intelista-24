import React from 'react';
import { motion } from 'framer-motion';
import Timer from '../components/Timer';
import Footer from '../components/Footer';
import AudioPlayer from '../components/AudioPlayer';
import '../App.css'; // Import the CSS file

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <h1 className="blu text-5xl font-bold text-white text-center">Symposium Begins</h1>

      <div className="flex items-center translate-y-[-2.10rem] justify-center p-4">
        <img
          src="/images/Intelista.png" // Use a relative URL path
          alt="Intelista"
          className="w-full max-w-lg h-auto"
        />
      </div>

      <AudioPlayer src="/images/JackSparrow-Bgm.mp3" autoPlay loop /> {/* Use a relative URL path */}

      <div className="flex-grow">
        <div className="p-4 translate-y-[-5.10rem] sm:p-8 md:p-12 lg:p-16 mx-auto flex-grow">
          <div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded-lg">
            <video
              src="/images/homepage.mp4" // Use a relative URL path
              className="w-full h-auto object-cover bg-gray-500 dark:bg-gray-500"
              autoPlay
              loop
              muted
            ></video>

            <div className="p-6 pb-10 mt-6 space-y-6 mx-auto bg-gray-900 bg-opacity-70 dark:bg-gray-50 dark:bg-opacity-50 rounded-lg">
              <div className="space-y-2 text-center">
                <span className="block text-2xl sm:text-3xl font-semibold text-white dark:text-gray-900">
                  Time's Ticking - Are You Ready Buddys?
                </span>
              </div>
              <div className="timer text-gray-100 dark:text-gray-800 text-center">
                <Timer />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mt-8">
            {/* Animated button */}
            <a href="/event" className="animated-button1">
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Events
              </motion.button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMQcQkRg3zTcEdklQJ3LgZ2YQMCfKadP2LxDfQGU6qJedfCw/viewform" className="animated-button1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Register
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
