import React from 'react'

export default function ProfileCard({ name, bio, image, verified = false }) {
  return (
    <div className="text-center pt-1 pb-2 relative z-10">
      {/* Profile Image - spotlight style */}
      <div className="flex justify-center mb-3">
        <div className="relative group">
          <img
            src={image || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'}
            alt={name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover shadow-lg dark:shadow-black/50 transition-all duration-500 hover:shadow-xl group-hover:scale-105"
          />
          {verified && (
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-1.5 shadow-lg ring-2 ring-white dark:ring-gray-900 animate-shimmer">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Name and Bio - bold magazine style */}
      <div className="mb-3 max-w-2xl mx-auto">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:to-gray-100 dark:via-white bg-clip-text text-transparent mb-1 leading-tight tracking-tight">
          {name || 'Adınız'}
        </h1>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-snug font-medium">
          {bio || 'Kendiniz hakkında kısa bir bilgi yazın'}
        </p>
      </div>
    </div>
  )
}
