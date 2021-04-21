import React from 'react'


const Resume = () => {
    return (
        <div className='resume'>
            <h1 className="headers">Richard Kurwitz</h1>
            <p>Germantown, Maryland 20874 | 661-246-6861 | kurwitz3@aol.com</p>
            <p><i className="devicon-github-original-wordmark"></i>kurwitz3 | <i className="devicon-twitter-original"></i>@RKurwitz | <a href='https://www.linkedin.com/in/richard-kurwitz/' class="devicon-linkedin-plain"></a> </p>
            <h2 className='headers'>FULL STACK WEB DEVELOPER</h2>
            <hr className='hr'></hr>
            <p>Internally motivated self-starter seeing a position as a full-stack web developer. Eperienced in Ruby on Rails
                and JavScript based programming. Faithfully devout employee with strong history of dedication to employer and
                commitment to performance.
            </p>
            <h2 className='headers'>TECHNICAL SKILLS</h2><hr className='hr'></hr>
            <p>Ruby, Rails, SQL, JavaScript, React, Redux, HTML, CSS</p>
            <h2 className='headers'>TECHNICAL PROJECTS</h2><hr className='hr'></hr>
            <h3 className='h3'>American Outfitters</h3>
            <p>A hunting guide service app with information about hunting services provided by the company.</p>
            <ul>
                <li className='li1'>Developed a React front end with both container and presentational components.</li>
                <li className='li1'>Instituted Redux to incorporate client-side routing.</li>
                <li className='li1'>Utilized a Rails API back end with a Postgres database.</li>
                <li className='li1'>Incorporated Thunk middleware to handle asynchronous fetch request.</li>
            </ul>
            <h3 className='h3'>I Love IPA</h3>
            <p>An IPA app that allows a user to review and find different IPA’s from breweries around the country.</p>
            <ul>
                <li className='li1'>Created an SPA with a vanilla JavaScript front end.</li>
                <li className='li1'>Incorporated Rails API back end with Postgres database.</li>
                <li className='li1'>Implemented Object Oriented JavaScript.</li>
                <li className='li1'>Utilized DOM manipulation and Event Listeners. </li>
            </ul>
            <h2 className="headers">EXPERIENCE</h2><hr className='hr'></hr>
            
            <pre>         McCaslin Trucking                                                   Shafter, California</pre>
            <pre>         Certified Welder                                                      09/2009 - 11/2019</pre>
            <ul>
              <li className='li2'>Fabricated California D.O.T. certified highway-approved equipment from blueprint to finished project, which included all steel fabrication, axles, tires, brakes, air systems, and electrical wiring.</li>
              <li className='li2'>Maintained entire fleet of trucks and equipment for a multi-million dollar trucking operation.</li>
              <li className='li2'>erformed all emergency service for breakdowns within a 200-mile radius of the home office.</li>
            </ul>
           
            <pre>         Key Energy                                                      Bakersfield, California</pre>
            <pre>         Oil Rig Hand                                                          06/2008 - 09/2009</pre>
            <ul>
                <li className='li2'>Worked on a 4-man crew ensuring great communication at all times to accomplish tasks safely and on time.</li>
                <li className='li2'>Guided explosives down well for perforation of the well wall.</li>
                <li className='li2'>Utilized heavy equipment to install and operationalize all aspects of new oil wells.</li>
                <li className='li2'>Performed maintenance on rig motor and rig equipment</li>
            </ul>
            <pre>         Icicle Seafoods                                                      Bering Sea, Alaska</pre>
            <pre>         Deparment Supervisor                                                  05/2007 - 05/2008</pre>
            <ul>
                <li className='li2'>Department supervisor on a fishing processor boat in the Bering Sea.</li>
                <li className='li2'>Supervised a 15-man crew responsible for packaging of salmon, opilio crab and king crab.</li>
                <li className='li2'>Implemented a rotation system on the production line, which provided cross training, boosted morale, and reduced turn over.</li>
            </ul>
            <h2 className='headers'>EDUCATION</h2><hr className='hr'></hr>
            <pre>         FlatIron School                                                                  Online</pre>
            <pre>         Full Stack Web Development, Ruby on Rails and JavaScript program      08/2020 - 04/2021</pre><br></br>
            <pre>         Liberty High School                                             Bakersfield, California</pre>
            <pre>         High School Graduate                                                        2001 - 2005</pre>
        </div>
    )
}

export default Resume