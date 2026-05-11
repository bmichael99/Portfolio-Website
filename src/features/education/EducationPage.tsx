import React from 'react'
import EducationCard from './components/EducationCard'

type Props = {}

function EducationPage({}: Props) {
  return (
    <div className='w-full'>
        <h2 className='font-bold text-3xl py-4'>Education</h2>
        <hr></hr>
        <div className='py-2'>
          <EducationCard/>
        </div>
    </div>
  )
}

export default EducationPage