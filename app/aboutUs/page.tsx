"use client"

import React from 'react'
import { useSelector } from 'react-redux';

const AboutUs = () => {
  const user = useSelector((state:any) => state.userReducer.user);
  return (
    <section style={{padding:"1em"}}>
      <h2>AboutUs</h2>
      <div>Id : {user?.userId}</div>
      <div>Title : {user?.title}</div>
    </section>
  )
}

export default AboutUs;