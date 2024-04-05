import mobileImg from "../assets/img/pexels-mobile.jpg";
import webImg from "../assets/img/pexels-pixabay-web.jpg"
import laptopImg from "../assets/img/pexels-pixabay-laptop.jpg"
import TextContent from "./TextContent";

function Showcase() {

    const showcaseText = [
        {
            title: "Fully Responsive Design",
            sub: "When you use a sub created by Start Bootstrap, you know that the sub will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
            imgStyle: {
                minHeight: "30rem",
                backgroundSize: "cover",
                backgroundImage: `url(${mobileImg})`
            }
        },
        {
            title: "Updated For Bootstrap 5",
            sub: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the subs on Start Bootstrap are now using Bootstrap 5!",
            imgStyle: {
                minHeight: "30rem",
                backgroundSize: "cover",
                backgroundImage: `url(${webImg})`
            }
        },
        {
            title: "Easy to Use & Customize",
            sub: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
            imgStyle: {
                minHeight: "30rem",
                backgroundSize: "cover",
                backgroundImage: `url(${laptopImg})`
            }
        },
    ]


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-5 order-lg-1 my-auto showcase-text">
                        <TextContent title={showcaseText[0].title} sub={showcaseText[0].sub} />
                    </div>
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={showcaseText[0].imgStyle}></div>

                </div>
                <div className="row">
                    <div className="col-lg-6 text-white" style={showcaseText[1].imgStyle}></div>
                    <div className="col-lg-6 p-5 my-auto">
                        <TextContent title={showcaseText[1].title} sub={showcaseText[1].sub} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 p-5 order-lg-1 my-auto showcase-text">
                        <TextContent title={showcaseText[2].title} sub={showcaseText[2].sub} />
                    </div>
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={showcaseText[2].imgStyle}></div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;