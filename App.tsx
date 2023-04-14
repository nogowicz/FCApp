import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from 'views/navigation/auth-stack/AuthStack';

function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        translucent={true}
        backgroundColor='transparent'
      />
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </>
  );
}


export default App;