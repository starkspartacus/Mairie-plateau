import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mairie du Plateau Abidjan - Site Officiel',
  description: 'Site officiel de la Mairie du Plateau, commune dynamique au cœur d\'Abidjan. Découvrez nos services, actualités et projets.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}