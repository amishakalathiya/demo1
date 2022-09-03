import React, { useEffect, useState } from 'react'
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import custom from "./Custom.module.css";
import { LinkContainer } from 'react-router-bootstrap';


export default function Home() {
 
  return (
    <>
      
      <section className={`${custom.home}`}>
        <div className={`${custom.content}`}>
          <h3>𝕸𝖚𝖈𝖍 𝖒𝖔𝖗𝖊 <br/> 𝖙𝖍𝖆𝖓 𝖕𝖊𝖗𝖋𝖚𝖒𝖊</h3>
          <a href='#' className={`${custom.btn}`}>Get Yours Now</a>
        </div>
      </section>
    </>
  )
}
