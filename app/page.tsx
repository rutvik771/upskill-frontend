"use client";

import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserAction } from "../lib/features/user";

export default function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make GET request to fetch data
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setData(response.data);
        dispatch(setUserAction(response.data));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  console.log(data, "dat---");
  return (
    <section style={{ padding: "1em" }}>
      <div>
        <h2>Home page</h2>
        <div>Id : {data?.userId}</div>
        <div>Title : {data?.title}</div>
      </div>
    </section>
  );
}
