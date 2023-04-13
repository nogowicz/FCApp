import {
  StatusBar,

} from 'react-native';
import Welcome from 'views/welcome-screen';



function App() {


  return (
    <>
      <StatusBar
        barStyle='light-content'
        translucent={true}
        backgroundColor='transparent'
      />
      <Welcome />
    </>
  );
}


export default App;
