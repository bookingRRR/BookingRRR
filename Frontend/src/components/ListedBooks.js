import axios from "axios";

import { useState } from "react";
import { Pagination, ListGroup } from "react-bootstrap";
import Listing from "./Listing";
import "./styles/listedBooksStyles.css";


function ListedBooks(props) {
  //for getting the listings
  const listings = props.listings;
  const updateListings = props.updateListings;

  // //initial call to the server
  // let listings1 = [];//this stores the result of the first call to the backend
  // useEffect(async() => {
  //   const response = await axios.get(`http://localhost:4000/api/getBooksEmail?email=${localStorage.getItem("userEmail")}`);
  //   const data = response.data.books
  //   setListings(data)

  // },[])
  // // async function getListings() {
  // // }
  // // getListings();

  //update the listings array on deletion
  const handleDelete = async (idToBeDeleted) => {

    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}api/deleteBookById?id=${idToBeDeleted}`
      );


      updateListings();
    } catch (error) {
      alert("Something went wrong 😪");
    }
  };

  // const handleMap = () => {
  //   const ret = listings.map((res) => {
  //     return (
  //       <ListGroup>
  //         <ListGroup.Item className="listing">
  //           <Listing
  //             id={res._id}
  //             title={res.title}
  //             author={res.author}
  //             edition={res.edition}
  //             contact={res.contact}
  //             condition={res.condition}
  //             onDelete={handleDelete}
  //           />
  //         </ListGroup.Item>
  //       </ListGroup>
  //     );
  //   });

  //   return ret;
  // };

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = listings?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(listings?.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="listedBooks-section">
      <div className="listedBooks-container">
        <div className="listings">
          {currentItems?.map((res) => {
            return (
              <ListGroup>
                <ListGroup.Item className="listing">
                  <Listing
                    id={res._id}
                    title={res.title}
                    author={res.author}
                    edition={res.edition}
                    contact={res.contact}
                    condition={res.condition}
                    onDelete={handleDelete}
                  />
                </ListGroup.Item>
              </ListGroup>
            )
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

export default ListedBooks;
