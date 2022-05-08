import data from "./data.json"
import Jobs from "./components/Jobs"

function App() {
  return (
    <div>
      <div className="header"/>
      <Jobs data={data} />
    </div>
  );
}

export default App;
