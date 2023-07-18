import Term from "./components/Term";
import emojipedia from "./components/emojipedia";

function App() {
  return (
    <div className="App">
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {
          emojipedia.map(term => <Term
            id={term.id}
            emoji={term.emoji}
            name={term.name}
            meaning={term.meaning}
          />)
        }
      </dl>
    </div>
  );
}

export default App;
