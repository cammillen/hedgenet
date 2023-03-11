 import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../TopMenuBar.js';
import Background from '../Background.js';
import BottomMenuBar from '../BottomMenuBar.js';
import TextWithSortArrowBack from '../SectionHeaders/TextWithSortArrowBack.js';
import CollectivePositionCard from './CollectivePositionCard.js';

export default function TradingInsights () {

  const Screen = 'Dashboard';

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../../assets/fonts/Urbanist-Regular.ttf'),
  });

  SplashScreen.preventAutoHideAsync(); 

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={Screen} />
        <TextWithSortArrowBack title="Trading Insights" navigatePage="Dashboard" rightTitle="Asc. Order"/>
        <ScrollView>
        {stocks.map(stock => (
            <CollectivePositionCard
            key={stock.stock}
            stock={stock.stock}
            sharesOwned={stock.sharesOwned}
            profitLoss={stock.profitLoss}
            perfToDate={stock.perfToDate}
            numMembers={stock.numMembers}
            stockLogo={stock.stockLogo}
            />
            ))}
        {/* Below prevents last element being hidden by the bottom menu bar: */}
        <View style={{height: 150}}></View>
        </ScrollView>
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
});

const stocks = [
    {
      stock: 'Apple Inc.',
      sharesOwned: 1214,
      profitLoss: '+£4,223',
      perfToDate: '+23.2',
      numMembers: 5,
      stockLogo: require('../../assets/stocks/Apple.png')
    },
    {
      stock: 'Microsoft Corporation',
      sharesOwned: 20,
      profitLoss: '-£1521',
      perfToDate: '-13.2',
      numMembers: 3,
      stockLogo: require('../../assets/stocks/Microsoft.png')
    },
    {
      stock: 'Amazon',
      sharesOwned: 212,
      profitLoss: '-£2302',
      perfToDate: '-32.2',
      numMembers: 7,
      stockLogo: require('../../assets/stocks/Amazon.png'),
    },
    {
      stock: 'Tesla Inc.',
      sharesOwned: 319,
      profitLoss: '+£12209',
      perfToDate: '+19.2',
      numMembers: 4,
      stockLogo: require('../../assets//stocks/Tesla.png')
    },
    {
      stock: 'Alibaba Inc.',
      sharesOwned: 77,
      profitLoss: '-£348',
      perfToDate: '+19.1',
      numMembers: 2,
      stockLogo: require('../../assets//stocks/Alibaba.png')
    },
    {
      stock: 'Meta',
      sharesOwned: 128,
      profitLoss: '-£1967',
      perfToDate: '-22.3',
      numMembers: 6,
      stockLogo: require('../../assets/stocks/Meta.png')
    },
    {
      stock: 'LG',
      sharesOwned: 244,
      profitLoss: '+£6432',
      perfToDate: '+19.2',
      numMembers: 8,
      stockLogo: require('../../assets/stocks/LG.png')
    }
  ];
  

