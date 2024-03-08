import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>Bem vindo pagina Home</h1>
        <Link to="/about">About</Link> <br/>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
  export default Home;
  