import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="h-[100svh] flex flex-col">
      <div className="flex justify-center p-3 text-xl">
        <Navbar />
      </div>
      <div className="grow flex flex-col justify-center items-center">
        <div>Home</div>
      </div>
    </div>
  );
}

export default Home;
