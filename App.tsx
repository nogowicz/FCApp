import {
  StatusBar,

} from 'react-native';
import Welcome from 'views/welcome-screen';



function App() {


  return (
    <>
      <StatusBar
        barStyle='light-content'
      />
      <Welcome />
    </>
  );
}


export default App;
