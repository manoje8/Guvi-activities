import data from "./assets/data/coursedata";
import Cards from "./model/Cards";

const Cyber = () => (
    <Cards>
        {
            data.filter(val => val.title === "cyber-security")
                .map((val, id) => (
                    <div key={id} className='col'>
                        <img className='img' src={val.image} alt='404' />
                        <p><b>{val.name}</b></p>
                        <p className="author">By {val.author}</p>
                        <div className="duration">
                            <p>{val.date}</p>
                            <p>{val.time}</p>
                        </div>
                    </div>

                ))
        }
    </Cards>
)

export default Cyber;