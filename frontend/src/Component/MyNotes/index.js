import React, { useEffect, useState } from "react";
import MainScreen from "../MainScreen";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "./style.css";
import Accordion from "../MainScreen/Accordion";
import axios from "axios";

export default function MyNotes() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");
    setUserData(data);
    console.log(data);
  };
  return (
    <MainScreen title={"Welcome Abhishek..."}>
      <Link to="/createnote">
        <Button
          style={{
            margin: "1rem",
          }}
          size="lg"
        >
          Create New Note
        </Button>
      </Link>
      {userData.map((note) => (
        <Accordion
          key={note._id}
          title={note.title}
          category={note.category}
          content={note.content}
          id={note._id}
        />
      ))}
    </MainScreen>
  );
}
