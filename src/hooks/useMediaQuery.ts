import { useEffect, useState } from "react";
import { globalTheme } from "@/constants/theme";

const useMediaQuery = () => {

  // breakpoint labels/values
  const bpLabels = Object.keys(globalTheme.bpts);
  const bpValues = Object.values(globalTheme.bpts).map((v) => parseInt(v.slice(0,-2)));

  const [state, setState] = useState({
    windowWidth: typeof window !== "undefined" ? window.innerWidth: 100,
    breakpoint: "lg",
  });

  //  effects
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth]);

  // functions
  const resizeHandler = () => {
     const currentWindowWidth = window.innerWidth;

     setState({
       windowWidth: currentWindowWidth,
       breakpoint: getBreakpoint(currentWindowWidth),
     });
  };

  const getBreakpoint = (width: number) =>{
    for (const i in bpValues){
      if (width < bpValues[i]) return bpLabels[i];
    }
    return 'xl';
  }

  const desiredBp = (bp: string) => {
    return state.windowWidth < bpValues[bpLabels.indexOf(bp)];
  }

  return { ...state, desiredBp };
};

export default useMediaQuery;
