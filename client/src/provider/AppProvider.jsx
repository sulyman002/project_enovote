import React, { useState } from "react";
import { AppContext } from "../context/AppContext";

const AppProvider = ({children}) => {
    const [step, setStep] = useState(0);
     const [selected, setSelected] = useState(null);
  const store = {step, setStep, setSelected, selected};

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default AppProvider;
