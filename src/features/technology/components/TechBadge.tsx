import React from 'react'
import type { TechInfo } from '../../../lib/tech'

function TechBadge({icon,label}: TechInfo) {
  return (
    <div className='flex items-center gap-2 outline-1 outline-accent outline-dashed px-2 py-1 rounded-lg text-sm'>
        <div className='w-4 h-4 fill-white'>
            {icon}
        </div>
        {label}
    </div>
  )
}

export default TechBadge