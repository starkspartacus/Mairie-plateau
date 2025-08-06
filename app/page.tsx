"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Users,
  Building,
  Hammer,
  MessageSquare,
  Star,
  Award,
  Clock,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlashInfo from "@/components/FlashInfo";
import QuickServices from "@/components/QuickServices";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import { NavigationItem, QuickService } from "@/types";

export default function MairiePlateauApp() {
  const [currentPage, setCurrentPage] = useState("accueil");
  const [isLoading, setIsLoading] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  // Messages pour FlashInfo
  const flashMessages = [
    "Nouveau : Inscription en ligne pour les actes d'état civil",
    "Travaux en cours : Réhabilitation de la place de la mairie",
    "Prochain conseil municipal : 15 décembre 2024",
    "Festival des arts : Inscriptions ouvertes jusqu'au 30 novembre",
    "Nouveau service : Déclaration de naissance en ligne",
  ];

  // Articles pour NewsSection
  const articles = [
    {
      id: 1,
      title: "Inauguration du nouveau centre culturel",
      excerpt:
        "Le maire du Plateau a inauguré le nouveau centre culturel municipal en présence des autorités locales.",
      image: "/images/news1.jpg",
      date: "15 novembre 2024",
      category: "ACTUS",
      featured: true,
    },
    {
      id: 2,
      title: "Travaux de réhabilitation des routes",
      excerpt:
        "Les travaux de réhabilitation des principales artères du Plateau progressent selon le planning prévu.",
      image: "/images/news2.jpg",
      date: "12 novembre 2024",
      category: "TRAVAUX",
      featured: false,
    },
    {
      id: 3,
      title: "Festival des arts du Plateau",
      excerpt:
        "Le festival annuel des arts se tiendra du 20 au 25 décembre avec de nombreuses animations.",
      image: "/images/news3.jpg",
      date: "10 novembre 2024",
      category: "AGENDA",
      featured: false,
    },
  ];

  // Data
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

  const quickServices: QuickService[] = [
    {
      title: "ÉTAT CIVIL",
      icon: FileText,
      description: "Actes de naissance, mariage, décès",
      page: "etat-civil",
      color: "bg-ivory-orange",
    },
    {
      title: "TRAVAUX",
      icon: Hammer,
      description: "Suivi des travaux publics",
      page: "travaux",
      color: "bg-ivory-green",
    },
    {
      title: "PROJETS",
      icon: Building,
      description: "Projets de développement",
      page: "projets",
      color: "bg-ivory-gold",
    },
    {
      title: "MUNICIPALITÉ",
      icon: Users,
      description: "Organisation municipale",
      page: "municipalite",
      color: "bg-ivory-orange",
    },
    {
      title: "LE CONSEIL",
      icon: MessageSquare,
      description: "Conseil municipal",
      page: "conseil",
      color: "bg-ivory-green",
    },
  ];

  const handleNavigate = (page: string) => {
    setIsLoading(true);
    setAnimationClass("fade-out");

    setTimeout(() => {
      setCurrentPage(page);
      setAnimationClass("fade-in");
      setIsLoading(false);
    }, 300);
  };

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory-orange/5 via-white to-ivory-green/5">
      <Navbar onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        {currentPage === "accueil" && (
          <motion.div
            key="accueil"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="pt-24"
          >
            <HeroSection onNavigate={handleNavigate} />
            <FlashInfo messages={flashMessages} />
            <QuickServices
              services={quickServices}
              onNavigate={handleNavigate}
            />
            <NewsSection articles={articles} onNavigate={handleNavigate} />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />

      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-r from-ivory-orange/90 to-ivory-green/90 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-white text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg font-semibold">Chargement...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
