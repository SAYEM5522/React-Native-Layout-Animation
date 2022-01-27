import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { LineChart } from 'react-native-wagmi-charts';
const {width: SIZE} = Dimensions.get('window');
const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 162594630000000,
    value: 3354555.25,
  },
  {
    timestamp: 1625947200000,
    value: 335106.25,
  },
  {
    timestamp: 1625948100000,
    value: 3321566.25,
  },
  {
    timestamp: 1625947200000,
    value: 335106.25,
  },
  {
    timestamp: 1625948100000,
    value: 3321566.25,
  },
  {
    timestamp: 1625947200000,
    value: 335106.25,
  },
  {
    timestamp: 1625948100000,
    value: 3321566.25,
  },
  {
    timestamp: 1625947200000,
    value: 335106.25,
  },
  {
    timestamp: 1625948100000,
    value: 3321566.25,
  },
];



export default function App() {
  
  const AnimatedWidth=useSharedValue(0);
  useEffect(()=>{
    AnimatedWidth.value=1;
  },[AnimatedWidth.value])

  const animatedStyle = useAnimatedStyle(() => {
    return{
        width:withTiming(interpolate(AnimatedWidth.value,[0,1],[0,SIZE/3]),{duration:1000}),
    }
  })
    
  return (
    <Animated.View style={[styles.container]}>
    <LineChart.Provider data={data}>
          <LineChart
           width={SIZE/3}
           height={SIZE/4}
          >
            <LineChart.Path  /> 
          </LineChart>
      </LineChart.Provider>
  </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
   
   }
});
