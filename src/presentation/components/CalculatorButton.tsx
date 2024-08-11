import React from 'react'
import { Text, Pressable, } from 'react-native'
import { globalStyles, colors } from '../../config/theme/app-theme'

interface Props{
    label: string;
    color?: string;
    width?: number;
    blackText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({ 
    label, 
    color= colors.darkGray, 
    width= 70, 
    blackText = false,
    onPress
}: Props ) => {
  return (
    <Pressable 
        onPress={ () => onPress() }
        style={ ({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: (pressed) ? 0.8 : 1,
        width: width
    }) } >
        <Text style={{
            ...globalStyles.buttonText,
            color: blackText ? 'black' : 'white'
        }}>{ label }</Text>
    </Pressable>
  )
}
