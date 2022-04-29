import React from "react";
export default function Navbar(props) {
   return (
      <>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
               <a className="navbar-brand" href="#">
                  <strong>
                     My Case Converter<br></br> Online
                  </strong>
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">
                           Home
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/c++">
                           C Tutorial
                        </a>
                     </li>

                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/about">
                           About
                        </a>
                     </li>

                     <li className="nav-item">
                        <a
                           className="nav-link active"
                           aria-current="page"
                           href="/privacy"
                        >
                           Privacy policy
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="term">
                           Terms & Condition
                        </a>
                     </li>
                     <li className="nav-item">
                        <a
                           className="nav-link active"
                           aria-current="page"
                           href="/disclaimer"
                        >
                           Disclaimer
                        </a>
                     </li>
                  </ul>
               </div>

               <div
                  className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
                     }`}
               >
                  <input
                     className={`form-check-input ${props.mode === "light" ? "dark" : "white"
                        }`}
                     type="checkbox"
                     id="flexSwitchCheckDefault"
                     onClick={props.toogle}
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                     Enable Dark Mode
                  </label>
               </div>
            </div>
         </nav>
      </>
   );
}
