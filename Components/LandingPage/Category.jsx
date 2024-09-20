function Category(){

    const category_arr=[
        {
            img:"1.png",
            title:"test",
            cout:  "(631)"
        },
        {
            img:"1.png",
            title:"test",
            cout:  "(631)"
        },
        {
            img:"1.png",
            title:"test",
            cout:  "(631)"
        },{
            img:"1.png",
            title:"test",
            cout:  "(631)"
        },
        {
            img:"1.png",
            title:"test",
            cout:  "(631)"
        },
        {
            img:"1.png",
            title:"test",
            cout:  "(631)"
        },{
            img:"1.png",
            title:"test",
            cout:  "(631)"
        },{
            img:"1.png",
            title:"test",
            cout:  "(631)"
        }
    ]
 return(<>
    <div className="row categoty_outer">
     <div className="col-sm-1"></div>
     <div className="col-sm-10">
        <div className="row child_row">
            <center>
                <span className="category_feature">FEATURED TOUR PACKAGES</span>
                <h1 className="category_h1">Browse Top Categories</h1>
                <div className="row category_outer_box">
            { 
             category_arr.map((item)=>{
                return(<>
                <div className="col-sm-3 mb-0 card_category"> 
                <div className="child_div">test</div> 
                </div>
              
                </>)
             })
             }
                </div>
            </center>
        </div>
     </div>
     <div className="col-sm-1"></div>
    </div>
 </>)
}

export default Category;