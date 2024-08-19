import { View, Text, } from "react-native"
import { globalStyles, colors } from "../../config/theme/app-theme"
import { CalculatorButton } from "../components/CalculatorButton"
import { useCalculator } from "../hooks/useCalculator"


export const CalculatorScreen = () => {

    const {  
        //properties
        number, 
        prevNumber,

        //Methods
        buildNumber, 
        clean,
        deleteOperation,
        toggleSign,
        multiplyOperation,
        divideOperation,
        subtractOperation,
        addOperation,
        calculatorResult
    } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>

        <View style={{ paddingHorizontal: 30, paddingBottom: 20}}>
           <Text style={globalStyles.mainResult}
             adjustsFontSizeToFit
             numberOfLines={ 1 }
           >{number}</Text>
           <Text style={globalStyles.subResults}
           // Con estas lineas evitamos que el numero o contenido crezca tanto como pueda y se adapte a solo una linea el tamaño del contenido
             adjustsFontSizeToFit
             numberOfLines={ 1 }
           >{prevNumber === '0' ? ' ': prevNumber}</Text>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={ clean } blackText label="C" color={colors.lightGray}/>
            <CalculatorButton onPress={toggleSign} blackText label="+/-" color={colors.lightGray} />
            <CalculatorButton onPress={ deleteOperation } blackText label="del" color={colors.lightGray}/>
            <CalculatorButton onPress={ divideOperation } label="/" color={colors.orange}/>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={() => buildNumber('7')} label="7"/>
            <CalculatorButton onPress={() => buildNumber('8')} label="8" />
            <CalculatorButton onPress={() => buildNumber('9')} label="9"/>
            <CalculatorButton onPress={ multiplyOperation } label="x" color={colors.orange}/>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={() => buildNumber('4')} label="4"/>
            <CalculatorButton onPress={() => buildNumber('5')} label="5" />
            <CalculatorButton onPress={() => buildNumber('6')} label="6"/>
            <CalculatorButton onPress={ subtractOperation } label="-" color={colors.orange}/>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={() => buildNumber('1')} label="1"/>
            <CalculatorButton onPress={() => buildNumber('2')} label="2" />
            <CalculatorButton onPress={() => buildNumber('3')} label="3"/>
            <CalculatorButton onPress={ addOperation } label="+" color={colors.orange}/>
        </View>

        <View style={ globalStyles.row}>
            <CalculatorButton onPress={() => buildNumber('0')} label="0" width={150}/>
            <CalculatorButton onPress={() => buildNumber('.')} label="." />
            <CalculatorButton onPress={calculatorResult} label="=" color={colors.orange}/>
        </View>
    </View>
  )
}
