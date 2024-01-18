import { Button } from "react-bootstrap";
import "./styles/listingStyles.css";

function Listing(props) {
  const id = props.id;
  const title = props.title;
  const author = props.author;
  const edition = props.edition;
  const onDelete = props.onDelete;

  const handleClick = async (event) => {
    const idToBeDeleted = event.target.parentNode.parentNode.getAttribute("id");
    // let deleted = await axios.delete(`http://localhost:4000/api/deleteBookById?id=${idToBeDeleted}`); 
    onDelete(idToBeDeleted);
  };

  return (
    <section className="listing-container" id={id}>
      <div className="info-container">
        <h4>
          {title} <br/> <h6>By - {author}</h6>
        </h4>
        <p>Edition - {edition}</p>
      </div>

      <div className="deleteBtn-container">
        <Button variant="danger" onClick={handleClick}>Remove</Button>{""}
      </div>
    </section>
  );
}

export default Listing;
