import { View, Text, } from "react-native"
import { globalStyles, colors } from "../../config/theme/app-theme"
import { CalculatorButton } from "../components/CalculatorButton"


export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

        <View style={{ paddingHorizontal: 30, paddingBottom: 20}}>
           <Text style={globalStyles.mainResult}>1500</Text>
           <Text style={globalStyles.subResults}>45</Text>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={() => console.log('test')} blackText label="C" color={colors.lightGray}/>
            <CalculatorButton onPress={() => console.log('test')} blackText label="+/-" color={colors.lightGray} />
            <CalculatorButton onPress={() => console.log('test')} blackText label="del" color={colors.lightGray}/>
            <CalculatorButton onPress={() => console.log('test')} label="/" color={colors.orange}/>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={() => console.log('7')} label="7"/>
            <CalculatorButton onPress={() => console.log('8')} label="8" />
            <CalculatorButton onPress={() => console.log('9')} label="9"/>
            <CalculatorButton onPress={() => console.log('*')} label="*" color={colors.orange}/>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={() => console.log('test')} label="4"/>
            <CalculatorButton onPress={() => console.log('test')} label="5" />
            <CalculatorButton onPress={() => console.log('test')} label="6"/>
            <CalculatorButton onPress={() => console.log('test')} label="-" color={colors.orange}/>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={() => console.log('test')} label="1"/>
            <CalculatorButton onPress={() => console.log('test')} label="2" />
            <CalculatorButton onPress={() => console.log('test')} label="3"/>
            <CalculatorButton onPress={() => console.log('test')} label="+" color={colors.orange}/>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={() => console.log('test')} label="0" width={150}/>
            <CalculatorButton onPress={() => console.log('test')} label="." />
            <CalculatorButton onPress={() => console.log('test')} label="=" color={colors.orange}/>
        </View>
    </View>
  )
}
