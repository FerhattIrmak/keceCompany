import React from 'react'
import SocialLinkButton from './SocialLinkButton'

export default function LinkSection({ title, links }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="mb-3 relative z-10">
      {title && (
        <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-2 text-center">
          {title}
        </h2>
      )}
      <div className="space-y-1.5">
        {links.map((link, index) => (
          <div key={index}>
            <SocialLinkButton
              icon={link.icon}
              label={link.label}
              href={link.href}
              color={link.color}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
