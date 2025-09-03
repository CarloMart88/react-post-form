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
  // creo la variabile per settare l'alert
  const [alert, setAlert] = useState("");

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

  //creo l' handleSubmit in modo da poter inviare tramite post il nuovo oggetto
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(link, formAuthors)
      .then((resp) => {
        console.log("invio dei dati riuscito " + resp.data);
        setformAuthors(initialFormAuthors);
        // adesso setto l'alert
        setAlert({
          show: true,
          status: "success",
          text: "richiesta inviata con successo",
        });
      })
      .catch((err) => {
        console.log("Errore invio dati" + err);
        setAlert({
          show: true,
          status: "error",
          text: "Errore nell'invio della richiesta",
        });
      });
  };

  return (
    <div className="container m-5">
      <div className="row">
        {/* inserisco l'alert */}
        {alert.show && (
          <div className={`bg bg-${alert.status} m-3 text-center col-6`}>
            {alert.text}
          </div>
        )}
        {/* campo delle form input */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3 col-8">
            <div className="my-3">Autore</div>
            <input
              type="text"
              name="author"
              placeholder="..."
              value={formAuthors.author}
              onChange={handleChange}
              className="form-control"
            />
            <div id="" className="form-text">
              Per piacere riempire il campo indicato
            </div>
          </div>
          <div className="mb-3 col-8">
            <div className="my-3">Titolo</div>
            <input
              type="text"
              name="title"
              placeholder="..."
              value={formAuthors.title}
              onChange={handleChange}
              className="form-control"
            />
            <div id="" className="form-text">
              Per piacere riempire il campo indicato
            </div>
          </div>
          <div className="mb-5 col-8">
            <div className="my-3">Articolo</div>
            <input
              type="text"
              name="body"
              placeholder="..."
              value={formAuthors.body}
              onChange={handleChange}
              className="form-control"
            />
            <div className="form-text">
              Per piacere riempire il campo indicato
            </div>
          </div>
          <hr />

          {/* campo delle form checkbox */}
          <div className="mb-5 form-check">
            <input
              type="checkbox"
              name="public"
              id="public"
              checked={formAuthors.public}
              onChange={handleChange}
              className="form-check-input"
            />
            <div className="form-check-label">Pubblica</div>
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
