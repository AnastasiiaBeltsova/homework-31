import { Provider } from 'react-redux'
//engine
import { store } from '../src/engine/config/store'

import { Counter, ButtonIncrement, ButtonDecrement } from './components/counter'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>
          Value: <Counter/> <br/>
          <ButtonIncrement/>
          <ButtonDecrement/>
        </p>
      </div>
    </Provider>
  )
}

export default App;
