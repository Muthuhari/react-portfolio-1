import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'


const data =[
{
   id:1,
   image: IMG2,
   title: 'Portfolio website',
   github: 'https://github.com/Muthuhari/react-portfolio-1',
   
},

{id:1,
  image: IMG2,
  title: 'Lung Sounds Classification System',
  github: 'https://github.com/Muthuhari/lung-sounds-classification-system',
  
},
{id:1,
  image: IMG3,
  title: 'SAMPLE',
  github: 'https://github.com/Muthuhari',
},
 
{id:1,
  image: IMG4,
  title: 'SAMPLE',
  github: 'https://github.com/Muthuhari',
},
  
{id:1,
  image: IMG5,
  title: 'SAMPLE',
  github: 'https://github.com/Muthuhari',
},
  
{id:1,
  image: IMG6,
  title: 'SAMPLE',
  github: 'https://github.com/Muthuhari',
},
  

]





const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id}className='portfolio__item'>
          <div className="portfolio__item-item">
            <img src={image} alt={title}/>
          </div>
          <h3>{title} </h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
          </div>
          </article>

          )
        }
        
        )
       }

        


       </div>
      
    </section>
  )
}

export default Portfolio