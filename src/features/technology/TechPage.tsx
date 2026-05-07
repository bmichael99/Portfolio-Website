import React from 'react'
import { techList, techLabelsColored, } from '../../lib/tech'
import TechBadge from './components/TechBadge'

type Props = {}


function TechPage({}: Props) {
  return (
    <div className='w-full'>
        <h2 className='font-bold text-3xl py-4'>Technology</h2>
        <hr></hr>
        <div className='flex gap-4 flex-wrap py-4'>
        {techList.map((tech) => <TechBadge icon={techLabelsColored[tech].icon} label={techLabelsColored[tech].label}/>)}
        </div>
    </div>
  )
}

export default TechPage