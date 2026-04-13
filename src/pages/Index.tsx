import { motion } from "framer-motion";
import comingSoonBg from "@/assets/coming-soon-bg.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={comingSoonBg}
          alt="Blanconite artistic background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/50" />
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
          className="font-body text-primary-foreground/60 text-base md:text-lg max-w-md mx-auto leading-relaxed uppercase tracking-[0.15em]"
        >
          Coming Soon
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 font-body text-primary-foreground/50 text-sm md:text-base max-w-sm mx-auto leading-relaxed"
        >
          We're crafting something special. Our premium Jesmonite materials will be available soon. Stay tuned!
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
