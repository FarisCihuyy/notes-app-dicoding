import React from "react";
import Button from "./ui/Button";
import { formatDate } from "../utils";
import { Link } from "react-router-dom";

const Card = ({ children }) => {
  return (
    <div className="shadow flex flex-col gap-y-4 justify-between bg-white p-4">
      {children}
    </div>
  );
};

const Header = ({ id, title, createdAt }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <Link
        to={`/notes/${id}`}
        className="text-xl font-bold hover:underline w-fit"
      >
        {title}
      </Link>
      <time className="text-xs font-light">{formatDate(createdAt)}</time>
    </div>
  );
};

const Body = ({ body }) => {
  return <p className="line-clamp-4 text-sm">{body}</p>;
};

const Footer = ({ id, archived, onDelete, onToggle }) => {
  return (
    <div className="flex gap-x-4 *:flex-1">
      <Button
        label="Hapus"
        variant="outline"
        size="sm"
        handleClick={() => onDelete(id)}
      />
      <Button
        label={archived ? "Kembalikan" : "Arsipkan"}
        size="sm"
        handleClick={() => onToggle(id)}
      />
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
