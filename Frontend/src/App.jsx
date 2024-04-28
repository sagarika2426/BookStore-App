import React, { useEffect, useState } from "react";
import "./index.css";
import BookCard from "./components/BookCard";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("http://localhost:8000/books");
      const data = await res.json();
      setAllBooks(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  return (
    <>
      <h1 className="text-red-600">Welcome To the Book Store</h1>
      <div className="flex border border-black m-auto">
        <div className="border border-green-400 w-1/4 bg-slate-300"></div>
        <div className="w-2/3 grid grid-cols-3 gap-2  grid-rows-4 p-3">
        {allBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      </div>
     
    </>
  );
}

export default App;
