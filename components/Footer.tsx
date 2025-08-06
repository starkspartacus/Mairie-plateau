"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  FileText,
  Users,
  Hammer,
  MessageSquare,
  Award,
  Star,
  Globe,
  Heart,
  Target,
  Calendar,
  BookOpen,
  Camera,
  Briefcase,
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const quickLinks = [
    { title: "ÉTAT CIVIL", page: "etat-civil", icon: FileText },
    { title: "TRAVAUX", page: "travaux", icon: Hammer },
    { title: "PROJETS", page: "projets", icon: Building },
    { title: "MUNICIPALITÉ", page: "municipalite", icon: Users },
    { title: "CONSEIL", page: "conseil", icon: MessageSquare },
    { title: "ACTUALITÉS", page: "actualites", icon: Calendar },
  ];

  const services = [
    {
      title: "Services administratifs",
      description: "Actes de naissance, mariage, décès",
    },
    {
      title: "Développement local",
      description: "Projets d'infrastructure et d'aménagement",
    },
    {
      title: "Socio-culturel",
      description: "Activités culturelles et sociales",
    },
    { title: "Sécurité", description: "Maintien de l'ordre et de la sécurité" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-600",
    },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-600" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-ivory-orange via-white to-ivory-green text-white py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-ivory-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-ivory-gold/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main info */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4 mb-8">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-ivory-orange to-ivory-green rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Building className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold">MAIRIE DU PLATEAU</h3>
                <p className="text-white/80">ABIDJAN • DISTRICT D'ABIDJAN</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              Commune dynamique au cœur d'Abidjan, centre des activités
              administratives et commerciales. Nous œuvrons chaque jour pour le
              développement et le bien-être de nos concitoyens.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/90">
                <MapPin className="w-5 h-5 text-ivory-gold" />
                <span>Avenue Chardy, Abidjan Plateau</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Phone className="w-5 h-5 text-ivory-gold" />
                <span>+225 27 22 49 53 00</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Mail className="w-5 h-5 text-ivory-gold" />
                <span>contact@mairieplateau.ci</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Clock className="w-5 h-5 text-ivory-gold" />
                <span>Lun-Ven: 8h-17h</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">
              LIENS RAPIDES
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.title}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
                  onClick={() => onNavigate(link.page)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4 text-ivory-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{link.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">
              NOS SERVICES
            </h4>
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h5 className="font-medium text-white mb-2 group-hover:text-ivory-gold transition-colors">
                    {service.title}
                  </h5>
                  <p className="text-sm text-white/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media & Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/20"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-white/80 text-sm">Suivez-nous :</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © 2024 Mairie du Plateau. Tous droits réservés.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Conçu avec ❤️ pour la Côte d'Ivoire
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-ivory-orange to-ivory-green rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
