import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useElementSize, useOs } from "@mantine/hooks";

type Params = {
  isStrected: boolean;
};
const initialState: Params = {
  isStrected: false,
};
const CommonContext = createContext(initialState);

interface CommonInterface {
  children: ReactNode;
}

export const CommonProvider: React.FC<CommonInterface> = ({ children }) => {
  const { width } = useElementSize();
  const os = useOs();
  const [isStrected, setIsStrected] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (os === "android" || os === "ios") setIsMobile(true);
    else setIsMobile(false);
  }, [os]);

  useEffect(() => {
    if (width <= 660 || isMobile) setIsStrected(true);
    else setIsStrected(false);
  }, [width, isMobile]);

  const defaultValue: Params = {
    isStrected,
  };
  return (
    <CommonContext.Provider value={defaultValue}>
      {children}
    </CommonContext.Provider>
  );
};

export const useCommonContext = () => {
  return useContext(CommonContext);
};
