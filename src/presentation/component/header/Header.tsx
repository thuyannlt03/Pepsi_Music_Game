import { Image, ImageSourcePropType, StyleProp, StyleSheet, TextProps,Dimensions ,TouchableOpacity, View, ViewStyle, ImageBackground } from 'react-native'
import React from 'react'

import { BACKGROUND_TAB } from '../../../../assets';

export interface HeaderProps extends TextProps {
    //
    iconLeft?: ImageSourcePropType,
    leftHeader?: () => void,
    //
    centerHeader?: React.ReactNode,
    //
    iconRight?: ImageSourcePropType,
    rightHeader?: () => void,

    containerStyle?: StyleProp<ViewStyle>

}

const Header: React.FC<HeaderProps> = (props) => {
    const { iconLeft, iconRight, leftHeader, rightHeader, centerHeader, containerStyle } = props;

    const EventLeft = () => {
        if (iconLeft) {
            return (
                <TouchableOpacity style={styles.button} onPress={leftHeader}>
                    <Image source={iconLeft} style={styles.icon} />
                </TouchableOpacity>
            );
        }
        return null;
    };
    const EventRight = () => {
        if (iconRight) {
            return (
                <TouchableOpacity style={styles.button} onPress={rightHeader}>
                    <Image source={iconRight} style={styles.icon} />
                </TouchableOpacity>
            );
        }
        return null;
    };

    return (
        <ImageBackground source={BACKGROUND_TAB}
            style={[styles.container, containerStyle]}>
            <View style={styles.boxLeft}>
                {EventLeft()}
            </View>
            <View style={styles.boxCenter}>
                {centerHeader}
            </View>
            <View style={styles.boxRight}>
                {EventRight()}
            </View>
        </ImageBackground>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('screen').height * 0.12,
        width: Dimensions.get('screen').width * 1.01,
        borderWidth: 0.1,
        elevation: 5
    },
    icon: {
        resizeMode: 'contain',
        height: '50%',
    },
    button: {
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxLeft: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    boxCenter: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    boxRight: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.02,
    },
})