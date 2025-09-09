//import { Label } from "@/components/ui/label";
//import { Button } from "@/components/ui/button";
import BoxWithClear from "./components/ui/BoxWithClear";
import { useState } from "react";
import Header_media from "./components/ui/Header_media";
import TokensText from "./components/ui/TokensText";

function App() {
   const [text, setText] = useState("");
  return (
    <>
    <Header_media />
    <BoxWithClear text={text} setText={setText} />
    <TokensText text={text} />
    </>
  );
}

export default App;