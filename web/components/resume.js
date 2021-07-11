import Link from 'next/link'
import React from 'react'

function ResumePDF() {
  return (
    <div className='resume__row'>
      <div className='resume__title'>
        <h1>Resume</h1>
      </div>
      <div className='resume__PDF'>
        <p>
          Download the PDF version{' '}
          <Link href=''>
            <a>here.</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className='resume__row'>
      <div className='resume__title'>
        <h3>Experience</h3>
      </div>
      <div className='resume__info'>
        <div className='resume__entry'>
          <p>
            Freelance Web Developer
            <br />
            Mar 2020 - Present | Brooklyn, NY
          </p>
          <p>
            Worked collaboratively with clients to create and implement digital
            solutions to achieve clients' goals.
          </p>
        </div>
        <div className='resume__entry'>
          <p>
            Full-stack Web Developer - Consultant @ Miramom
            <br />
            Mar 2019 - Aug 2021 | Brooklyn, NY
          </p>
          <p>
            Worked with a small team to develop the client-side of the web
            application using React.js. Built and integrated RESTful APIs using
            Node.js, Express, and PostgreSQL.
          </p>
        </div>
        <div className='resume__entry'>
          <p>
            Full-stack Web Developer - Intern @ Miramom
            <br />
            Dec 2018 - Mar 2019 | Brooklyn, NY
          </p>
          <p>
            Worked in collaboration with the CEO to modernize and enhance
            Mirmom's current WordPress legacy website into a full-stack web
            application, using React, Node, and Express.
          </p>
        </div>
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className='resume__row'>
      <div className='resume__title'>
        <h3>Education</h3>
      </div>
      <div className='resume__info'>
        <div className='resume__entry'>
          <p>
            New York City College of Technology - BTECH Computer Systems
            <br />
            2018 | Brooklyn, NY
          </p>
          <p>
            Key Courework: Programming Fundementals, Database Fundementals, Web
            Programming I & II, Web Services Architecture, Application
            Development with Databases, Object Orientated Programming - Java.
          </p>
        </div>
        <div className='resume__entry'>
          <p>
            Udacity - Cloud Developer NanoDegree
            <br />
            2021 | Remote
          </p>
          <p>
            Learned the fundamentals of cloud development and deployment with
            AWS. Built applications, leveraging microservices, Kubernetes
            clusters, and serverless application technology.
          </p>
        </div>
        <div className='resume__entry'>
          <p>
            Codecademy - Build Front-End Web Applications from Scratch
            <br />
            2018 | Remote
          </p>
          <p>
            Learned the fundamentals of building web applications using the
            front-end library React.
          </p>
        </div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div className='resume__row'>
      <div className='resume__title'>
        <h3>Skills</h3>
      </div>
      <div className='resume__info resume__skills'>
        <div className='resume__entry'>
          <p>Languages</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript*</li>
            <li>Java*</li>
            <li>Python*</li>
          </ul>
        </div>
        <div className='resume__entry'>
          <p>Frameworks</p>
          <ul>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
            <li>React & React Native*</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
        <div className='resume__entry'>
          <p>Tools</p>
          <ul>
            <li>Git</li>
            <li>NPM, Yarn</li>
            <li>Sanity.io</li>
            <li>AWS*</li>
            <li>WordPress*</li>
            <li>Firebase*</li>
          </ul>
        </div>
        <div className='resume__entry'>
          <p>Design Tools</p>
          <ul>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Invision</li>
          </ul>
        </div>
        <div className='disclaimer'>
          <p className='text-gray-500'>
            * I have some exposure with these technologies, but I am still
            learning them and may need to brush up on them.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <section className='resume-container'>
      <ResumePDF />
      <Experience />
      <Skills />
      <Education />
    </section>
  )
}
