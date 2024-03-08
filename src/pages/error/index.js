import { Link } from "react-router-dom";

function Error() {
    return (
      <div>
        <h1>Oops esta pagina nao existe!!</h1>
        <Link to="/">Home</Link> <br/>
      </div>
    );
  }
export default Error;