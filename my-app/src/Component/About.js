import React from 'react'
import custom from "./Custom.module.css";

export default function About() {
  return (
    <>
      <div class="heading">
        <h3>about us</h3>
        <p><a href="#">home</a> <span> / about</span></p>
      </div>

      <section>
        <div className={`${custom.container}`}>
          <div className={`${custom.row}`}>
            <div className="col-md-10">
              <div className={`${custom.card}`}>
                <h4 className="card-title" style={{ textAlign: 'center' }}>‘MY PERFUMES’</h4>
                <pre><p>{"\n"}Set up in 1994, ‘MY PERFUMES ’ is the US’s biggest free, aroma retailer.{"\n"}{"\n"}Our point is to make standard and extravagance scent moderate and open to all. {"\n"}We grandstand more than 130 aroma marks, which are all accessible for you to peruse online at your relaxation. {"\n"}Remember our breathtaking determinations in-store as well!{"\n"}{"\n"}We highly esteem conveying remarkable support of our clients, we have as of late been granted for magnificent client benefit.{"\n"}</p>{"\n"}</pre>
              </div>
            </div>
          </div>
        </div></section>

    </>
  )
}
