import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { HeroCard } from "../components";
import { useForm } from "../hooks";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    // if (searchText.length === 0) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
          ) : heroes.length === 0 ? (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              No hero with <b>{q}</b>
            </div>
          ) : (
            heroes.map((hero) => <HeroCard key={hero.id} {...hero} />)
          )}
        </div>
      </div>
    </>
  );
};
