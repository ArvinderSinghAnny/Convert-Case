import React from "react";

export default function vara() {
   return (
      <div>
         <h1>Introduction to C Language</h1>
         <h3>History</h3>
         <br></br>

         <p className="justify-content">
            The C language was originally invented as a development tool for Unix systems.
            In 1969, Ken Thompson and Dennis Ritchie of Bell Labs developed the Unix
            operating system. Unix was written in assembly language and couldn't be ported
            to other computers, so they decided to rewrite it in a high-level language.
            <br></br>
            <br></br>
            However, the high-level language at that time could not meet their
            requirements, and Thompson invented the B language on the basis of the BCPL
            language. In 1972, Dennis Ritchie and Brian Kernighan redesigned a new
            language based on the B language. This new language replaced the B language,
            so it was called the C language. In 1973, the entire Unix system was rewritten
            in C. Since then, the language has spread rapidly and is widely used in the
            development of various operating systems and system software. In 1988,
            <br></br>
            <br></br>The American National Standards Institute (ANSI) officially
            standardized the C language, marking the beginning of the stability and
            standardization of the C language. Today, decades later, C is still one of the
            most widely used and popular systems programming languages, and Unix and Linux
            systems are still developed in C.
         </p>
      </div>
   );
}
