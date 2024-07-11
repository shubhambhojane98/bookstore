"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import BookForm from "./BookForm";
import Modal from "./Modal";
import { deleteBook } from "@/store/features/bookSlice";

import EditBookForm from "./EditBookForm";

const MainSection = () => {
  const books = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [editBook, setEditBook] = useState({});

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (book: React.SetStateAction<{}>) => {
    setEditBook(book);
    setOpen1(true);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="py-2">BooKStore</h1>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 rounded-md p-2"
      >
        Add Book
      </button>
      <table className="bg-white border-separate pt-4">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-left px-8 py-4">
              Book Name
            </th>
            <th className="bg-blue-100 border text-left px-8 py-4">Price</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Category</th>
            <th className="bg-blue-100 border text-left px-8 py-4">
              Description
            </th>
            <th className="bg-blue-100 border text-left px-8 py-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr onClick={() => handleEdit(book)} key={book.id}>
              <td onClick={() => handleEdit(book)} className="border px-8 py-4">
                {book.name}
              </td>
              <td
                onClick={() => handleEdit(book)}
                className=" border  px-8 py-4"
              >
                {book.price}$
              </td>
              <td onClick={() => handleEdit(book)} className="border px-8 py-4">
                {book.category}
              </td>
              <td onClick={() => handleEdit(book)} className="border px-8 py-4">
                {book.description}
              </td>
              <td
                onClick={() => handleDelete(book.id)}
                className=" border px-8 py-4"
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal open={open} onClose={() => setOpen(false)}>
        <BookForm />
      </Modal>
      <Modal open={open1} onClose={() => setOpen1(false)}>
        <EditBookForm
          handleDelete={(id: number) => handleDelete(id)}
          editBook={editBook}
        />
      </Modal>
    </div>
  );
};

export default MainSection;
