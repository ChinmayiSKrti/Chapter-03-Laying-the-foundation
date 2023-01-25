import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "/public/GoodFood.png";
import userIcon from "/public/user.png";

//--------------------------------------------Coding Assignment 1:
// const header1 = React.createElement(
//   "h1",
//   { id: "header1", key: "key1" },
//   "Header 1"
// );

// const header2 = React.createElement(
//   "h2",
//   { id: "header2", key: "key2" },
//   "Header 2"
// );

// const header3 = React.createElement(
//   "h3",
//   { id: "header3", key: "key3" },
//   "Header 3"
// );

// const containerForHead = React.createElement(
//   "div",
//   { id: "containerForHead", key: "key4", className: "title" },
//   [header1, header2, header3]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(containerForHead);

//--------------------------------------------Coding Assignment 2:

const HeaderComponent = () => {
  return (
    <div className="headingComponentStyles">
      <img src={logoImage} alt="Company Logo" className="logoImage"/>
      <div><input/><button>Search</button></div>
      <img src={userIcon} alt="User icon" className="userIcon"/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

//--------------------------------------------Class Practice:
// const heading = <h1 id="title" key="h2">Namaste React!!!</h1>

// const TitleComponent = () => {
//   return <h1>Welcome to React Course</h1>
// }
// const HeadingComponent = () => {
//   return (
//     <div>
//       {<TitleComponent></TitleComponent>}
//       {heading}
//       <h1 key="h1tag">h1 tag</h1>
//       <h2 key="h2tag">h2 tag</h2>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);
