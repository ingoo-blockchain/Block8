import {AppRouter} from './routes'
import {Header} from './common/header'

const App = () => {
  return <>
    <Header />
    <AppRouter/>
  </>
}

export default App;
