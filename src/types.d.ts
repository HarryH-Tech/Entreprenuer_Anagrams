type AppContextType = {
  
  entrepreneurName: string;
  entrepreneurData: {name: string, description: string, dob: string, companies: [], imageURL: string};
  error: boolean;
  loading: boolean;

  setEntrepreneurName: (entrepreneurName: string) => void;
  setEntrepreneurData: (entrepreneurData: {name: string, description: string, dob: string, companies: [], imageURL: string}) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
  fetchEntrepreneur: (anagram: string) => void;
};
