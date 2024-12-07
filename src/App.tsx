import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "./store/index";

function App({ children }: PropsWithChildren) {
  const session = useSelector((state: IRootState) => state.sessionConfig.valid);

  return (
    <div
      className={`vertical full main-section antialiased relative font-nunito text-sm font-normal ${
        !session && "toggle-sidebar"
      } `}
    >
      {children}
    </div>
  );
}

export default App;
