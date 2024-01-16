import "./styles/sellBooksStyles.css";
import ListedBooks from "./ListedBooks";
import axios from "axios";
import { useState } from "react";

//first call for initial render
// let initialListings = [];

const getListings = async () => {
  try {
    console.log(process.env.REACT_APP_BASE_URL)
    console.log("Get Call");
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}api/getBooksEmail?email=${localStorage.getItem(
        "userEmail"
      )}`
    );

    return response.data.books;

  } catch (error) {
    alert("Something went wrong [:-(]");
  }
};

let flag = true;


function SellBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [condition, setCondition] = useState("Like New");


  

  const [listings, setListings] = useState([]);
  console.log(typeof listings);
  console.log(listings);

  const initCall = async () => {
    const res = await getListings();
    setListings(res);
  };

  if(flag){
    initCall();
    flag = false;
  }
  

  


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleEditionChange = (event) => {
    setEdition(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const updateListings = async () => {
    alert("Deleted!");
    const newListings = await getListings();
    setListings(newListings);
  }


  //after submission of the form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let submittedData = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/addBook`,
        {
          title: title,
          author: author,
          edition: edition,
          condition: condition,
          email: localStorage.getItem("userEmail"),
        }
      );
      console.log("Submitted = ", submittedData);

      const response = await getListings();
      const data = response;
      setListings(data);

      console.log("Received = ", data);

      alert("Submitted [:-)]");
    } catch (error) {
      alert("Something went wrong [:-(]");
    }

    setTitle("");
    setAuthor("");
    setEdition("");
    setCondition("Like New");
  };

  return (
    <section id="sellbooks-section">
      <div className="sellbooks-container">
        <h2>Sell Your Book</h2>

        <form className="sellBooks-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            required
          />

          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            value={author}
            onChange={handleAuthorChange}
            required
          />

          <input
            type="number"
            min="1950"
            max="2050"
            id="edition"
            name="edition"
            value={edition}
            onChange={handleEditionChange}
            placeholder="Edition(yyyy)"
          />

          <div className="condition-container">
            <label for="condition">Condition:</label>
            <select
              id="condition"
              name="condition"
              value={condition}
              onChange={handleConditionChange}
              required
            >
              <option value="like-new">Like New</option>
              <option value="very-good">Very Good</option>
              <option value="good">Good</option>
              <option value="acceptable">Acceptable</option>
            </select>
          </div>

          <button type="submit">Submit Listing</button>
        </form>
      </div>

      <h3 style={{color:"#fff" , marginTop:"3em"}}>Books listed by you</h3>

      {listings.length === 0 ? (
        <div
          className="listing"
          style={{
            color: "#fff",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          No listings
        </div>
      ) : (
        <ListedBooks listings={listings} updateListings={updateListings}/>
      )}
    </section>
  );
}

export default SellBooks;
