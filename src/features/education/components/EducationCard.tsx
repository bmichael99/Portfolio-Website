import React from 'react'

type Props = {}

function EducationCard({}: Props) {
  return (
    <div className='grid gap-4 items-center grid-cols-[auto_1fr] py-4 px-2 hover:outline-1 rounded-3xl'>
      {/*Project Photo*/}
      <div>
        <img className='outline-1 w-[125px] h-[125px] rounded-3xl justify-self-center object-cover' src='/education/csusm_seal.jpg'></img>
        <p className='text-sm text-muted-foreground pt-2 text-center'>2018 - 2024</p>
      </div>
      {/*Project Info*/}
      <div className='w-full h-full rounded-sm flex flex-col gap-2'>
        <div>
        <h2 className='font-bold'>California State University San Marcos</h2>
          <p className='font-normal text-[15px]'>B.S in Computer Science</p>
        </div>
        <p className='text-sm text-muted-foreground'>3.4 GPA | 5x Dean's List</p>
        {/*Links*/}
        {/* <div className='flex gap-2 w-full'>
          <a className='outline-1 py-1 px-2 rounded-lg text-sm hover:bg-accent flex items-center gap-1' href={github_link} target='_blank'><GitBranch height={"14px"} width={"14px"}/> Github</a>
          {demo_link && <a className='outline-1 py-1 px-2 rounded-lg text-sm hover:bg-accent flex items-center gap-1' href={demo_link} target='_blank'><ExternalLink height={"14px"} width={"14px"}/> Live Demo</a>}
        </div> */}
      </div>
    </div>
  )
}

export default EducationCard