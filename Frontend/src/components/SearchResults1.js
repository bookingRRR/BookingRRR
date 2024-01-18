import { useState } from "react";
import { Pagination, ListGroup } from "react-bootstrap";

import { Result } from "./Result";

import "./styles/searchResultsStyles.css";

function NoSearchResults(props) {
  const searchResults = props.result;

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = searchResults.slice(startIndex, endIndex);
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="searchResults-section">
      <div className="searchResults-container">
        <h3>Search Results</h3>

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
      </div>
    </section>
  );
}

export default NoSearchResults;
