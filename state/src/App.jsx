import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple', 'cyan', 'aqua', 'mistyrose'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [backgroundChanges, setBackgroundChanges] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setBackgroundChanges(backgroundChanges + 1);
  };

  return (
    <div>
      <div>
        <p>Background changes: {backgroundChanges}</p>
      </div>
      <div
        className="App"
        style={{
          backgroundColor,
        }}
      >
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? 'selected' : ''}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
