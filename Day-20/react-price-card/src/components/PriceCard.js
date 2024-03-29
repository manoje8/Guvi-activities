import './PriceCard.css';

function PriceCard({plan}){
    const accountType = plan.accountType;
    const price = plan.price;
    const users = plan.users;
    const storage = plan.storage;

    const checkIcon = "fa-solid fa-check fa-sm"

    return(
        <div className="col col-sm-3">
            <div className="card bg-light" style={{minWidth: "12rem", maxWidth:"20rem"}}>
                <div className="card-header bg-transparent">
                    <p className='text-muted' style={{fontSize:"12px", fontWeight:"bold"}}>
                        {accountType}
                    </p>
                    <h3>${price}/month</h3>
                </div>
                <div className="card-body">
                    <ul>
                        <li>
                            <i className={checkIcon}></i>
                            {users}
                        </li>
                        <li>
                            <i className={checkIcon}></i>
                            {storage} GB Storage
                        </li>
                        <li>
                            <i className={checkIcon}></i>
                            Unlimited Public Projects
                        </li>
                        <li>
                            <i className={checkIcon}></i>
                            Community Access
                        </li>
                        <li className={plan.privateProjectText}>
                            <i className={plan.privateProjectIcon}></i>
                            Unlimited Private Projects
                        </li>
                        <li className={plan.phoneText}>
                            <i className={plan.phoneIcon}></i>
                            Dedicated Phone Support
                        </li>
                        <li className={plan.domainText}>
                            <i className={plan.domainIcon}></i>
                            Free Subdomain
                        </li>
                        <li className={plan.reportText}>
                            <i className={plan.reportIcon}></i>
                            Monthly Status Report
                        </li>
                    </ul>
                </div>
                <button className="btn">BUTTON</button>
            </div>
        </div>
    )
}

export default PriceCard;