import "./Feature.css"
import TextContent from "../TextContent";

function Feature() {
    const feature = [
        {
            id: 1,
            icon: "bi-window m-auto text-primary",
            title: "Fully Responsive",
            sub: "This sub will look great on any device, no matter the size!"
        },
        {
            id: 2,
            icon: "bi-layers m-auto text-primary",
            title: "Bootstrap 5 Ready",
            sub: "Featuring the latest build of the new Bootstrap 5 framework!"
        },
        {
            id: 3,
            icon: "bi-terminal m-auto text-primary",
            title: "Easy to Use",
            sub: "Featuring the latest build of the new Bootstrap 5 framework!"
        }
    ]

    return (
        <div className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    {feature.map((item) => {
                        return (
                            <div key={item.id} className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">
                                        <i className={item.icon}></i>
                                    </div>
                                    <TextContent title = {item.title} sub = {item.sub}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Feature;