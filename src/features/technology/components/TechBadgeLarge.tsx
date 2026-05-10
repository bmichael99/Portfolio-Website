import React from 'react'
import { type TechInfo } from '../../../lib/tech'

function TechBadgeLarge({icon,label}: TechInfo) {
  return (
    <div className='flex flex-col items-center gap-2 outline-accent p-2 box-content rounded-lg text-sm shrink-0'>
      <div className='w-16 h-16 fill-white'>
          {icon}
      </div>
      <div className='font-medium'>{label}</div>
    </div>
  )
}

export default TechBadgeLarge