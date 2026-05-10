import { techLabelsColored, techList, type TechInfo } from '../../../lib/tech';
import TechBadgeLarge from './TechBadgeLarge';

function TechCarousel() {
  return (
    <div className='overflow-hidden w-full'>
      <div className='flex gap-4 w-max py-4 custom-scroll pr-4'> {/*pr-4 adds 16px to the end of the container to line up the animation with the gap spacing so that the animation doesn't jump */}
        {techList.map((tech,i) => <TechBadgeLarge icon={techLabelsColored[tech].icon} label={techLabelsColored[tech].label} key={i}/>)}
        {techList.map((tech,i) => <TechBadgeLarge icon={techLabelsColored[tech].icon} label={techLabelsColored[tech].label} key={i}/>)}
      </div>
    </div>
  )
}

export default TechCarousel