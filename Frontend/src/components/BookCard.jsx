
const BookCard = ({ book }) => {
  return (
    <div className="m-auto">
      <img src={book.img} alt={book.title}
      className="h-auto"></img>
      <h3>{book.title}</h3>
      <h5>{book.author}</h5>
    </div>
  );
};

export default BookCard;