import { useState } from "react";
import UserContextProvider from "./context";
import Screen from "./Screen";

const App = () => {
  // States and Props
  const [user] = useState({
    name: "1eedaegon"
  })
  // Render components
  return (
    <UserContextProvider>
      <Screen />
    </UserContextProvider>
  );
}

export default App;
