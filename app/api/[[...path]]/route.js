import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGO_URL)

// Sample data for demonstration
const sampleNews = [
  {
    id: "1",
    title: "Séance de sensibilisation du préfet d'Abidjan avec les maires, les guides religieux et traditionnels",
    content: "Abidjan le 18 mars 2020. Afin de les sensibiliser sur les mesures de lutte contre le Coronavirus, le préfet d'Abidjan Vincent Toh Bi a rencontré ce mercredi les maires, les guides religieux et traditionnels et plusieurs autres couches sociales. Cette rencontre s'inscrit dans le cadre des mesures préventives mises en place par le gouvernement ivoirien pour faire face à la pandémie.",
    excerpt: "Afin de les sensibiliser sur les mesures de lutte contre le Coronavirus, le préfet d'Abidjan Vincent Toh Bi a rencontré ce mercredi les maires, les guides religieux et traditionnels...",
    date: "2020-03-19",
    category: "ACTUS",
    author: "mplateau",
    published: true,
    createdAt: new Date("2020-03-19"),
    updatedAt: new Date("2020-03-19")
  },
  {
    id: "2",
    title: "Un espace dédié à Nelson Mandela inauguré à Abidjan",
    content: "Abidjan, 03 fév (AIP)- Un espace dénommé « Mandela peace parc », chapeauté par la statue de l'ancien Président d'Afrique du Sud, icône de paix, d'unité et de dialogue en Afrique, a été inauguré lundi à Abidjan Plateau, en présence d'autorités ivoiriennes et sud-africaines. La réalisation de cet espace situé non loin de la place République témoigne de l'engagement de la commune du Plateau à promouvoir les valeurs de paix et d'unité chères à Nelson Mandela.",
    excerpt: "Un espace dénommé « Mandela peace parc », chapeauté par la statue de l'ancien Président d'Afrique du Sud, icône de paix, d'unité et de dialogue en Afrique, a été inauguré lundi à Abidjan Plateau...",
    date: "2020-02-03",
    category: "ACTUS",
    author: "mplateau",
    published: true,
    createdAt: new Date("2020-02-03"),
    updatedAt: new Date("2020-02-03")
  },
  {
    id: "3",
    title: "Commune du Plateau : Le stationnement désormais payant",
    content: "La problématique de la congestion du trafic routier dans la commune du Plateau et du stationnement anarchique a amené le maire Jacques EHOUO à mettre en route, un projet \"Parcmètre\". Bâti autour de la solution eparking, ce projet se veut une réponse durable à la question du stationnement dans cette commune. Cette initiative vise à améliorer la fluidité du trafic et à générer des revenus pour financer d'autres projets d'aménagement urbain.",
    excerpt: "La problématique de la congestion du trafic routier dans la commune du Plateau et du stationnement anarchique a amené le maire Jacques EHOUO à mettre en route, un projet \"Parcmètre\"...",
    date: "2020-01-14",
    category: "ACTUS",
    author: "mplateau",
    published: true,
    createdAt: new Date("2020-01-14"),
    updatedAt: new Date("2020-01-14")
  }
]

const sampleServices = [
  {
    id: "etat-civil",
    title: "État Civil",
    description: "Service dédié aux actes de naissance, mariage, décès et autres documents d'état civil",
    procedures: [
      "Demande d'acte de naissance",
      "Demande d'acte de mariage", 
      "Demande d'acte de décès",
      "Légalisation de documents"
    ],
    documents: [
      "Pièce d'identité",
      "Justificatif de domicile",
      "Frais de timbre"
    ],
    horaires: "Lundi au Vendredi: 8h00 - 16h00",
    contact: "Service État Civil - +225 20 25 49 02"
  },
  {
    id: "travaux",
    title: "Travaux",
    description: "Suivi et gestion des travaux publics dans la commune",
    procedures: [
      "Demande de travaux de voirie",
      "Signalement de dégradations",
      "Autorisation de travaux privés",
      "Suivi des chantiers en cours"
    ],
    documents: [
      "Demande écrite",
      "Plan de situation",
      "Devis estimatif"
    ],
    horaires: "Lundi au Vendredi: 8h00 - 16h00",
    contact: "Service Travaux - +225 20 25 49 02"
  }
]

