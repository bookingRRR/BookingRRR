import axios from "axios";

import "./styles/buyBooksStyles.css";
import SearchResults1 from "./SearchResults1";

import { useState } from "react";

function BuyBooks() {
  //const [submitted , setSubmitted] = useState(false);

  const [bookQuery, setBookQuery] = useState("");
  const [authorQuery, setAuthorQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleBookNameChange = (event) => {
    setBookQuery(event.target.value);
  };

  const handleAuthorNameChange = (event) => {
    setAuthorQuery(event.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    console.log("Form submitted", bookQuery, authorQuery);
    setSubmitted(true);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/getBooks?title=${bookQuery}&author=${authorQuery}`
      );

      console.log(response.data.books);

      setSearchResults(response.data.books);
    } catch (error) {
      alert("Something went wrong 😪");
    }
  };

  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Search form submitted");
  //   setSubmitted(!submitted);
  //   // setBookQuery("");
  //   // setAuthorQuery("");
  // };

  return (
    <section id="buybooks-section">
      <div className="buybooks-container">
        <h2>Looking for Books?</h2>

        <form className="buybooks-form" onSubmit={onFormSubmit}>
          <div className="buybooks-form-input-section">
            <input
              type="text"
              placeholder="Book name"
              value={bookQuery}
              onChange={handleBookNameChange}
              required
            />
            <input
              type="text"
              placeholder="Author name"
              value={authorQuery}
              onChange={handleAuthorNameChange}
            />
          </div>

          <button type="submit">Search</button>
        </form>
      </div>

      {/* {submitted && <SearchResults bookQuery={bookQuery} authorQuery={authorQuery}/>} */}

      {/* <section className="searchResults-section">
        <div className="sellbooks-container">
          {submitted && (
            <div>
              {searchResults.length === 0 ? (
                <div
                  className="listing"
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    textAlign: "center",
                  }}
                >
                  No results (:"-|)
                </div>
              ) : (
                <SearchResults1 result={searchResults} />
              )}
            </div>
          )}
        </div>
      </section> */}

      {submitted && <section className="searchResults-section">
        <div className="sellbooks-container">
            <div>
              {searchResults.length === 0 ? (
                <div
                  className="listing"
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    textAlign: "center",
                  }}
                >
                  No results 😔
                </div>
              ) : (
                <SearchResults1 result={searchResults} />
              )}
            </div>
        </div>
      </section>}
    </section>
  );
}

export default BuyBooks;
