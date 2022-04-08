import { useState } from "react";
export default function Text(props) {
   const [text, setext] = useState();

   const handleOnChnage = (event) => {
      setext(event.target.value);
   };

   const upp = () => {
      let uppercase = text.toUpperCase();
      setext(uppercase);
   };
   const lower = () => {
      let lowercase = text.toLowerCase();
      setext(lowercase);
   };
   const remove = () => {
      let space = text.split(/[ ]+/);
      setext(space.join(" "));
   };

   const clearr = () => {
      let clar = "";
      setext(clar);
   };

   const capitalize = () => {
      console.log("capitalize");
      let cap = text.charAt(0).toUpperCase() + text.slice(1);
      setext(cap);
   };
   const itt = () => {
      var str = text.italics();
      document.getElementById("IMM").innerHTML = "<h3>Italic</h3>";
      document.getElementById("iam").innerHTML = str.italics();
      setext(str);
   };

   return (
      <div>
         <div className="container">
            <div className="mb-3 my-3">
               <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  <h3>
                     <strong>Case Converter</strong>
                  </h3>
               </label>
               <textarea
                  className="form-control"
                  id="anny"
                  style={{
                     backgroundcolor: props.mode === "dark" ? "grey" : "dark",
                     color: props.mode === "dark" ? "white" : "black",
                  }}
                  rows="10"
                  onChange={handleOnChnage}
                  value={text}
               ></textarea>
               <div className="container my-4">
                  <button className="btn btn-primary mx-2 my-2" onClick={upp}>
                     Upper Case
                  </button>
                  <button className="btn btn-primary mx-2 my-2" onClick={lower}>
                     Lower Case
                  </button>
                  <button className="btn btn-primary mx-2 my-2" onClick={clearr}>
                     Clear All
                  </button>
                  <button className="btn btn-primary mx-2 my-2" onClick={remove}>
                     Remove Spaces
                  </button>
                  <button className="btn btn-primary mx-2 my-2" onClick={capitalize}>
                     aLtErNaTiNg cAsE
                  </button>
                  <button className="btn btn-primary mx-2 my-2" onClick={capitalize}>
                     Title Case
                  </button>
                  <button className="btn btn-primary mx-2 my-2">Bold Case</button>
                  <button className="btn btn-primary mx-2 my`-2" onClick={capitalize}>
                     Sentance Case
                  </button>
                  <button className="btn btn-primary mx-2 my-2">
                     Binary Code Translator
                  </button>
                  <button className="btn btn-primary mx-2 my-2">Mirror Case</button>
                  <button className="btn btn-primary mx-2 my-2" onClick={itt}>
                     italic Case
                  </button>
                  <button className="btn btn-primary mx-2 my-2">Wide Text</button>
                  <button className="btn btn-primary mx-2 my-2">
                     Strikethrough Text
                  </button>
                  <button className="btn btn-primary mx-2 my-2">Underline Text</button>
                  <button className="btn btn-primary mx-2 my-2">Reverse Text</button>
                  <button className="btn btn-primary mx-2 my-2">Copy</button>
                  <button className="btn btn-primary mx-2 my-2">Download</button>
               </div>
            </div>

            <h3>Preview</h3>

            <p>{text}</p>
            <p id="IMM"></p>
            <p id="iam"></p>
         </div>
      </div>
   );
}
