import React from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

interface ISplashScreen {

}
interface ISplashState {
    progress: any;
}
 
export default class BasicExample extends React.Component<ISplashScreen, ISplashState> {
  constructor(props: ISplashScreen) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
 
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
    // console.log(this.state);
  }
 
  render() {
    return (
      <LottieView source={require('./ani/animation.json')} progress={this.state.progress} />
    );
  }
}