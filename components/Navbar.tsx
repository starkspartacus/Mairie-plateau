"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Building,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  User,
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
import { NavigationItem } from "@/types";

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const navigationMenu: NavigationItem[] = [
    {
      title: "ACCUEIL",
      page: "accueil",
      items: [
        { title: "PRÉSENTATION", page: "presentation" },
        { title: "HISTORIQUE", page: "historique" },
        { title: "LE PLATEAU", page: "le-plateau" },
      ],
    },
    {
      title: "ACTUALITÉ",
      page: "actualites",
      items: [],
    },
    {
      title: "LA MAIRIE",
      items: [
        { title: "LE MAIRE", page: "le-maire" },
        { title: "LA MUNICIPALITÉ", page: "municipalite" },
        { title: "LE CONSEIL MUNICIPAL", page: "conseil-municipal" },
        { title: "LES DIRECTIONS", page: "directions" },
        {
          title: "LE CONSEIL CITOYENS ET CONSULTATIF",
          page: "conseil-citoyen",
        },
        { title: "LE COMITÉ DÉVELOPPEMENT DES QUARTIERS", page: "cdq" },
      ],
    },
    {
      title: "NOS ACTIONS",
      items: [
        { title: "TRAVAUX", page: "travaux" },
        { title: "PROJETS", page: "projets" },
        { title: "ACTIVITÉS SOCIO-CULTURELLES", page: "socio-culturel" },
      ],
    },
    {
      title: "SERVICES",
      items: [
        { title: "ÉTAT CIVIL", page: "etat-civil" },
        { title: "SOCIO-CULTUREL", page: "service-socio-culturel" },
        { title: "DÉVELOPPEMENT LOCAL", page: "developpement-local" },
      ],
    },
    {
      title: "INFORMATIONS OFFICIELLES",
      items: [
        { title: "ARRÊTÉS", page: "arretes" },
        { title: "DÉCISIONS", page: "decisions" },
      ],
    },
    {
      title: "NOUS CONTACTER",
      page: "contact",
      items: [],
    },
  ];

  const navbarVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b shadow-2xl backdrop-blur-xl bg-white/95 border-ivory-orange/20"
          : "bg-gradient-to-r backdrop-blur-md from-ivory-orange/90 via-white/95 to-ivory-green/90"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Barre supérieure avec informations de contact */}
      <div className="py-2 text-white bg-gradient-to-r from-ivory-orange to-ivory-green">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+225 27 22 49 53 00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@mairieplateau.ci</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Lun-Ven: 8h-17h</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 transition-colors hover:text-ivory-gold"
              >
                <User className="w-4 h-4" />
                <span>Espace Citoyen</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 transition-colors hover:text-ivory-gold"
              >
                <Search className="w-4 h-4" />
                <span>Rechercher</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => handleNavigate("accueil")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="flex justify-center items-center w-16 h-16 bg-gradient-to-r rounded-full shadow-xl transition-all duration-300 from-ivory-orange to-ivory-green group-hover:shadow-2xl"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Building className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-ivory-orange">
                MAIRIE DU PLATEAU
              </h1>
              <p className="text-sm font-medium text-gray-600">
                ABIDJAN • DISTRICT D'ABIDJAN
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navigationMenu.map((item) => (
              <div key={item.title} className="relative group">
                <motion.button
                  className="flex relative items-center px-4 py-3 space-x-1 font-medium text-gray-700 transition-colors hover:text-ivory-orange"
                  onClick={() => {
                    if (item.page) {
                      handleNavigate(item.page);
                    } else {
                      toggleDropdown(item.title);
                    }
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.title}</span>
                  {item.items.length > 0 && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ivory-orange to-ivory-green"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Dropdown Menu */}
                {item.items.length > 0 && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        className="overflow-hidden absolute left-0 top-full mt-2 w-80 rounded-xl border shadow-2xl backdrop-blur-xl bg-white/95 border-ivory-orange/20"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.items.map((subItem) => (
                              <motion.button
                                key={subItem.title}
                                className="flex items-center p-3 space-x-3 text-left rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-ivory-orange/10 hover:to-ivory-green/10 group"
                                onClick={() => handleNavigate(subItem.page)}
                                variants={itemVariants}
                                whileHover={{
                                  x: 5,
                                  backgroundColor: "rgba(255, 107, 53, 0.1)",
                                }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <div className="flex justify-center items-center w-8 h-8 bg-gradient-to-r rounded-lg transition-transform from-ivory-orange to-ivory-green group-hover:scale-110">
                                  <FileText className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 transition-colors group-hover:text-ivory-orange">
                                    {subItem.title}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    Accéder au service
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="p-2 text-white bg-gradient-to-r rounded-lg lg:hidden from-ivory-orange to-ivory-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="border-t backdrop-blur-xl lg:hidden bg-white/95 border-ivory-orange/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container px-4 py-6 mx-auto">
              <div className="space-y-4">
                {navigationMenu.map((item) => (
                  <div key={item.title}>
                    <motion.button
                      className="flex justify-between items-center p-4 w-full text-left bg-gradient-to-r rounded-lg transition-all duration-300 from-ivory-orange/5 to-ivory-green/5 hover:from-ivory-orange/10 hover:to-ivory-green/10"
                      onClick={() => {
                        if (item.page) {
                          handleNavigate(item.page);
                        } else {
                          toggleDropdown(item.title);
                        }
                      }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium text-gray-900">
                        {item.title}
                      </span>
                      {item.items.length > 0 && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </motion.button>

                    {item.items.length > 0 && activeDropdown === item.title && (
                      <motion.div
                        className="mt-2 ml-4 space-y-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.items.map((subItem) => (
                          <motion.button
                            key={subItem.title}
                            className="p-3 w-full text-left text-gray-700 transition-colors hover:text-ivory-orange"
                            onClick={() => handleNavigate(subItem.page)}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {subItem.title}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
