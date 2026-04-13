import { useState } from "react";
import { motion } from "framer-motion";
import comingSoonBg from "@/assets/coming-soon-bg.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={comingSoonBg}
          alt="Blanconite jesmonite products"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-elegant text-primary-foreground/70 tracking-[0.35em] uppercase text-sm mb-6"
        >
          ✦ Premium Jesmonite Materials ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl text-primary-foreground mb-4 leading-tight"
        >
          Blanconite
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-elegant italic text-2xl md:text-3xl text-primary-foreground/80 mb-8"
        >
          Something beautiful is on its way
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-px bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-primary-foreground/60 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed"
        >
          We're crafting a new experience for artisans, designers, and creative minds. Be the first to know when we launch.
        </motion.p>

        {/* Email form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:border-primary backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-primary/90 transition-colors"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-elegant text-xl text-primary-foreground/80 italic"
            >
              Thank you! We'll be in touch soon. ✦
            </motion.p>
          )}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          {["Instagram", "Pinterest", "Facebook"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-body text-xs text-primary-foreground/40 uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              {social}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
