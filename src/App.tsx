import { StatusBar, Text, View, } from 'react-native';
import { CalculatorScreen } from './presentation/screen/CalculatorScreen';
import { globalStyles } from './config/theme/app-theme';

function App(): React.JSX.Element {

  return (
    <View style={globalStyles.background}>
      <StatusBar
        barStyle={'light-content' }
        backgroundColor={'black'}
      />
      <CalculatorScreen />
      
    </View>
  );
}


export default App;
