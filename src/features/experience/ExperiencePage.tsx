import React from 'react'
import ExperienceCard from './components/ExperienceCard'

type Props = {}

function ExperiencePage({}: Props) {
  return (
    <div className='w-full'>
        <h2 className='font-bold text-3xl py-4'>Experience</h2>
        <hr></hr>
        <div className='py-2'>
        <ExperienceCard/>
        </div>
    </div>
  )
}

export default ExperiencePage