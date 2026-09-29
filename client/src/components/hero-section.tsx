import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TransitionLink } from "@/components/route-transition";
import profileImage from "@assets/IMG_2472_1760037765321.jpeg";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-background"
    >
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[120px] dark:bg-primary/20"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 40, 0], y: [0, 30, 0] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full bg-[var(--accent-purple)]/15 blur-[130px] dark:bg-[var(--accent-purple)]/20"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, -48, 0], y: [0, -36, 0] }
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[var(--accent-teal)]/10 blur-[110px]"
          animate={reduceMotion ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-14 items-center justify-items-center">
          {/* Image */}
          <motion.div
            className="flex justify-center items-center w-full"
            data-testid="hero-image-container"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <img
                    src={profileImage}
                    alt="Andres Barrios"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    data-testid="hero-profile-image"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="text-center w-full flex justify-center items-center">
            <div className="w-full max-w-2xl">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-foreground mb-6 tracking-tight"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              >
                Andres Barrios
              </motion.h1>
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground mb-4"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
              >
                Mechanical Engineering Student
              </motion.h2>
              <motion.p
                className="text-lg text-primary font-medium mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              >
                The University of Texas at Austin
              </motion.p>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              >
                Mechanical Engineer | Product Design Enthusiast
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
              >
                <TransitionLink
                  href="/design-portfolio/projects"
                  className="px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center text-primary-foreground transition-all shadow-lg hover:shadow-xl hover:scale-105 bg-primary hover:bg-primary/90"
                  data-testid="button-view-work"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </TransitionLink>
                <TransitionLink
                  href="/design-portfolio/contact"
                  className="px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-105 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
                  data-testid="button-get-in-touch"
                >
                  Get In Touch
                </TransitionLink>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
