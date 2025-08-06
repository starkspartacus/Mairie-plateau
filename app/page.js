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
  MessageSquare
} from 'lucide-react'

export default function MairiePlateauApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Je suis heureuse de l'installation de notre maire, M. Ehouo Jacques. Je suis certaine qu'il va dynamiser la commune du Plateau.",
      author: "Habitante du Plateau"
    },
    {
      text: "C'est une nouvelle ère dans la gestion de notre commune, car à l'instar de M. Emmanuel Macron président de la République française, nous avons un jeune maire dynamique.",
      author: "Citoyen engagé"
    },
    {
      text: "Nous commerçants de la commune du plateau sommes heureux de voir M. Ehouo Jacques à la tête de notre commune.",
      author: "Représentant des commerçants"
    }
  ]

  const newsArticles = [
    {
      id: 1,
      title: "Séance de sensibilisation du préfet d'Abidjan avec les maires, les guides religieux et traditionnels",
      excerpt: "Afin de les sensibiliser sur les mesures de lutte contre le Coronavirus, le préfet d'Abidjan Vincent Toh Bi a rencontré ce mercredi les maires, les guides religieux et traditionnels...",
      date: "19 mars 2020",
      category: "ACTUS",
      image: "https://images.unsplash.com/photo-1517009572053-93fb56dfef49?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbHxlbnwwfHx8Ymx1ZXwxNzU0NDg2NDcyfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      title: "Un espace dédié à Nelson Mandela inauguré à Abidjan",
      excerpt: "Un espace dénommé « Mandela peace parc », chapeauté par la statue de l'ancien Président d'Afrique du Sud, icône de paix, d'unité et de dialogue en Afrique, a été inauguré lundi à Abidjan Plateau...",
      date: "3 février 2020",
      category: "ACTUS",
      image: "https://images.unsplash.com/photo-1446857977989-d82c6e6cda42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxjaXR5JTIwaGFsbHxlbnwwfHx8Ymx1ZXwxNzU0NDg2NDcyfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      title: "Commune du Plateau : Le stationnement désormais payant",
      excerpt: "La problématique de la congestion du trafic routier dans la commune du Plateau et du stationnement anarchique a amené le maire Jacques EHOUO à mettre en route, un projet \"Parcmètre\"...",
      date: "14 janvier 2020",
      category: "ACTUS",
      image: "https://images.unsplash.com/photo-1697978897183-4615848c85e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxjaXR5JTIwaGFsbHxlbnwwfHx8Ymx1ZXwxNzU0NDg2NDcyfDA&ixlib=rb-4.1.0&q=85"
    }
  ]

  const quickServices = [
    { title: "ÉTAT CIVIL", icon: FileText, description: "Actes de naissance, mariage, décès" },
    { title: "TRAVAUX", icon: Hammer, description: "Suivi des travaux publics" },
    { title: "PROJETS", icon: Building, description: "Projets de développement" },
    { title: "MUNICIPALITÉ", icon: Users, description: "Organisation municipale" },
    { title: "LE CONSEIL", icon: MessageSquare, description: "Conseil municipal" }
  ]

  const navigationMenu = [
    {
      title: "ACCUEIL",
      items: ["PRÉSENTATION", "HISTORIQUE", "LE PLATEAU"]
    },
    {
      title: "ACTUALITÉ",
      items: []
    },
    {
      title: "LA MAIRIE",
      items: ["LE MAIRE", "LA MUNICIPALITÉ", "LE CONSEIL MUNICIPAL", "LES DIRECTIONS", "LE CONSEIL CITOYENS ET CONSULTATIF", "LE COMITÉ DÉVELOPPEMENT DES QUARTIERS (CDQ)"]
    },
    {
      title: "NOS ACTIONS",
      items: ["TRAVAUX", "PROJETS", "ACTIVITÉS SOCIO-CULTURELLES"]
    },
    {
      title: "SERVICES",
      items: ["ÉTAT CIVIL", "SOCIO-CULTUREL", "DÉVELOPPEMENT LOCAL"]
    },
    {
      title: "INFORMATIONS OFFICIELLES",
      items: ["ARRÊTÉS", "DÉCISIONS"]
    },
    {
      title: "NOUS CONTACTER",
      items: []
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MAIRIE DU PLATEAU</h1>
                <p className="text-sm text-gray-600">ABIDJAN</p>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              {navigationMenu.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium">{item.title}</span>
                    {item.items.length > 0 && <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {item.items.length > 0 && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="py-2">
                        {item.items.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {subItem}
                          </a>
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
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            {navigationMenu.map((item, index) => (
              <div key={index} className="py-2">
                <button className="w-full text-left font-medium text-gray-900 py-2">
                  {item.title}
                </button>
                {item.items.length > 0 && (
                  <div className="pl-4">
                    {item.items.map((subItem, subIndex) => (
                      <a key={subIndex} href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1637768315794-c8345fc33a9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MHx8fGJsdWV8MTc1NDQ4NjQ4MHww&ixlib=rb-4.1.0&q=85')`
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              BIENVENUE AU PLATEAU
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Commune dynamique au cœur d'Abidjan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Découvrir nos services
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Infos */}
      <section className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Badge variant="secondary" className="mr-4 bg-white text-red-600">FLASH INFOS</Badge>
            <div className="text-sm">
              <span className="mr-8">• 18 mars 2020: Séance de sensibilisation du préfet d'Abidjan avec les maires, les guides religieux et traditionnels</span>
              <span>• 03 février 2020: UN ESPACE DÉDIÉ À NELSON MANDELA INAUGURÉ À ABIDJAN</span>
            </div>
          </div>
        </div>
      </section>

      {/* EN 1 CLIC Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">EN 1 CLIC</h2>
            <p className="text-lg text-gray-600">Accédez rapidement à nos services essentiels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {quickServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* EN CE MOMENT Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">EN CE MOMENT</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <Button variant="default">TOUS</Button>
              <Button variant="outline">ACTUS</Button>
              <Button variant="outline">AGENDA</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="outline" size="sm">En savoir +</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mayor Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-center lg:text-left">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Jacques EHOUO</h3>
                <p className="text-xl text-blue-100 mb-6">Maire du Plateau</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">LE MOT DU MAIRE</h3>
              <p className="text-lg leading-relaxed text-blue-100">
                Le Plateau est une des communes de la ville d'Abidjan, elle est entourée par la commune de Yopougon à l'ouest, au sud par la lagune Ébrié, la commune de Treichville. En tant que quartier d'affaires, il rassemble la majeure partie des activités administratives et commerciales de la ville. La plupart des grandes firmes ivoiriennes ont leur siège social au Plateau. Il est également doté d'un marché très animé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PAROLE AUX POPULATIONS</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <p className="text-blue-600 font-semibold">{testimonials[currentTestimonial].author}</p>
              
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">NOUS CONTACTER</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Visitez votre mairie à</h4>
                    <p className="text-gray-600">Avenue Chardy, Abidjan Plateau</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Avez des questions? Appelez nous</h4>
                    <p className="text-gray-600">+225-20 25 49 02</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Contactez-nous</h4>
                    <p className="text-gray-600">info@mairieplateau.net</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>NOUS ÉCRIRE</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Votre nom *" required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Votre E-mail *" required />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Votre téléphone *" required />
                    </div>
                    <div>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>Objet *</option>
                        <option>Information</option>
                        <option>Suggestion</option>
                        <option>Réclamation</option>
                      </select>
                    </div>
                    <div>
                      <Textarea placeholder="Votre Message *" rows={4} required />
                    </div>
                    <Button type="submit" className="w-full">
                      Envoyer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NOTRE POSITION</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Google Maps - Localisation de la Mairie du Plateau</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">MAIRIE DU PLATEAU</h3>
                  <p className="text-gray-400">ABIDJAN</p>
                </div>
              </div>
              <p className="text-gray-400">
                Commune dynamique au cœur d'Abidjan, centre des activités administratives et commerciales.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens Utiles</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Présentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Actualités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-blue-600 hover:border-blue-600">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-blue-600 hover:border-blue-600">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-blue-600 hover:border-blue-600">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Mairie du Plateau Abidjan. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}