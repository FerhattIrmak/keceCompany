import React, { useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import ProfileCard from './components/ProfileCard'
import LinkSection from './components/LinkSection'
import Footer from './components/Footer'
import profileImage from './631693365_17928943335190279_2181172716929359133_n.jpg'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.title = 'KeceCompany'

    const existingLink = document.querySelector("link[rel='icon']")
    const link = existingLink || document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/png'
    link.href = profileImage
    if (!existingLink) {
      document.head.appendChild(link)
    }
  }, [])

  // Profile configuration
  const profileData = {
    name: 'KeceCompany',
    bio: '🤝 Reklam | İş Birliği | Mekan Tanıtımı',
    image: profileImage,
    verified: true,
  }

  // Social media links
  const socialLinks = [
    {
      icon: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com/kececompany',
      // Instagram brand-like gradient
      color: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400',
    },
    {
      icon: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/kececompany?mibextid=wwXIfr&rdid=4tL8CbQVAfHN47xJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B1mcZFjM1%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio',
      // Facebook blue
      color: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
      icon: 'tiktok',
      label: 'TikTok',
      href: 'https://www.tiktok.com/@kececompany?_r=1&_t=ZS-94d6ncazIjF&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGniXiprAd7cEuyENNvk4e9uRWO9QBZs3hPscCTB_Q5Km6efvWIgvBIA23R2Gw_aem_k-VNdTgZgtP6Y5a88VM04Q',
      // TikTok dark with subtle teal accent
      color: 'bg-gradient-to-r from-black via-slate-900 to-teal-400',
    },
    {
      icon: 'youtube',
      label: 'YouTube',
      href: 'https://l.instagram.com/?u=https%3A%2F%2Fyoutube.com%2F%40kececompany%3Fsi%3DQiVISbIb1drTHRe3%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnjvnPr0Ez719gBJSawuy5FdTY3RTwBmn7Drkq8Dp_csXmXRxGmfeLrR5qxpw_aem_D_lhpXgutLu0MPhV8ee-pg&e=AT7284fkSqmSZX0NCSR0JLs1ElbVxuVLc4rUlJY846qGhqKq0lu1kqe4JIXGeEG8Pl1FaKSVNwOxJ3MwfFZ3G4HIfGm02FSCwmzBVJ-6MA',
      // YouTube red
      color: 'bg-gradient-to-r from-red-600 to-red-700',
    },
    {
      icon: 'twitter',
      label: 'Twitter / X',
      href: 'https://twitter.com/kececompany',
      // Twitter blue (X is mostly black, but blue is more recognizable)
      color: 'bg-gradient-to-r from-sky-500 to-sky-700',
    },
  ]

  // Custom links
  const customLinks = [
    {
      icon: 'whatsapp',
      label: 'WhatsApp (0546 723 53 52)',
      href: 'https://wa.me/905467235352',
      color: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400',
    },
    {
      icon: 'instagram',
      label: 'Güzellik Merkezimiz (Büşra Güzellik)',
      href: 'https://instagram.com/busraguzellikfethiye',
      color: 'bg-gradient-to-r from-amber-400 via-fuchsia-500 to-rose-500',
    },
    {
      icon: 'website',
      label: 'İş birliklerimiz, portföyümüz ve referanslarımız',
      href: '#',
      color: 'bg-gradient-to-r from-amber-300 via-purple-500 to-indigo-600',
    },
  ]

  return (
    <div className="min-h-screen transition-all duration-700 ease-in-out relative overflow-hidden bg-black">
      {/* Subtle gradient overlay with smooth transition */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-700 ease-in-out bg-gradient-to-b from-gray-900 via-black to-black opacity-100"></div>

      {/* Lottie animated background */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
        <DotLottieReact
          src="https://lottie.host/557c9c35-44f3-46e9-ad2f-f5427c7ca977/ecZITsTYMD.lottie"
          loop
          autoplay
        />
      </div>
      
      {/* Spotlight effect - animated blobs with smooth transitions */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse transition-all duration-700 z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000 transition-all duration-700 z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000 transition-all duration-700 z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float transition-all duration-700 z-10"></div>

      {/* Main content */}
      <main className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-4 md:px-6 pt-3 pb-6 md:pt-0 md:pb-3 relative z-10">
        {/* Profile Section */}
        <ProfileCard {...profileData} />

        {/* Social Media Links */}
        <LinkSection title="Sosyal Medya Hesaplarımız" links={socialLinks} />

        {/* Custom Links */}
        <LinkSection title="İletişim & Daha Fazla" links={customLinks} />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

export default App
