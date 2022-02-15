
import React, { useRef } from 'react';
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

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        // return () => scrollX.removeListener();
    }, []);

    // Render

    function renderContent() {
        const ListRef = useRef<any|null>(null);
        const scrollToIndex = (data:any) => {
    
            ListRef.current.scrollTo({ x: data*2, y: 0, animated: true })
            }
          
        return (
            <View>
                 <FlatList
                    horizontal
                    pagingEnabled={true}
                    data={onBoardings}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <Item item={item} navigation={navigation}/>}

                />
            </View>
        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}

                            style={[styles.dot, { width: dotSize, height: dotSize, }]}
                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
        </SafeAreaView>
    );
};


export default OnBoarding;
