'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Building2, 
  Calendar, 
  FileText, 
  Users, 
  Hammer, 
  Clock, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  Award,
  Globe,
  Briefcase,
  BookOpen,
  Camera,
  Heart,
  Target
} from 'lucide-react'

// Images simulées (en production, vous utiliserez les vraies images base64)
const MAYOR_IMAGE = "/api/placeholder/400/400"
const PLATEAU_AERIAL = "/api/placeholder/800/600"
const PLATEAU_NIGHT = "/api/placeholder/800/600"
const OFFICIALS_GROUP = "/api/placeholder/800/400"
const MANDELA_SPACE = "/api/placeholder/600/400"

const PageRenderer = ({ currentPage, navigateTo }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Information',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitMessage('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
        setContactForm({ name: '', email: '', phone: '', subject: 'Information', message: '' })
      } else {
        setSubmitMessage('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer.')
    }
    
    setIsSubmitting(false)
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  const pageContent = {
    'accueil': null, // Handled in main component
    
    'presentation': (
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">La Commune du Plateau</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La commune du Plateau est le cœur économique et administratif d'Abidjan. Située dans le district d'Abidjan, elle abrite les principales institutions gouvernementales, les sièges des grandes entreprises et constitue le centre névralgique des affaires en Côte d'Ivoire.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Avec ses gratte-ciels modernes, ses institutions financières et ses centres commerciaux, le Plateau incarne la modernité et le dynamisme de la métropole abidjanaise.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">Population</h4>
                  <p className="text-2xl font-bold text-blue-600">500K+</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Building2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">Entreprises</h4>
                  <p className="text-2xl font-bold text-green-600">10K+</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <img 
                src={PLATEAU_AERIAL} 
                alt="Vue aérienne du Plateau"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Centre Économique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Le Plateau concentre les principales activités économiques et financières du pays.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Building2 className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Centre Administratif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Siège des institutions gouvernementales et des administrations publiques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle>Cœur d'Abidjan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Point de convergence de toutes les activités urbaines de la métropole.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    ),
    
    'le-maire': (
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="relative inline-block mb-8">
                <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                  <img 
                    src={MAYOR_IMAGE} 
                    alt="Jacques EHOUO"
                    className="w-full h-full rounded-2xl object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
                </div>
              </div>
              <Badge className="mb-4 bg-blue-600">Maire du Plateau</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Jacques EHOUO</h2>
              <p className="text-xl text-gray-600 mb-6">Élu maire en 2018, réélu en 2021</p>
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision et Engagement</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "En tant que maire du Plateau, je m'engage à faire de notre commune un modèle de développement urbain durable, 
                  alliant modernité et préservation de notre identité culturelle."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Notre objectif est de créer un environnement favorable aux entreprises tout en améliorant 
                  la qualité de vie de nos concitoyens."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Modernisation urbaine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Sécurité renforcée</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Transport amélioré</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Espaces verts</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Réalisations Marquantes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Projets Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">50+</p>
                  <p className="text-gray-600">Projets réalisés</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Emplois Créés</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">5K+</p>
                  <p className="text-gray-600">Nouveaux emplois</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-yellow-600">95%</p>
                  <p className="text-gray-600">Taux de satisfaction</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Reconnaissances</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-purple-600">10+</p>
                  <p className="text-gray-600">Prix et distinctions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    ),
    
    'actualites': (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Toutes nos Actualités</h2>
            <div className="flex justify-center space-x-4 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700">TOUS</Button>
              <Button variant="outline">ACTUS</Button>
              <Button variant="outline">PROJETS</Button>
              <Button variant="outline">ÉVÉNEMENTS</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Lancement du projet de modernisation du marché du Plateau",
                excerpt: "Un investissement de 15 milliards FCFA pour moderniser le marché central et améliorer les conditions de travail des commerçants.",
                date: "15 décembre 2024",
                category: "PROJETS",
                image: PLATEAU_AERIAL
              },
              {
                title: "Inauguration du nouveau système d'éclairage intelligent", 
                excerpt: "500 nouveaux lampadaires LED connectés installés pour une ville plus sûre et plus économe en énergie.",
                date: "10 décembre 2024",
                category: "INFRASTRUCTURES",
                image: PLATEAU_NIGHT
              },
              {
                title: "Forum économique du Plateau 2024",
                excerpt: "Rassemblement des acteurs économiques pour débattre de l'avenir économique de la commune.",
                date: "5 décembre 2024", 
                category: "ÉVÉNEMENTS",
                image: OFFICIALS_GROUP
              },
              {
                title: "Extension de l'espace Nelson Mandela",
                excerpt: "Nouveaux aménagements pour agrandir cet espace symbolique de paix et de dialogue.",
                date: "1 décembre 2024",
                category: "CULTURE",
                image: MANDELA_SPACE
              }
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-4">{article.excerpt}</p>
                  <Button variant="outline" size="sm">Lire la suite</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    ),
    
    'etat-civil': (
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <FileText className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service État Civil</h2>
            <p className="text-xl text-gray-600">Tous vos documents officiels en un lieu</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Services Disponibles</h3>
              <div className="space-y-4">
                {[
                  "Acte de naissance",
                  "Acte de mariage", 
                  "Acte de décès",
                  "Certificat de nationalité",
                  "Légalisation de documents",
                  "Copies conformes"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="font-medium text-gray-900">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations Pratiques</h3>
              <Card className="mb-6">
                <CardHeader>
                  <Clock className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>Horaires d'ouverture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Lundi - Vendredi : 8h00 - 16h00</p>
                  <p className="text-gray-600">Samedi : 8h00 - 12h00</p>
                </CardContent>
              </Card>
              
              <Card className="mb-6">
                <CardHeader>
                  <FileText className="w-8 h-8 text-orange-600 mb-2" />
                  <CardTitle>Documents requis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Pièce d'identité valide</li>
                    <li>• Justificatif de domicile</li>
                    <li>• Formulaire de demande rempli</li>
                    <li>• Frais de timbre</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Phone className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Service État Civil</p>
                  <p className="text-gray-600">+225 20 25 49 02</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    ),
    
    'contact': (
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
            <p className="text-xl text-gray-600">Nous sommes là pour vous accompagner</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
              
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle>Adresse</CardTitle>
                      <CardDescription>Visitez-nous</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium">
                    Avenue Chardy<br />
                    Abidjan Plateau<br />
                    District d'Abidjan, Côte d'Ivoire
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-green-600" />
                    <div>
                      <CardTitle>Téléphone</CardTitle>
                      <CardDescription>Appelez-nous</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium">+225-20 25 49 02</p>
                  <p className="text-sm text-gray-500 mt-1">Lundi - Vendredi : 8h00 - 16h00</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-purple-600" />
                    <div>
                      <CardTitle>Email</CardTitle>
                      <CardDescription>Écrivez-nous</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium">info@mairieplateau.net</p>
                  <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <Input
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          placeholder="Votre nom complet"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <Input
                          required
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                          placeholder="Votre numéro de téléphone"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Objet *
                      </label>
                      <select
                        required
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Information">Demande d'information</option>
                        <option value="Suggestion">Suggestion</option>
                        <option value="Réclamation">Réclamation</option>
                        <option value="Rendez-vous">Demande de rendez-vous</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="Décrivez votre demande en détail..."
                      />
                    </div>
                    
                    {submitMessage && (
                      <div className={`p-4 rounded-lg ${
                        submitMessage.includes('succès') 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}>
                        {submitMessage}
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg font-medium"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Envoi en cours...
                        </>
                      ) : (
                        'Envoyer le message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Notre Localisation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Carte Google Maps</p>
                    <p className="text-sm text-gray-500">Avenue Chardy, Abidjan Plateau</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const content = pageContent[currentPage]
  
  if (!content) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Page en construction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Cette page sera bientôt disponible avec du contenu détaillé.
              </p>
              <Button onClick={() => navigateTo('accueil')} variant="outline">
                Retour à l'accueil
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
  
  return content
}

export default PageRenderer