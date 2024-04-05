import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Heading from "./components/heading/Heading";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/Showcase";
import Testimonial from "./components/Testimonial";

function App() {

  const pageHeading = "Generate more leads with a professional landing page!"
  const headingClass = "masthead"
  const signUpHeading = "Ready to get started? Sign up now!"
  const signUpClass = "signUp"

  return (
    <div>
      <Navbar />
      <Heading  title = {pageHeading} classStyle = {headingClass}/>
      <Feature />
      <Showcase />
      <Testimonial />
      <Heading title = {signUpHeading} classStyle = {signUpClass}/>
      <Footer />
    </div>
  );
}

export default App;
