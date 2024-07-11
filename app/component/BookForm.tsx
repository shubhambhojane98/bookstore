"use client";
import { addBook } from "@/store/features/bookSlice";
import { useAppDispatch } from "@/store/hook";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BookForm = () => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>();

  const dispatch = useAppDispatch();
  const handleSubmit = (e: any) => {
    console.log("clicked");
    e.preventDefault();
    dispatch(addBook({ id: uuidv4(), name, category, description, price }));
    e.target.reset();
  };

  return (
    <div>
      <h1>Book Form</h1>
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
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setCategory(e.target.value)}
          required
          type="text"
          placeholder="Book Category"
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          required
          placeholder="Book Description"
        />
        <input
          className="py-2 px-6 mb-2 w-400 outline-none border-2 border-gray-400"
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          required
          placeholder="Book Price"
        />
        <button
          type="submit"
          className="bg-green-500 rounded-md p-3 mt-2 ml-10 w-32"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
