import React from 'react';
import { useState, useRef } from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from './Pagination.js';
import { globalColors } from '../../styles/Colors.js';

const  Index = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
        image: require('../../assets/OnBoardingScreen1.png')
    },
    {
        image: require('../../assets/OnBoardingScreen2.png')
    },
    {
        image: require('../../assets/OnBoardingScreen3.png')
    },
    {
        image: require('../../assets/OnBoardingScreen4.png')
    },
    {
        image: require('../../assets/OnBoardingScreen5.png')
    },
    {
        image: require('../../assets/OnBoardingScreen6.png')
    },
    {
        image: require('../../assets/OnBoardingScreen7.png')
    }
    ]
    const width = Dimensions.get('window').width;

   
    
      

    return (
        <View>
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
        marginRight: 24,
        marginLeft: 24,
        marginTop: 10,

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    pagination: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 75,
        paddingBottom: 32,
    }
});

export default Index;
