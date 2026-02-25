import Boosterpack from "./components/Boosterpack/Boosterpack";
import Cursorclick from "./components/Cursorclick/Cursorclick";
import PreloadCards from "./components/PreloadCards/PreloadCards";

export default function Home() {

  return (
    <div className="section">
      <PreloadCards />
      <div>
        <Boosterpack/>
        <Cursorclick/>
      </div>
    </div>
  );

}