// GET handler for various endpoints
export async function GET(request, { params }) {
  const path = params.path?.join('/') || ''
  const url = new URL(request.url)
  
  try {
    switch (path) {
      case 'news':
        const page = parseInt(url.searchParams.get('page') || '1')
        const limit = parseInt(url.searchParams.get('limit') || '10')
        const category = url.searchParams.get('category')
        
        let filteredNews = sampleNews
        if (category && category !== 'TOUS') {
          filteredNews = sampleNews.filter(news => news.category === category)
        }
        
        const startIndex = (page - 1) * limit
        const endIndex = startIndex + limit
        const paginatedNews = filteredNews.slice(startIndex, endIndex)
        
        return NextResponse.json({
          data: paginatedNews,
          pagination: {
            page,
            limit,
            total: filteredNews.length,
            totalPages: Math.ceil(filteredNews.length / limit)
          }
        })
      
      case 'services':
        return NextResponse.json({ data: sampleServices })
      
      case 'contact-info':
        return NextResponse.json({
          data: {
            address: "Avenue Chardy, Abidjan Plateau",
            phone: "+225-20 25 49 02",
            email: "info@mairieplateau.net",
            schedules: "Lundi au Vendredi: 8h00 - 16h00",
            socialMedia: {
              facebook: "https://www.facebook.com/Mairie-Plateau-419993455500142/",
              twitter: "https://twitter.com/MairiePlateau",
              youtube: "#"
            }
          }
        })
      
      case 'mayor-info':
        return NextResponse.json({
          data: {
            name: "Jacques EHOUO",
            title: "Maire du Plateau",
            message: "Le Plateau est une des communes de la ville d'Abidjan, elle est entourée par la commune de Yopougon à l'ouest, au sud par la lagune Ébrié, la commune de Treichville. En tant que quartier d'affaires, il rassemble la majeure partie des activités administratives et commerciales de la ville. La plupart des grandes firmes ivoiriennes ont leur siège social au Plateau. Il est également doté d'un marché très animé.",
            biography: "Jacques EHOUO est le maire de la commune du Plateau depuis son élection. Il s'engage pour le développement et la modernisation de la commune.",
            achievements: [
              "Mise en place du système de stationnement payant",
              "Aménagement de l'espace Nelson Mandela",
              "Amélioration de l'éclairage public",
              "Modernisation des services municipaux"
            ]
          }
        })
      
      default:
        return NextResponse.json(
          { error: 'Endpoint non trouvé' },
          { status: 404 }
        )
    }
  } catch (error) {
    console.error('Erreur API:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}

// POST handler for contact form and other submissions
export async function POST(request, { params }) {
  const path = params.path?.join('/') || ''
  
  try {
    switch (path) {
      case 'contact':
        const contactData = await request.json()
        
        // Validation des données
        const requiredFields = ['name', 'email', 'phone', 'subject', 'message']
        const missingFields = requiredFields.filter(field => !contactData[field])
        
        if (missingFields.length > 0) {
          return NextResponse.json(
            { error: `Champs requis manquants: ${missingFields.join(', ')}` },
            { status: 400 }
          )
        }
        
        // Simulation de sauvegarde en base de données
        const contactSubmission = {
          id: Date.now().toString(),
          ...contactData,
          createdAt: new Date().toISOString(),
          status: 'nouveau'
        }
        
        // En production, vous pourriez ici:
        // - Sauvegarder en base de données
        // - Envoyer un email de notification
        // - Intégrer avec un système de ticketing
        
        console.log('Nouvelle soumission de contact:', contactSubmission)
        
        return NextResponse.json({
          success: true,
          message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
          data: { id: contactSubmission.id }
        })
      
      case 'newsletter':
        const newsletterData = await request.json()
        
        if (!newsletterData.email) {
          return NextResponse.json(
            { error: 'Email requis pour l\'inscription à la newsletter' },
            { status: 400 }
          )
        }
        
        // Simulation d'inscription newsletter
        const subscription = {
          id: Date.now().toString(),
          email: newsletterData.email,
          createdAt: new Date().toISOString(),
          status: 'active'
        }
        
        console.log('Nouvelle inscription newsletter:', subscription)
        
        return NextResponse.json({
          success: true,
          message: 'Inscription à la newsletter réussie !',
          data: { id: subscription.id }
        })
      
      default:
        return NextResponse.json(
          { error: 'Endpoint non trouvé' },
          { status: 404 }
        )
    }
  } catch (error) {
    console.error('Erreur API POST:', error)
    return NextResponse.json(
      { error: 'Erreur lors du traitement de la requête' },
      { status: 500 }
    )
  }
}

// PUT handler for updates
export async function PUT(request, { params }) {
  const path = params.path?.join('/') || ''
  
  try {
    // Exemple d'endpoint pour mettre à jour une actualité
    if (path.startsWith('news/')) {
      const newsId = path.split('/')[1]
      const updateData = await request.json()
      
      // En production, vous mettriez à jour en base de données
      console.log(`Mise à jour de l'actualité ${newsId}:`, updateData)
      
      return NextResponse.json({
        success: true,
        message: 'Actualité mise à jour avec succès',
        data: { id: newsId, ...updateData, updatedAt: new Date().toISOString() }
      })
    }
    
    return NextResponse.json(
      { error: 'Endpoint non trouvé' },
      { status: 404 }
    )
  } catch (error) {
    console.error('Erreur API PUT:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    )
  }
}

// DELETE handler
export async function DELETE(request, { params }) {
  const path = params.path?.join('/') || ''
  
  try {
    // Exemple d'endpoint pour supprimer une actualité
    if (path.startsWith('news/')) {
      const newsId = path.split('/')[1]
      
      // En production, vous supprimeriez de la base de données
      console.log(`Suppression de l'actualité ${newsId}`)
      
      return NextResponse.json({
        success: true,
        message: 'Actualité supprimée avec succès'
      })
    }
    
    return NextResponse.json(
      { error: 'Endpoint non trouvé' },
      { status: 404 }
    )
  } catch (error) {
    console.error('Erreur API DELETE:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    )
  }
}