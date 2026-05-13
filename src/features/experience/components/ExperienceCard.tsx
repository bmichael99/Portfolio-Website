import { useState } from 'react'
import TechBadge from '../../technology/components/TechBadge'
import { techLabelsColored, type TechList } from '../../../lib/tech'

type Props = {}

const technology_used : TechList[] = ['javascript', 'typescript', 'react', 'tailwindcss', 'nodejs',  'express', 'postgresql', 'azure', 'github_actions', 'git']

const full_description = ['Led the end-to-end development of an AI and ML-powered finance intelligence platform for daily use by Adantas finance team, presenting architectural decisions and measurable outcomes to stakeholders while successfully reducing manual accounting by 8+ hours per week per accountant.', 'Designed a backend service using Node.js to integrate the companys accounting file system in SharePoint with Azure Machine Learning, transforming thousands of unstructured invoices and receipts into structured SQL records.', 'Developed a full-stack analytics website (React, Express) with an integrated AI chatbot that enabled stakeholders to query invoice data, analyze financial metrics, and generate reports.', 'Implemented a data verification layer in React for verifying extracted financial data that allowed the finance department to view financial documents alongside extracted data and confidence scores to ensure data accuracy while reducing manual bookkeeping by 90%.']

function ExperienceCard({}: Props) {
  const [viewDetails,setViewDetails] = useState<boolean>(false);
  return (
    <div className='grid gap-4 items-start xs:grid-cols-[auto_1fr] py-4 px-2 hover:outline-1 rounded-3xl'>
      {/*Project Photo*/}
      <div className='flex flex-col items-center max-xs:hidden'>
        <img className='outline-1 w-[125px] h-[125px] rounded-3xl justify-self-center object-cover' src='/experience/adanta_logo.jpg'></img>
        <p className='text-sm text-muted-foreground pt-2 text-center'>Aug 2025 - Present</p>
      </div>
      {/*Project Info*/}
      <div className='w-full h-full rounded-sm flex flex-col gap-2 items-start'>
        <div>
        <h2 className='font-bold'>Adanta</h2>
          <p className='font-normal text-[15px]'>Software Engineer | Contracted</p>
        </div>
        <p className='text-sm text-muted-foreground'>Building business workflow automations and tooling using full-stack technologies.</p>
        <button className='text-sm underline' onClick={() => setViewDetails((curr) => !curr)}>{viewDetails ? 'View Less' : 'View More'}</button>
        <ul className={`list-disc pl-5 text-[15px] ${!viewDetails && 'hidden'}`}>
          {full_description.map((bullet) => <li className='pb-2'>{bullet}</li>)}
        </ul>
        <div className='flex gap-2 w-full pb-4 flex-wrap self-end'>
            {technology_used?.map((tech) => <TechBadge icon={techLabelsColored[tech].icon} label={techLabelsColored[tech].label}></TechBadge>)}
          </div>
      </div>
    </div>
  )
}

export default ExperienceCard