//importo useState e axios
import { useState } from "react";
import axios from "axios";

// link
const link = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function Main() {
  // creo l'oggetto con dentro i valori delle proprietà
  const initialFormAuthors = {
    author: "",
    title: "",
    body: "",
    public: false,
  };

  // la variabilie di stato
  const [formAuthors, setformAuthors] = useState(initialFormAuthors);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // creo il nuovo oggetto una volta destrutturato e.target
    const newObj = {
      ...formAuthors,
      [name]: type === "checkbox" ? checked : value,
    };
    //uso il nuovo oggetto
    setformAuthors(newObj);
  };

  return (
    <div className="container m-5">
      <div className="row">
        <form>
          <div className="mb-3 col-5">
            <div className="">Autore</div>
            <input
              type="text"
              name="author"
              placeholder=""
              value={formAuthors.author}
              onChange={(e) => {
                setformAuthors(e.target.value);
              }}
              className="form-control"
            />
            <div id="" className="form-text">
              Per piacere riempire il campo indicato
            </div>
          </div>
          <div className="mb-3 col-5">
            <div className="">Titolo</div>
            <input
              type="text"
              name="title"
              placeholder=""
              value={formAuthors.title}
              onChange={(e) => {
                setformAuthors(e.target.value);
              }}
              className="form-control"
            />
            <div id="" className="form-text">
              Per piacere riempire il campo indicato
            </div>
          </div>
          <div className="mb-5 col-5">
            <div className="">Articolo</div>
            <input
              type="text"
              name="body"
              placeholder=""
              value={formAuthors.body}
              onChange={(e) => {
                setformAuthors(e.target.value);
              }}
              className="form-control"
            />
            <div className="form-text">
              Per piacere riempire il campo indicato
            </div>
          </div>
          <hr />
          <div className="mb-5 form-check">
            <input type="checkbox" className="form-check-input" />
            <div className="form-check-label">Pubblica</div>
            <input type="checkbox" className="form-check-input" />
            <div className="form-check-label">Bozza</div>
          </div>
          <button type="submit" className="btn btn-success">
            Invia
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
