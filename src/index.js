// import React from "react";
// import ReactDOM from "react-dom";
// import People from "./People"


// function App() {
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const [searchResults, setSearchResults] = React.useState([]);
//   const handleChange = e => {
//     setSearchTerm(e.target.value);
//   };
//   React.useEffect(() => {
//     const results = People.filter(person =>
//       person.name.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);
//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <ul>
//         {searchResults.map(item => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


// const { data } = {
//   "data": [
//     {
//       "id": "1234",
//       "is_deleted": false,
//       "name": "Sarah"
//     },
//     {
//       "id": "3520",
//       "is_deleted": true,
//       "name": "Bobby"
//     },
//     {
//       "id": "3520",
//       "is_deleted": true,
//       "name": "Sartah"
//     }
//   ]
// };

// const keyword = "Sar";

// const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));

// console.log(filtered);


import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const List = ({ data }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {data
        .filter((item) => {
          if (!value) return true;
          if (
            item.name.toLowerCase().includes(value) ||
            item.path.toLowerCase().includes(value) 
          ) {
            return true;
          }
          return false;
        })
        .map((item) => (
          <div>
            <h1>{item.name}</h1>
            <a href={item.path}> Follow this Link to go to page. </a>
          </div>
        ))}
    </div>
  );
};

const data = [
  {
    name: "Linkedin",
    path: "https://www.google.com"
  },
  {
    name: "Siri",
    path: "https://www.google.com"
  },
  {
    name: "Linkedin",
    path: "https://www.google.com"
  }
];

function App() {
  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);