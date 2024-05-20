import './SoftSkills.scss'

export const SoftSkills = () => {
  return (
    <section className='soft'>

        <div className='soft-card soft-card-coder animate__animated animate__slideInUp'>
        <img className="soft-card-icon" src="images/soft_coder.svg" alt='as coder' />
        <h3 className='soft-card-title soft-card-title-coder'>As Coder</h3>
        <ul className='soft-card-list soft-card-list-coder'>
            <li className='soft-card-list-item'>Analytical</li>
            <li className='soft-card-list-item'>Good co-worker</li>
            <li className='soft-card-list-item'>Creative</li>
            <li className='soft-card-list-item'>Passionate</li>
            <li className='soft-card-list-item'>Clear thinking</li>
            <li className='soft-card-list-item'>Persistent</li>
        </ul>
        </div>

        <div className='soft-card soft-card-designer animate__animated animate__slideInUp animate__delay-2s'>
        <img className="soft-card-icon" src="images/soft_designer.svg" alt='as coder' />
        <h3 className='soft-card-title soft-card-title-designer'>As Designer</h3>
        <ul className='soft-card-list soft-card-list-designer'>
            <li className='soft-card-list-item'>Creative and actual Desings</li>
            <li className='soft-card-list-item'>Responsive layouts</li>
            <li className='soft-card-list-item'>Mobile First</li>
            <li className='soft-card-list-item'>UX/UI design</li>
            <li className='soft-card-list-item'>Interaction design</li>
            <li className='soft-card-list-item'>Research</li>
        </ul>
        </div>

        <div className='soft-card soft-card-nispot animate__animated animate__slideInUp animate__delay-3s'>
        <img className="soft-card-icon" src="images/soft_nispot.svg" alt='as coder' />
        <h3 className='soft-card-title soft-card-title-nispot'>As Me</h3>
        <ul className='soft-card-list soft-card-list-nispot'>
            <li className='soft-card-list-item'>Curious</li>
            <li className='soft-card-list-item'>Lover Self-Learning</li>
            <li className='soft-card-list-item'>I drink a lot of coffee</li>
            <li className='soft-card-list-item'>I love to listen music, to gym, 
  to cook (and eat)</li>
        </ul>
        </div>

    </section>
  )
}
