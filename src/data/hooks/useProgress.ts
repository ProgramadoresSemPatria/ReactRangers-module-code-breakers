import { useContext } from "react";
import ProgressContext from "../context/ProgressContext";

const useProgress = () => useContext(ProgressContext);
export default useProgress;
