
import { Development, IT_Value, Quality, Team } from '../libs/contanst';
import style from '../styles/learning.module.css';

export const Learning = () => {
 
  var divStyle = {
    backgroundImage: 'url(' + "https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988563/TheBestColleges.org/images/study-active-recall.jpg" + ')',
  };
  var divStyle1 = {
    backgroundImage: 'url(' + 'https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988563/TheBestColleges.org/images/study-active-recall.jpg' + ')',
  };
  var divStyle2 = {
    backgroundImage: 'url(' + 'https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988563/TheBestColleges.org/images/study-active-recall.jpg' + ')',
  };
  const data = [
    {
      image: divStyle,
      content: "  Quality defines us. We provide high quality \n Apps and  Websites. The main thing behind \n building a good business is Goodwill.We get\n a 4.5 star  rating and also have many  \n positive reviews on google.",
     title : Quality
    },
    {
      image: divStyle1,
      content: " Teamwork is the ability to work together toward a common vision.We are small Team doing big Things. We work on Agile methodology which accelerates the achievement of task easily.",
      title : Team
    },
    {
      image: divStyle2,
      content: "  We develop native as well as hybrid apps for both android and iOS platforms.A native vs hybrid app is an applicationdeveloped to fully comply with the requirements  of a particular operating system.",
      title : Development
    }
    ]
 

  return (
    <div>
         
      <section id='section-2'>
        <div className={style.section1}>
         <div className={style.heading}><h4 className='p-4'>{IT_Value}</h4> </div>
          
          <div className={style.box}>
            {data.map((item :any)=>{ console.log(item.image)
              return (
                <div className={`${style.parent}  `}  >
               <div className={style.thumb} style={item.image}> 
                  <div className={style.anim}>
                    <div className={style.opcity} >
                      <div className={style.title} >

                        <p>{item.title}</p>
                        <div className={style.description}>
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
   
  )
}
export default Learning;
