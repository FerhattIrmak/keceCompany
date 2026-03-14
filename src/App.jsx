import React, { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import ProfileCard from './components/ProfileCard'
import LinkSection from './components/LinkSection'
import Footer from './components/Footer'
import profileImage from './631693365_17928943335190279_2181172716929359133_n.jpg'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  // Profile configuration
  const profileData = {
    name: 'KeceCompany',
    bio: '🤝 Reklam, iş birliği ve mekan tanıtımları',
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
      href: 'https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B1mcZFjM1%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AT6h5y-6Acb5CGukd5-cMf5OGF8s6QhUbGVOsRBS0mllxHx36_ZD1NfdOGjn6iXaIuaHoC0IfQtr2HOpf0WrzQxJgDODQT1I4urtf_OqaQ',
      // Facebook blue
      color: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
      icon: 'tiktok',
      label: 'TikTok',
      href: 'https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40kececompany%3F_r%3D1%26_t%3DZS-94d6ncazIjF%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn28f2KD69gzI02R7-Qb8t4uSgTYGDwkR3ToJUk2Vi-K7cqqVx2_JTpAjkZ8w_aem_TvJmHTxim9hl5W_LMpdnuw&e=AT5ZT7OVsXBBj834gobKTLcLyIr0G0hVVM5rVtktnn2tGCioETIrN3NyyAOI7chbVPl0B8UqilXF34eD0vYfN2ni_UQ0wlVQsMzQoNlg7g',
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
      icon: 'website',
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
    <div className={`min-h-screen transition-all duration-700 ease-in-out relative overflow-hidden ${
      isDark
        ? 'bg-black'
        : 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'
    }`}>
      {/* Subtle gradient overlay with smooth transition */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ease-in-out ${
        isDark
          ? 'bg-gradient-to-b from-gray-900 via-black to-black opacity-100'
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-80'
      }`}></div>

      {/* Lottie animated background */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
        <DotLottieReact
          src="https://lottie.host/1b5cc4d9-86e2-4613-8f0f-9cd0ad6ba2a1/hM6tUPzcgL.lottie"
          loop
          autoplay
        />
      </div>
      
      {/* Spotlight effect - animated blobs with smooth transitions */}
      {isDark ? (
        <>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse transition-all duration-700 z-10"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000 transition-all duration-700 z-10"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000 transition-all duration-700 z-10"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float transition-all duration-700 z-10"></div>
        </>
      ) : (
        <>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-300 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse transition-all duration-700 z-10"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mix-blend-screen filter blur-2xl opacity-45 animate-blob animation-delay-2000 transition-all duration-700 z-10"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000 transition-all duration-700 z-10"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-200 rounded-full mix-blend-screen filter blur-2xl opacity-35 animate-float transition-all duration-700 z-10"></div>
        </>
      )}
      {/* Header with dark mode toggle */}
      <header className="p-1 flex justify-end relative z-20">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          {isDark ? (
            <svg className="w-7 h-7 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </header>

      {/* Main content */}
      <main className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-3 md:px-6 pt-0 pb-3 relative z-10">
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
