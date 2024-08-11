import { View, Text } from "react-native"
import { globalStyles } from "../../config/theme/app-theme"


export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

        <View style={{ paddingHorizontal: 30, paddingBottom: 20}}>
           <Text style={globalStyles.mainResult}>1500</Text>
           <Text style={globalStyles.subResults}>45</Text>
        </View>
    </View>
  )
}
