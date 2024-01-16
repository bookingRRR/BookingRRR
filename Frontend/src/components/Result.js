import { Badge } from 'react-bootstrap';

import './styles/resultStyles.css';

export function Result(props) {
  const id = props.id;
  const title = props.title;
  const author = props.author;
  const edition = props.edition;
  const contact = props.contact;
  const condition = props.condition;

  let badgeValue = "success";
  if(condition === "acceptable"){
    badgeValue="warning";
  }else if(condition === "good"){
    badgeValue="info";
  }else if(condition === "very-good"){
    badgeValue="primary";
  }

  return (
    <div className="result-container" id={id}>
      <h4>{title} <h6>By- {author}</h6></h4>
      <p>{edition} edition</p>
      <p>Seller- {contact}</p>
      <Badge bg={badgeValue} className='condition'>{condition} condition</Badge>
    </div>
  );
}
