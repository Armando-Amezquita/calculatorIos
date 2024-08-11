import { StyleSheet } from "react-native"

export const colors = {
    darkGray: '#2d2d2d',
    lightGray: '#9b9b9b',
    orange: '#ff9427',

    textPrimary: 'white',
    textSecondary: '#666',
    background: '#000'
}

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background
    },

    calculatorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end'
    },
    
    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '400'
    },
    subResults: {
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button: {
        justifyContent: 'center', // con esto los hijos quedan centrados
        marginHorizontal: 10,
        height: 70,
        width: 70,
        backgroundColor: colors.darkGray,
        borderRadius: 100
    },

    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
})