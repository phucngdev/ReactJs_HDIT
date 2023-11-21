import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <TableUsers></TableUsers>
    </div>
  );
}

export default App;
