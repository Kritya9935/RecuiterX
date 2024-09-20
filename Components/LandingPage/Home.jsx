  import Typewriter from 'typewriter-effect';
  import Category from './Category';
  import Resumes from './Resumes';
  import  Apply from './Apply'; 
  import Testimonial from './Testimonial';
function Home(){
  

    return (<>
     <div className="container-fluid">
      {/* start of hero section */}
        <div className="row  hero_section" >
             <div className="col-sm-2"></div>
             <div className="col-sm-5 pt-5">
<h1 className='typewriter_hero'> 
<Typewriter
  options={{
    strings: ['Find the most exciting startup jobs'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
             </div>
             <div className="col-sm-5"></div>
        </div>
      {/* category section */}
       <Category/>
       <Resumes/>
       <Apply/>
       <Testimonial/>
     </div>
    </>)
}

export default Home;