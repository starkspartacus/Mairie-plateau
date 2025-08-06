"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building,
  Users,
  Award,
  Star,
  ArrowRight,
  Play,
  ChevronDown,
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [currentParticle, setCurrentParticle] = useState(0);

  // Images
  const PLATEAU_NIGHT =
    "https://images.unsplash.com/photo-1637768315794-c8345fc33a9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MHx8fGJsdWV8MTc1NDQ4NjQ4MHww&ixlib=rb-4.1.0&q=85";
  const LOGO_BASE64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

  // Stats data
  const stats = [
    {
      icon: Building,
      value: "150+",
      label: "Projets réalisés",
      color: "text-ivory-orange",
    },
    {
      icon: Users,
      value: "500K+",
      label: "Citoyens servis",
      color: "text-ivory-green",
    },
    {
      icon: Award,
      value: "25+",
      label: "Années d'expérience",
      color: "text-ivory-gold",
    },
    {
      icon: Star,
      value: "95%",
      label: "Satisfaction",
      color: "text-white",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentParticle((prev) => (prev + 1) % 20);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-ivory-orange via-white to-ivory-green text-white overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${PLATEAU_NIGHT}')`,
          y,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ivory-orange/80 via-white/70 to-ivory-green/80"></div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative container mx-auto px-4 py-24 lg:py-32"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              {/* Logo animation */}
              <motion.div
                className="mb-8"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                  <img
                    src={LOGO_BASE64}
                    alt="Logo Commune du Plateau"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Main title */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-white to-ivory-gold bg-clip-text text-transparent">
                  BIENVENUE AU PLATEAU
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl mb-8 text-white/90"
                variants={itemVariants}
              >
                Commune dynamique au cœur d'Abidjan
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-lg mb-8 text-white/80 leading-relaxed"
                variants={itemVariants}
              >
                Découvrez les services municipaux, les actualités et les projets
                de développement de la commune du Plateau, centre économique et
                administratif d'Abidjan.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                variants={itemVariants}
              >
                <motion.button
                  className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-ivory-orange to-ivory-orange-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => onNavigate("services")}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Nos Services</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  className="flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 group"
                  onClick={() => onNavigate("actualites")}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="mr-2 w-5 h-5" />
                  <span>Voir les Actualités</span>
                </motion.button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-3 text-white/90">
                  <MapPin className="w-5 h-5 text-ivory-gold" />
                  <span className="text-sm">Avenue Chardy, Abidjan</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Phone className="w-5 h-5 text-ivory-gold" />
                  <span className="text-sm">+225 27 22 49 53 00</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Mail className="w-5 h-5 text-ivory-gold" />
                  <span className="text-sm">contact@mairieplateau.ci</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right content - Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-ivory-orange to-ivory-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.button
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-sm mb-2">Découvrir</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
