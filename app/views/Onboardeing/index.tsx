
import React, { useRef, useState } from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { constants } from '../../config';
import { COLORS, FONTS, SIZES } from '../../config/constants/theme';
import { Item } from './Renderitem';
import styles from './style';


const onBoardings = constants.walkthrough

interface onboradingscreen {
    navigation: any
}

const OnBoarding = (props: onboradingscreen) => {
    const { navigation } = props
    const [completed, setCompleted] = React.useState(false);

    const flatlistRef = useRef<any | null>(null);

    const scrollToIndex = (data: any) => {
        flatlistRef.current.scrollToIndex({ animated: true, index: data + 1 });
    }

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeAllListeners();
    }, []);


    const renderDots=()=> {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                   
                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [10, 17, 10],
                       
                    });

                    return (
                        <Animated.View
                            key={index}
                            style={[styles.dot, {
                                 width: dotSize,
                                  height: dotSize,
                            }]}
                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Animated.FlatList
                    ref={flatlistRef}
                    horizontal
                    pagingEnabled={true}
                    data={onBoardings}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) =>
                        <Item
                            item={item}
                            navigation={navigation}
                            nextdata={() => {
                                scrollToIndex(item.id)
                            }}
                        />}
                    onScroll={(e) => scrollX.setValue(e.nativeEvent.contentOffset.x)}


                />
                <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
            </View>
            
        </SafeAreaView>
    );
};


export default OnBoarding;
