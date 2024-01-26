import React from 'react'

const Experience = ({lawyer,...props}) => {
    
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 ' >
        <div id="WorkExperience "  >
            <h3 className='text-white font-bold' >Work Experience </h3>

        {lawyer.workExperience.work.map((avocat,index)=>(
                <div className='mt-5 pl-4' key={index} >
                    <h4 className='text-nowrap text-white font-bold' >{avocat.business}</h4>
                    <ul className="pl-5 list-disc text-white mt-2">
                        {avocat.projects.map((project,index)=>(
                            <li key={index}>
                                {project}
                            </li>
                        ))}

                    </ul>
                </div>
        )) }    
            
            
        </div>
        <div id="WorkExperience "  >
            <h3 className='text-white font-bold' >Education </h3>

        {lawyer.workExperience.education.map((avocat,index)=>(
                <div className='mt-5 pl-4' key={index} >
                    <h4 className='text-nowrap text-white font-bold' >{avocat.business}</h4>
                    <ul className="pl-5 list-disc text-white mt-2">
                        {avocat.projects.map((project,index)=>(
                            <li key={index}>
                                {project}
                            </li>
                        ))}

                    </ul>
                </div>
        )) }    
            
            
        </div>
      
    </div>
  )
}

export default Experience
