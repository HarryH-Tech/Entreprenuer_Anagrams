import { useContext } from "react";

import Header from "./components/Header";
import Selection from "./components/Selection";
import DataContainer from "./components/DataContainer";
import Loading from "./components/Loading";
import Error from "./components/Error";

import { AppContext } from "./Context";

function App() {
  const { entrepreneurData, loading, error } = useContext(
    AppContext
  ) as unknown as AppContextType;

  return (
    <>
      <Header />
      <Selection />
      {loading && <Loading />}
      {error && <Error />}

      {/* Load component only when companies.length is greater than zero as if only entrprenruData is specified as the conditional rendering
      value, then the component renders on load due to the entrepreneurData.companies.length array being a truthy value even when empty 
      */}
      {entrepreneurData.companies.length > 0 && <DataContainer />}
    </>
  );
}

export default App;
