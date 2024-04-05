import TextContent from "./TextContent";

const imgOne = require("../assets/img/testimonials-1.jpg");
const imgTwo = require("../assets/img/testimonials-2.jpg")
const imgThree = require("../assets/img/testimonials-3.jpg")

const testimonialData = [
    {
        img: imgOne,
        title: "Margaret E.",
        sub: `"This is fantastic! Thanks so much guys!"`
    },
    {
        img: imgTwo,
        title: "Fred S.",
        sub: `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.""`
    },
    {
        img: imgThree,
        title: "Margaret E.",
        sub: `"Thanks so much for making these free resources available to us!"`
    },
]

function Testimonial() {
    return (
        <div className="bg-light">
            <div className="container text-center p-5">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {
                        testimonialData.map((item, id) => {
                            return (
                                <div key={id} className="col-lg-4">
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-5" style={{ maxWidth: "18rem" }}>
                                        <img className="img-fluid rounded-circle mb-3" src={item.img} alt="..." style={{ maxWidth: "12rem", boxShadow: "0px 5px 5px 0px #adb5bd" }} />
                                        <TextContent title={item.title} sub={item.sub} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonial;