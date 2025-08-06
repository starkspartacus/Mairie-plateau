'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Youtube,
  FileText,
  Users,
  Building,
  Hammer,
  Calendar,
  MessageSquare,
  ChevronRight,
  Star,
  Award,
  Clock
} from 'lucide-react'

import PageRenderer from '@/components/PageRenderer'

// Images en base64 (simulées pour la démo - en production, vous utiliseriez les vraies images)
const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
const MAYOR_IMAGE = "/api/placeholder/400/400"
const PLATEAU_AERIAL = "https://images.unsplash.com/photo-1697978897183-4615848c85e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxjaXR5JTIwaGFsbHxlbnwwfHx8Ymx1ZXwxNzU0NDg2NDcyfDA&ixlib=rb-4.1.0&q=85"
const PLATEAU_NIGHT = "https://images.unsplash.com/photo-1637768315794-c8345fc33a9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MHx8fGJsdWV8MTc1NDQ4NjQ4MHww&ixlib=rb-4.1.0&q=85"
const OFFICIALS_GROUP = "https://images.unsplash.com/photo-1517009572053-93fb56dfef49?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbHxlbnwwfHx8Ymx1ZXwxNzU0NDg2NDcyfDA&ixlib=rb-4.1.0&q=85"

export default function MairiePlateauApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentPage, setCurrentPage] = useState('accueil')
  const [isLoading, setIsLoading] = useState(false)
  const [animationClass, setAnimationClass] = useState('')

  const testimonials = [
    {
      text: "Je suis heureuse de l'installation de notre maire, M. Ehouo Jacques. Je suis certaine qu'il va dynamiser la commune du Plateau.",
      author: "Mme Adjoa Akissi",
      role: "Habitante du Plateau"
    },
    {
      text: "C'est une nouvelle ère dans la gestion de notre commune, car à l'instar de M. Emmanuel Macron président de la République française, nous avons un jeune maire dynamique.",
      role: "Citoyen engagé"
    },
    {
      text: "Nous commerçants de la commune du plateau sommes heureux de voir M. Ehouo Jacques à la tête de notre commune.",
      author: "Association des Commerçants",
      role: "Représentant des commerçants"
    }
  ]

  const newsArticles = [
    {
      id: 1,
      title: "Lancement du projet de modernisation du marché du Plateau",
      excerpt: "La mairie du Plateau lance un ambitieux projet de modernisation du marché central pour améliorer les conditions de travail des commerçants et l'expérience des clients.",
      date: "15 décembre 2024",
      category: "PROJETS",
      image: PLATEAU_AERIAL,
      featured: true
    },
    {
      id: 2,
      title: "Inauguration du nouveau système d'éclairage intelligent",
      excerpt: "Installation de 500 nouveaux lampadaires LED connectés pour améliorer la sécurité et réduire la consommation énergétique de 40%.",
      date: "10 décembre 2024",
      category: "ACTUS",
      image: PLATEAU_NIGHT,
      featured: true
    },
    {
      id: 3,
      title: "Séance de sensibilisation du préfet d'Abidjan avec les maires",
      excerpt: "Afin de les sensibiliser sur les mesures de lutte contre le Coronavirus, le préfet d'Abidjan Vincent Toh Bi a rencontré ce mercredi les maires, les guides religieux et traditionnels...",
      date: "19 mars 2020",
      category: "ACTUS",
      image: OFFICIALS_GROUP
    },
    {
      id: 4,
      title: "Un espace dédié à Nelson Mandela inauguré à Abidjan",
      excerpt: "Un espace dénommé « Mandela peace parc », chapeauté par la statue de l'ancien Président d'Afrique du Sud, icône de paix, d'unité et de dialogue en Afrique.",
      date: "3 février 2020",
      category: "ACTUS",
      image: "https://images.unsplash.com/photo-1446857977989-d82c6e6cda42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxjaXR5JTIwaGFsbHxlbnwwfHx8Ymx1ZXwxNzU0NDg2NDcyfDA&ixlib=rb-4.1.0&q=85"
    }
  ]

  const quickServices = [
    { 
      title: "ÉTAT CIVIL", 
      icon: FileText, 
      description: "Actes de naissance, mariage, décès",
      page: "etat-civil",
      color: "bg-blue-500"
    },
    { 
      title: "TRAVAUX", 
      icon: Hammer, 
      description: "Suivi des travaux publics",
      page: "travaux",
      color: "bg-orange-500"
    },
    { 
      title: "PROJETS", 
      icon: Building, 
      description: "Projets de développement",
      page: "projets",
      color: "bg-green-500"
    },
    { 
      title: "MUNICIPALITÉ", 
      icon: Users, 
      description: "Organisation municipale",
      page: "municipalite",
      color: "bg-purple-500"
    },
    { 
      title: "LE CONSEIL", 
      icon: MessageSquare, 
      description: "Conseil municipal",
      page: "conseil",
      color: "bg-red-500"
    }
  ]

  const navigationMenu = [
    {
      title: "ACCUEIL",
      page: "accueil",
      items: [
        { title: "PRÉSENTATION", page: "presentation" },
        { title: "HISTORIQUE", page: "historique" },
        { title: "LE PLATEAU", page: "le-plateau" }
      ]
    },
    {
      title: "ACTUALITÉ",
      page: "actualites",
      items: []
    },
    {
      title: "LA MAIRIE",
      items: [
        { title: "LE MAIRE", page: "le-maire" },
        { title: "LA MUNICIPALITÉ", page: "municipalite" },
        { title: "LE CONSEIL MUNICIPAL", page: "conseil-municipal" },
        { title: "LES DIRECTIONS", page: "directions" },
        { title: "LE CONSEIL CITOYENS ET CONSULTATIF", page: "conseil-citoyen" },
        { title: "LE COMITÉ DÉVELOPPEMENT DES QUARTIERS", page: "cdq" }
      ]
    },
    {
      title: "NOS ACTIONS",
      items: [
        { title: "TRAVAUX", page: "travaux" },
        { title: "PROJETS", page: "projets" },
        { title: "ACTIVITÉS SOCIO-CULTURELLES", page: "socio-culturel" }
      ]
    },
    {
      title: "SERVICES",
      items: [
        { title: "ÉTAT CIVIL", page: "etat-civil" },
        { title: "SOCIO-CULTUREL", page: "service-socio-culturel" },
        { title: "DÉVELOPPEMENT LOCAL", page: "developpement-local" }
      ]
    },
    {
      title: "INFORMATIONS OFFICIELLES",
      items: [
        { title: "ARRÊTÉS", page: "arretes" },
        { title: "DÉCISIONS", page: "decisions" }
      ]
    },
    {
      title: "NOUS CONTACTER",
      page: "contact",
      items: []
    }
  ]

  const achievements = [
    {
      title: "Projets réalisés",
      value: "150+",
      icon: Building,
      color: "text-blue-600"
    },
    {
      title: "Citoyens servis",
      value: "500K+",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Années d'expérience",
      value: "25+",
      icon: Award,
      color: "text-purple-600"
    },
    {
      title: "Satisfaction",
      value: "95%",
      icon: Star,
      color: "text-orange-600"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const navigateTo = (page) => {
    setIsLoading(true)
    setAnimationClass('animate-fade-out')
    
    setTimeout(() => {
      setCurrentPage(page)
      setIsMenuOpen(false)
      setAnimationClass('animate-fade-in')
      setIsLoading(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{
            backgroundImage: `url('${PLATEAU_NIGHT}')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-float">
              <img 
                src={LOGO_BASE64} 
                alt="Logo Commune du Plateau"
                className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full p-3"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-shadow-lg">
              BIENVENUE AU PLATEAU
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up-delay">
              Commune dynamique au cœur d'Abidjan
            </p>
            <div className="text-lg mb-12 text-blue-100 animate-slide-up-delay-2">
              <p>District d'Abidjan • Commune du Plateau</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-3">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => navigateTo('services')}
              >
                Découvrir nos services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300"
                onClick={() => navigateTo('contact')}
              >
                Nous contacter
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-random"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Flash Infos */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center animate-ticker">
            <Badge variant="secondary" className="mr-6 bg-white text-red-600 font-bold px-4 py-2 flex-shrink-0">
              FLASH INFOS
            </Badge>
            <div className="text-sm whitespace-nowrap animate-scroll">
              <span className="mr-12">🔴 Lancement du projet de modernisation du marché du Plateau</span>
              <span className="mr-12">🔴 Inauguration du nouveau système d'éclairage intelligent</span>
              <span className="mr-12">🔴 Séance de sensibilisation du préfet d'Abidjan avec les maires</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="text-center hover:scale-105 transition-all duration-500 hover:shadow-xl bg-white/70 backdrop-blur-sm border-0">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 ${achievement.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow`}>
                      <Icon className={`w-8 h-8 ${achievement.color}`} />
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-900 animate-count-up">
                      {achievement.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-medium text-gray-700">
                      {achievement.title}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* EN 1 CLIC Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">EN 1 CLIC</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accédez rapidement à nos services essentiels en un simple clic
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {quickServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-4 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:scale-105"
                  onClick={() => navigateTo(service.page)}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-20 h-20 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </CardDescription>
                    <ChevronRight className="w-5 h-5 mx-auto mt-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* EN CE MOMENT Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-up">EN CE MOMENT</h2>
            <div className="flex justify-center space-x-4 mb-12 animate-slide-up-delay">
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">TOUS</Button>
              <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600">ACTUS</Button>
              <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600">AGENDA</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsArticles.slice(0, 3).map((article, index) => (
              <Card 
                key={article.id} 
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-2 ${
                  article.featured ? 'border-2 border-blue-200' : ''
                }`}
              >
                <div className="h-56 bg-gray-200 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {article.featured && (
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      À LA UNE
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    En savoir plus
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigateTo('actualites')}
              className="hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
            >
              Voir toutes les actualités
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mayor Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto lg:mx-0 mb-8 relative">
                  <img 
                    src={MAYOR_IMAGE} 
                    alt="Jacques EHOUO"
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">Jacques EHOUO</h3>
              <p className="text-xl text-blue-100 mb-6">Maire du Plateau</p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 transition-colors"
                onClick={() => navigateTo('le-maire')}
              >
                En savoir plus
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold mb-8">LE MOT DU MAIRE</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <p className="text-lg leading-relaxed text-blue-100 mb-6">
                  Le Plateau est une des communes de la ville d'Abidjan, elle est entourée par la commune de Yopougon à l'ouest, au sud par la lagune Ébrié, la commune de Treichville. En tant que quartier d'affaires, il rassemble la majeure partie des activités administratives et commerciales de la ville.
                </p>
                <p className="text-lg leading-relaxed text-blue-100">
                  La plupart des grandes firmes ivoiriennes ont leur siège social au Plateau. Il est également doté d'un marché très animé.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">PAROLE AUX POPULATIONS</h2>
            <p className="text-xl text-gray-600">Ce que disent nos citoyens</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <MessageSquare className="w-16 h-16 text-blue-600 mx-auto mb-8 animate-bounce-slow" />
              <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-blue-600 font-bold text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
              </div>
              
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-300 hover:bg-blue-400'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">NOUS CONTACTER</h2>
            <p className="text-xl text-gray-600">Nous sommes à votre écoute</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Adresse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Avenue Chardy<br />Abidjan Plateau</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Téléphone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+225-20 25 49 02</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@mairieplateau.net</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => navigateTo('contact')}
              className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contactez-nous
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )

  const renderPageContent = () => {
    if (currentPage === 'accueil') {
      return renderHomePage()
    }

    // Use PageRenderer for other pages
    return (
      <div className={`min-h-screen ${animationClass}`}>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">
              {navigationMenu.find(item => item.page === currentPage)?.title || 
               navigationMenu.flatMap(item => item.items).find(item => item.page === currentPage)?.title ||
               'Page'}
            </h1>
            <p className="text-xl text-blue-100">Commune du Plateau - District d'Abidjan</p>
          </div>
        </div>
        
        <PageRenderer currentPage={currentPage} navigateTo={navigateTo} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div 
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => navigateTo('accueil')}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  MAIRIE DU PLATEAU
                </h1>
                <p className="text-sm text-gray-600 font-medium">ABIDJAN • DISTRICT D'ABIDJAN</p>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              {navigationMenu.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-3 rounded-lg hover:bg-blue-50"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() => item.page && navigateTo(item.page)}
                  >
                    <span>{item.title}</span>
                    {item.items.length > 0 && <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {item.items.length > 0 && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 animate-slide-down">
                      <div className="py-2">
                        {item.items.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => navigateTo(subItem.page)}
                            className="w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between group"
                          >
                            <span>{subItem.title}</span>
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden hover:bg-blue-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg animate-slide-down">
          <div className="container mx-auto px-4 py-4">
            {navigationMenu.map((item, index) => (
              <div key={index} className="py-2">
                <button 
                  className="w-full text-left font-medium text-gray-900 py-3 hover:text-blue-600 transition-colors"
                  onClick={() => item.page ? navigateTo(item.page) : null}
                >
                  {item.title}
                </button>
                {item.items.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <button 
                        key={subIndex} 
                        onClick={() => navigateTo(subItem.page)}
                        className="block w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        • {subItem.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-blue-600 font-medium">Chargement...</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={animationClass}>
        {renderPageContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">MAIRIE DU PLATEAU</h3>
                  <p className="text-gray-300">ABIDJAN • DISTRICT D'ABIDJAN</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Commune dynamique au cœur d'Abidjan, centre des activités administratives et commerciales. 
                Nous œuvrons chaque jour pour le développement et le bien-être de nos concitoyens.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-300">Liens Utiles</h4>
              <ul className="space-y-3 text-gray-300">
                <li><button onClick={() => navigateTo('presentation')} className="hover:text-white transition-colors">Présentation</button></li>
                <li><button onClick={() => navigateTo('actualites')} className="hover:text-white transition-colors">Actualités</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => navigateTo('le-maire')} className="hover:text-white transition-colors">Le Maire</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-300">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <p>Avenue Chardy<br />Abidjan Plateau</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <p>+225-20 25 49 02</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <p>info@mairieplateau.net</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Mairie du Plateau Abidjan. Tous droits réservés. | 
              <span className="text-blue-300"> District d'Abidjan</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}