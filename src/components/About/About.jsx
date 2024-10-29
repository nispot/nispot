import { SoftSkills } from '../SoftSkills/SoftSkills'
import './About.scss'

export const About = () => {
  return (
    <div className='container'>

      < h2 className='title-section'> {`<AboutMe/>`} </h2>

      <div className='info-about'>
        <div className='about-left  animate__animated animate__slideInLeft'>
          <p className='studies'>Js Fullstack Developer<br />
            <span style={{ fontSize: "28px" }}>Js Fontend Specialist</span><br />
            <span className='small-text'>Business Administration</span></p>

          <div className='grid'>
            <div className='grid-left'>
              <p><span className='text-color'>Name:</span> Nicolás Arichuluaga</p>
              <p><span className='text-color'>Email:</span> nicoarichu@gmail.com</p>
              <div className='cv-button'><a href='CV_Nicolas Arichuluaga.pdf' target='_blank' className='rounded-button'><img className="download-icon" src="images/download.svg" alt='download' /> Resume</a></div>

            </div>
            <div className='grid-right'>
              <p><span className='text-color'>Age:</span> 44 years</p>
              <p><span className='text-color'>Location:</span> Mexico City</p>
            </div>
          </div>
        </div>
        <div className='about-right animate__animated animate__slideInRight'>
          <div className='text-about' >
            <p>

              My name is Nicolás.<br />
              I’m an argentinian creative developer based in Mexico City.<br />
              I’ve been working with web technologies for more than 10 years.<br />
              I’m a dreamer person who thinks to change the future imagining and writing code.<br />
              Passionate Frontender with a solid track record of leading teams to success in web development projects.<br />
              Seeking opportunities to apply my technical and managerial skills in a dynamic environment that values innovation and professional growth.<br /><br />
            </p>
            <p>
              Don’t be afraid to reach out on Instagram or Whatsapp.
            </p>
          </div>
        </div>
      </div>

      <SoftSkills />
      <div className='space'></div>
    </div>
  )
}
