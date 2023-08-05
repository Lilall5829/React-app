// import ListGroup from "./components/ListGroup";
// function App() {
//   let items = ["asda", "werwe", "werwer", "rwr", "hghf"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading={"Cities"}
//         onSelectItem={handleSelectItem}
//       ></ListGroup>
//     </div>
//   );
// }
// export default App;
import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisable, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="dark" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}
export default App;
