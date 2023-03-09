import React from 'react';
import { useState, useRef } from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from '../components/Pagination.js';
import { globalColors } from '../styles/Colors.js';

const  Index = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
        image: require('../assets/OnBoardingScreen1.png')
    },
    {
        image: require('../assets/OnBoardingScreen2.png')
    },
    {
        image: require('../assets/OnBoardingScreen3.png')
    },
    {
        image: require('../assets/OnBoardingScreen4.png')
    },
    {
        image: require('../assets/OnBoardingScreen5.png')
    },
    {
        image: require('../assets/OnBoardingScreen6.png')
    },
    {
        image: require('../assets/OnBoardingScreen7.png')
    }
    ]
    const width = Dimensions.get('window').width;

   
    
      

    return (
        <View style={{ top: 10, right: 0, left: 0}}>
            <Carousel
                loop={false}
                resizeMode= 'cover'
                width={Dimensions.get('window').width}
                height={width}
                autoPlay={false}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setActiveIndex(index)}
                renderItem={({ index }) => (
                    <View
                       style={styles.imageContainer}
                    >
                        <Image source={images[index].image} style={styles.image}/>
                        
                    </View>
                )}
                snapToAlignment='end'
                decelerationRate='fast'
            />
            <View style={styles.pagination}>
            <Pagination activeIndex={activeIndex} total={images.length} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 16,
        marginRight: 24,
        marginLeft: 24,
        height: 525,

    },
    image: {
        //width: '100%',
        //height: '100%',
        resizeMode: 'cover',
        height: 525,
    },
    pagination: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 32,
        paddingBottom: 32
    }
});

export default Index;
