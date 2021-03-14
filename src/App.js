
import Screen from "./Screen";
import LangProvider from "./LangContext";
import translations from "./translation";

const App = () => {
  // States and Props

  // Render components
  return (
    <LangProvider defaultLang="en" translations={translations}>
      <Screen />
    </LangProvider>
  );
}

export default App;
