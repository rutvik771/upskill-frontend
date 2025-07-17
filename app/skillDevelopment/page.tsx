"use client"

import React from "react";
import { useSelector } from "react-redux";

export default function page() {
  const user = useSelector((state:any) => state.userReducer.user);
  return (
    <section style={{ padding: "1em" }}>
      <h2>SkillDevelopment</h2>
      <div>Id : {user?.userId}</div>
      <div>Title : {user?.title}</div>
    </section>
  );
}
