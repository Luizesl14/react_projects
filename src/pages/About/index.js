import { Link } from "react-router-dom";

function About() {
    return (
      <div>
        <h1>Bem vindo pagina About</h1>
        <Link to="/">Home</Link> <br/>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
export default About;