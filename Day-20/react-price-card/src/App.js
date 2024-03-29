import PriceCard from './components/PriceCard';
import './App.css';

function App() {
  
  const timesIcon = "fa-solid fa-times fa-sm";
  const checkIcon = "fa-solid fa-check fa-sm";
  const textMuted = "text-muted";

  const plan = [
    {
      id: 1,
      accountType: "FREE",
      price: 0,
      users: "Single User",
      storage: 50,
      privateProjectIcon: timesIcon,
      privateProjectText: textMuted,
      phoneText: textMuted,
      phoneIcon: timesIcon,
      domainText: textMuted,
      domainIcon: timesIcon,
      reportText: textMuted,
      reportIcon: timesIcon,
    },
    {
      id: 2,
      accountType: "PLUS",
      price: 9,
      users: "5 Users",
      storage: 50,
      privateProjectText: "",
      privateProjectIcon: checkIcon,
      phoneText: "",
      phoneIcon: checkIcon,
      domainText: "",
      domainIcon: checkIcon,
      reportText: textMuted,
      reportIcon: timesIcon,
    },
    {
      id: 3,
      accountType: "PRO",
      price: 49,
      users: "Unlimited Users",
      storage: 50,
      privateProjectText: "",
      privateProjectIcon: checkIcon,
      phoneText: "",
      phoneIcon: checkIcon,
      domainText: "",
      domainIcon: checkIcon,
      reportText: "",
      reportIcon: checkIcon,
    }
  ];

  return (
    <div className='main'>
      <div className='container'>
        <div className='row'>
          {plan.map((data) => {
            return(
              <PriceCard key = {data.id} plan = {data}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
