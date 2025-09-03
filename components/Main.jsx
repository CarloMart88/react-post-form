import React from "react";

function Main() {
  return (
    <div className="container m-5">
      <div className="row">
        <form>
          <div className="mb-3 col-5">
            <div className="">Autore</div>
            <input type="text" className="form-control" />
            <div id="" className="form-text">
              Per piacere riempire il campo indicato
            </div>
          </div>
          <div className="mb-3 col-5">
            <div className="">Titolo</div>
            <input type="text" className="form-control" />
            <div id="" className="form-text">
              Per piacere riempire il campo indicato
            </div>
          </div>
          <div className="mb-5 col-5">
            <div className="">Articolo</div>
            <input type="text" className="form-control" />
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
