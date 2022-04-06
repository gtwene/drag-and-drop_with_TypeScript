import Incorporate from "./components/Incorporate";

function App() {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mt-12 mb-14">
          X-100 Drag and Drop icons 
        </h1>
        <Incorporate />
      </div>
      
    </>
  );
}

export default App;
