import './App.css';
import CarTracker from './without-pattern/CarTracker';
import MouseTracker from './with-pattern/MouseTracker';
import BikeTracker from './without-pattern/BikeTracker';
import MouseTrackerWithChildren from './using-children-prop/MouseTrackerWithChildren';

// Render Props
// A render props pattern uses a prop, but the value of a prop expects a function which returns the JSX.

function App() {
  return (
    <div className="main-container">
      <h1>Hello React</h1>

      {/* without pattern */}

      {/* <CarTracker />
      <BikeTracker /> */}

      {/* with pattern */}

      {/* <MouseTracker
        render={(position) => (
          <p>
            🚗 Car is at ({position.x}, {position.y})
          </p>
        )}
      />
      <MouseTracker
        render={(position) => (
          <p>
            🏍️ Bike is at ({position.x}, {position.y})
          </p>
        )}
      /> */}

      {/* using children prop */}
      <MouseTrackerWithChildren>
        {(position) => (
          <p>
            🚗 Car is at ({position.x}, {position.y})
          </p>
        )}
      </MouseTrackerWithChildren>
      <MouseTrackerWithChildren>
        {(position) => (
          <p>
            🏍️ Bike is at ({position.x}, {position.y})
          </p>
        )}
      </MouseTrackerWithChildren>
    </div>
  );
}

export default App;
