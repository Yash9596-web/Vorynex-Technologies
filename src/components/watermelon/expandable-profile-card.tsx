"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface ExpandableCardProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
  className?: string;
}

export default function ExpandableProfileCard({
  imageSrc = "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
  title = "Jane Doe",
  subtitle = "Senior UX Designer",
  content,
  className = "",
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const layoutId = `expandable-profile-card-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <motion.div
        layoutId={layoutId}
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer relative h-64 w-full max-w-sm overflow-hidden rounded-xl border border-white/10 group shadow-sm bg-surface transition-colors hover:border-accent/40 ${className}`}
        whileHover="hover"
      >
        <motion.img
          layoutId={`image-${layoutId}`}
          src={imageSrc}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          variants={{
            hover: { scale: 1.05 },
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

        <div className="absolute bottom-0 left-0 p-5 sm:p-6 w-full translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
          <motion.p
            layoutId={`subtitle-${layoutId}`}
            className="text-accent text-xs font-mono font-medium tracking-wide uppercase mb-1.5"
          >
            {subtitle}
          </motion.p>
          <motion.h3
            layoutId={`title-${layoutId}`}
            className="text-lg sm:text-xl font-semibold tracking-tight text-text-primary"
          >
            {title}
          </motion.h3>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              layoutId={layoutId}
              className="relative w-full max-w-4xl max-h-[85vh] bg-surface-raised rounded-2xl overflow-hidden border border-white/10 z-10 flex flex-col md:flex-row shadow-2xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center bg-obsidian/75 hover:bg-surface-subtle rounded-full border border-white/15 text-text-primary transition-colors backdrop-blur-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-auto md:w-1/2">
                <motion.img
                  layoutId={`image-${layoutId}`}
                  src={imageSrc}
                  alt={title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent md:hidden" />
              </div>

              <div className="p-6 sm:p-8 w-full md:w-1/2 flex flex-col h-full overflow-y-auto">
                <motion.p
                  layoutId={`subtitle-${layoutId}`}
                  className="text-accent text-xs font-mono font-medium tracking-wide uppercase mb-3"
                >
                  {subtitle}
                </motion.p>
                <motion.h3
                  layoutId={`title-${layoutId}`}
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-6 pb-4 border-b border-white/10"
                >
                  {title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: 0.2 }}
                  className="text-text-secondary text-sm leading-relaxed grow"
                >
                  {content || (
                    <div className="flex flex-col gap-6">
                      <p>
                        A passionate specialist with over 8 years of experience
                        building resilient digital systems and high-throughput
                        architectures.
                      </p>

                      <div>
                        <h4 className="text-text-primary font-semibold tracking-tight mb-2">
                          Background
                        </h4>
                        <p className="text-text-muted">
                          Previously led engineering and systems design teams,
                          focusing on scalability, distributed infrastructure, and
                          intuitive operator experiences.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-text-primary font-semibold tracking-tight mb-2">
                          Current Focus
                        </h4>
                        <p className="text-text-muted">
                          Currently exploring enterprise autonomous workflows and
                          high-performance developer platforms.
                        </p>
                      </div>

                      <button
                        onClick={() => setIsOpen(false)}
                        className="mt-4 px-5 py-2.5 bg-accent hover:bg-accent-hover text-obsidian font-medium rounded-lg transition-colors self-start shadow-sm"
                      >
                        Connect with {title.split(" ")[0]}
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
