import React, { useEffect, useState } from 'react'
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import custom from "./Custom.module.css";
import { LinkContainer } from 'react-router-bootstrap';


export default function Home() {
 
  return (
    <>
      
      <section className={`${custom.home}`}>
        <div className={`${custom.content}`}>
          <h3>πΈπππ ππππ <br/> ππππ πππππππ</h3>
          <a href='#' className={`${custom.btn}`}>Get Yours Now</a>
        </div>
      </section>
    </>
  )
}
