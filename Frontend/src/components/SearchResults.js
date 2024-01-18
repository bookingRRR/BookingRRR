import { Result } from "./Result";
import { useState } from "react";
import { Pagination, ListGroup } from "react-bootstrap";
import axios from "axios";
import "./styles/searchResultsStyles.css";

// const dummysearchResults = [
//   {
//     id: 1,
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     edition: 1951,
//     contact: "john.doe@example.com",
//     condition: "Like New",
//   },
//   {
//     id: 2,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     edition: 1960,
//     contact: "jane.smith@example.com",
//     condition: "Good",
//   },
//   {
//     id: 3,
//     title: "1984",
//     author: "George Orwell",
//     edition: 1949,
//     contact: "bob.jones@example.com",
//     condition: "Very Good",
//   },
//   {
//     id: 4,
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     edition: 1925,
//     contact: "mary.wilson@example.com",
//     condition: "Like New",
//   },
//   {
//     id: 5,
//     title: "Brave New World",
//     author: "Aldous Huxley",
//     edition: 1932,
//     contact: "sam.brown@example.com",
//     condition: "Acceptable",
//   },
//   {
//     id: 6,
//     title: "Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     edition: 1954,
//     contact: "emma.davis@example.com",
//     condition: "Acceptable",
//   },
//   {
//     id: 7,
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     edition: 1813,
//     contact: "chris.evans@example.com",
//     condition: "Like New",
//   },
//   {
//     id: 8,
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     edition: 1937,
//     contact: "olivia.white@example.com",
//     condition: "Very Good",
//   },
//   {
//     id: 9,
//     title: "The Shining",
//     author: "Stephen King",
//     edition: 1977,
//     contact: "alex.miller@example.com",
//     condition: "Like New",
//   },
//   {
//     id: 10,
//     title: "The Da Vinci Code",
//     author: "Dan Brown",
//     edition: 2003,
//     contact: "michael.jordan@example.com",
//     condition: "Good",
//   },
// ];

function SearchResults(props) {
  const bookQuery = props.bookQuery;
  const authorQuery = props.authorQuery;

  //for performing the search based on the queries received

  const [searchResults, setSearchResults] = useState([]);

  //res will receive the results from the backend
  async function getSearchResults() {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/getBooks?title=${bookQuery}&author=${authorQuery}`
    );
    setSearchResults(res);
  }
  getSearchResults();

  const empty = searchResults.length === 0;

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  let currentItems = [];

  if (searchResults.length > 0) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    currentItems = searchResults.slice(startIndex, endIndex);
  }

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="searchResults-section">
      <div className="searchResults-container">
        <h3>Search Results</h3>

        {empty ? (
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
          <div className="results">
            {currentItems.map((res) => {
              return (
                <ListGroup>
                  <ListGroup.Item className="result">
                    <Result
                      id={res.id}
                      title={res.title}
                      author={res.author}
                      edition={res.edition}
                      contact={res.email}
                      condition={res.condition}
                    />
                  </ListGroup.Item>
                </ListGroup>
              );
            })}
          </div>
        )}

        {empty ? (
          <div></div>
        ) : (
          <div className="pagination-container">
            <Pagination>
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        )}

        {/* <div className="pagination-container">
          <Pagination>
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div> */}
      </div>
    </section>
  );
}

export default SearchResults;
