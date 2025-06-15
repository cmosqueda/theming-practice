// app entry point
import Banner from "./sections/Banner";
import Explore from "./sections/Explore";

function App() {
  return (
    <>
      <div className="flex flex-col box">
        <Banner></Banner>

        <Explore></Explore>
      </div>
    </>
  );
}

export default App;
