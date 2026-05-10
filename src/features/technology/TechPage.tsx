import React from 'react'
import { techList, techLabelsColored, } from '../../lib/tech'
import TechBadge from './components/TechBadge'
import TechCarousel from './components/TechCarousel'

type Props = {}


function TechPage({}: Props) {
  return (
    <div className='w-full'>
      <h2 className='font-bold text-3xl py-4'>My Tech Stack</h2>
      <hr></hr>
      {/*Change Tech Stack back to the format below if the carousel is too inconventient*/}
      {/* <div className='flex gap-4 flex-wrap py-4'>
      {techList.map((tech) => <TechBadge icon={techLabelsColored[tech].icon} label={techLabelsColored[tech].label}/>)}
      </div> */}
      <TechCarousel></TechCarousel>
    </div>
  )
}

export default TechPage