"use client";

import { editBookDetail } from "@/store/features/bookSlice";
import { useAppDispatch } from "@/store/hook";
import React, { useEffect, useState } from "react";

interface EditBook {
  editBook: any;
  handleDelete: (id: number) => void;
}

const EditBookForm = ({ editBook, handleDelete }: EditBook) => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>(
    editBook.description || ""
  );
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    setName(editBook.name);
    setCategory(editBook.category);
    setDescription(editBook.description);
    setPrice(editBook.price);
  }, [editBook]);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      editBookDetail({ id: editBook.id, name, category, description, price })
    );
    e.target.reset();
  };
  console.log(editBook);
  console.log(name, category, description, price);
  return (
    <div>
      <h1>Edit Book Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-2/4 justify-evenly shadow-md rounded-lg p-3"
      >
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
          placeholder="BookName Name"
          value={name}
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setCategory(e.target.value)}
          required
          type="text"
          placeholder="Book Category"
          value={category}
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setDescription(e.target.value)}
          required
          type="text"
          placeholder="Book Description"
          value={description}
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setPrice(e.target.value)}
          required
          type="number"
          placeholder="Book Price"
          value={price}
        />
        <button
          type="submit"
          className="bg-green-500 rounded-md p-3 mt-2 ml-10 w-32"
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => handleDelete(editBook.id)}
        type="submit"
        className="bg-red-500 rounded-md p-3 mt-2 ml-10 w-32"
      >
        Delete
      </button>
    </div>
  );
};

export default EditBookForm;
