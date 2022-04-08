import React from "react";
import { Link } from "react-router-dom";

export default function anny() {
   return (
      <div>
         <div className="container">
            <div class="row">
               <div class="col-md-8">
                  <h1>Introduction to C language.</h1>
                  Author: Arvinder Singh<br></br>
                  email :arvindersingh5577@gmial.com<br></br>
                  &Click Right Side To Show All functions
               </div>
               <div class="col-md-3 ">
                  <ul>
                     <li>
                        <Link to="/introo">Introduction</Link>
                     </li>
                     <li>
                        <a href="#">Basic syntax </a>
                     </li>
                     <li>
                        <a href="#">variable</a>
                     </li>
                     <li>
                        <a href="#">operator</a>
                     </li>
                     <li>
                        <a href="#">Process control</a>
                     </li>
                     <li>
                        <a href="#">Type of data types</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
