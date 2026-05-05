import './App.css'
import ProjectPage from './features/projects/ProjectPage';


function App() {
  const linkedInURL = 'https://www.linkedin.com/in/michael-brandmeyer-6a684120b/';
  const gitHubURL = 'https://github.com/bmichael99'
  const resumeURL = ''

  return (
    <div className='flex justify-center min-h-svh p-6'>
      <div className='max-w-4xl'>
        {/*Header*/}
        <header className='w-full py-4'>
          <div className='grid gap-8 sm:gap-4 grid-cols-1 sm:grid-cols-2'>
            {/*Left Side Header*/}
            <div className='flex flex-col gap-2'>
              <h1 className='pt-4 text-3xl font-medium'>Michael Brandmeyer</h1>
              <p className='text-muted-foreground'>Software Engineer developing full-stack applications and building business workflow automations. Interested in scalable backend systems and low-level programming.</p>
              {/*Socials*/}
              <div className='flex gap-2'>
                <a href={linkedInURL} target="_blank">Linkedin</a>
                <a href={gitHubURL} target="_blank">GitHub</a>
                <a href={resumeURL} target="_blank">Resume</a>
              </div>
            </div>
            {/*Right Side Header*/}
            <div className='flex justify-center items-center'>
                <img className="rounded-3xl w-[350px] max-h-[250px] object-cover object-[50%_25%]" src="/about/Michael_Brandmeyer.jpg" alt="Michael Brandmeyer" />
            </div>
            
          </div>
        </header>
        <ProjectPage>
          
        </ProjectPage>
      </div>
    </div>
  )
}

export default App
