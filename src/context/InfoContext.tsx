import { createContext, ReactNode, useContext } from 'react';

const InfoContext = createContext({
  repositoryName: process.env.REACT_APP_GITHUB_REPO,
  owner: process.env.REACT_APP_GITHUB_OWNER,
});

export const useInfo = () => useContext(InfoContext);

const InfoProvider = ({ children }: { children: ReactNode }) => {
  return (
    <InfoContext.Provider
      value={{ repositoryName: process.env.REACT_APP_GITHUB_REPO, owner: process.env.REACT_APP_GITHUB_OWNER }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;
