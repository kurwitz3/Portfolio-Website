import React from 'react'
import "../CSS/Resume.css"

const Resume = () => {
    return (
        <div className='resume'>
            <h1 className="resume__H1">Richard Kurwitz</h1>
               <p className="resume__personal-Info">Germantown, Maryland  20874 | 661-246-6861 | Kurwitz86@gmail.com</p>
            <div className="resume__info-and-links">
                   <a href="https://github.com/kurwitz3" className="devicon-github-original-wordmark"><i  aria-hidden="true"></i></a>
                   <a href="https://twitter.com/RKurwitz"  className="devicon-twitter-original"></a> 
                   <a href='https://www.linkedin.com/in/richard-kurwitz/' className="devicon-linkedin-plain"></a>
            </div>
            <section>
               <h2 className='resume__H2'>FULL STACK WEB DEVELOPER</h2>
                 <hr className='resume__Hr'></hr>
                 <p className="resume__opening-paragraph">Internally motivated self-starter seeing a position as a full-stack web developer. Eperienced in Ruby on Rails
                     and JavaScript based programming. Faithfully devout employee with strong history of dedication to employer and
                     commitment to performance.
                 </p>
            </section>
            <section>
               <h2 className='resume__H2'>TECHNICAL SKILLS</h2>
                  <hr className='resume__Hr'></hr>
                  <p className="resume__skills">Ruby, Rails, SQL, JavaScript, React, Redux, HTML, CSS</p>
            </section>
            <section>
              <h2 className='resume__H2'>TECHNICAL PROJECTS</h2>
                <hr className='resume__Hr'></hr>
                  <h3 className='resume__projectTitle'>American Outfitters</h3>
                  <p className="resume__project-description">A hunting guide service app with information about hunting services provided by the company.</p>
                    <ul className="resume__Ul">
                       <li className='resume__SElistItems'>Developed a React front end with both container and presentational components.</li>
                       <li className='resume__SElistItems'>Instituted Redux to incorporate client-side routing.</li>
                       <li className='resume__SElistItems'>Utilized a Rails API back end with a Postgres database.</li>
                       <li className='resume__SElistItems'>Incorporated Thunk middleware to handle asynchronous fetch request.</li>
                    </ul>
                  <h3 className='resume__projectTitle'>I Love IPA</h3>
                  <p className="resume__project-description">An IPA app that allows a user to review and find different IPA’s from breweries around the country.</p>
                    <ul className="resume__Ul">
                        <li className='resume__SElistItems'>Created an SPA with a vanilla JavaScript front end.</li>
                        <li className='resume__SElistItems'>Incorporated Rails API back end with Postgres database.</li>
                        <li className='resume__SElistItems'>Implemented Object Oriented JavaScript.</li>
                        <li className='resume__SElistItems'>Utilized DOM manipulation and Event Listeners. </li>
                    </ul>
            </section>
            <section>
               <h2 className="resume__H2">EXPERIENCE</h2>
                 <hr className='resume__Hr'></hr>
                   <pre>McCaslin Trucking  09/09 - 11/19</pre>
                   <pre>Certified Welder </pre>                                                    
                      <ul className="resume__Ul">
                        <li className='resume__WorklistItems'>Fabricated California D.O.T. certified highway-approved equipment from blueprint to finished project, which included all steel fabrication, axles, tires, brakes, air systems, and electrical wiring.</li>
                        <li className='resume__WorklistItems'>Maintained entire fleet of trucks and equipment for a multi-million dollar trucking operation.</li>
                        <li className='resume__WorklistItems'>Performed all emergency service for breakdowns within a 200-mile radius of the home office.</li>
                      </ul>
                   <pre>Key Energy   06/08 - 09/09</pre>
                   <pre>Oil Rig Hand</pre>
                      <ul className="resume__Ul">
                          <li className='resume__WorklistItems'>Worked on a 4-man crew ensuring great communication at all times to accomplish tasks safely and on time.</li>
                          <li className='resume__WorklistItems'>Guided explosives down well for perforation of the well wall.</li>
                          <li className='resume__WorklistItems'>Utilized heavy equipment to install and operationalize all aspects of new oil wells.</li>
                          <li className='resume__WorklistItems'>Performed maintenance on rig motor and rig equipment</li>
                      </ul>
                   <pre>Icicle Seafoods   05/07 - 05/08</pre>
                   <pre>Deparment Supervisor </pre>
                      <ul className="resume__Ul">
                          <li className='resume__WorklistItems'>Department supervisor on a fishing processor boat in the Bering Sea.</li>
                          <li className='resume__WorklistItems'>Supervised a 15-man crew responsible for packaging of salmon, opilio crab and king crab.</li>
                          <li className='resume__WorklistItems'>Implemented a rotation system on the production line, which provided cross training, boosted morale, and reduced turn over.</li>
                      </ul>
            </section>
            <section>
               <h2 className='resume__H2'>EDUCATION</h2>
                 <hr className='resume__Hr'></hr>
                   <pre>FlatIron School  08/20 - 04/21</pre>
                   <p className="resume__education">Full Stack Web Development, Ruby on Rails and JavaScript program</p><br></br>
                   <pre>Liberty High School  01 - 05</pre>                                                                 
                   <p className="resume__education">High School Graduate</p> 
            </section>                                                                      
        </div>
    )
}

export default Resume