import Testimonials from 'react-testimonials';
function Testimonial() {

    const img1 = 'cv_bg.jpg'; // Put the Image URLs
    const img2 = 'cv_bg.jpg'; // Put the Image URLs
    const img3 = 'cv_bg.jpg';
    const review1 = [img1, "Techpile", "Company", "Put the reviews here"];
    const review2 = [img2, "Techpile", "Company", "Put the reviews here"];
    const review3 = [img3, "Techpile", "Company", "Put the reviews here"];


    const items=[review1,review2,review3];

    return (<>
        <div className="row testimonial_outer" >
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="row main_testimonial">
                <Testimonials items={items} />

                </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
    </>)
}

export default Testimonial;