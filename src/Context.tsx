import axios from "axios";
import { useState, createContext } from "react";

export const AppContext = createContext<AppContextType | null>(null);

const ContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [entrepreneurName, setEntrepreneurName] = useState<string>("");
  const [entrepreneurData, setEntrepreneurData] = useState<{
    name: string;
    description: string;
    dob: string;
    companies: [];
    imageURL: string;
  }>({ name: "", description: "", dob: "", companies: [], imageURL: "" });

  const fetchEntrepreneur = async (anagram: any) => {
    setLoading(true);
    setEntrepreneurData({
      name: "",
      description: "",
      dob: "",
      companies: [],
      imageURL: "",
    });

    axios
      // ! below to tell typescript that the environmental var will always be defined
      .post(process.env.REACT_APP_ANAGRAM_API_URL!, {
        anagram,
      })
      .then((res) => {
        setEntrepreneurData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider
      value={{
        entrepreneurName,
        entrepreneurData,
        error,
        loading,
        setEntrepreneurName,
        setEntrepreneurData,
        fetchEntrepreneur,
        setError,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
