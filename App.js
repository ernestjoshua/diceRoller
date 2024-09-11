import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    elevation: 2
  },
  imageWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  diceContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  diceImage: {
    marginHorizontal: 10,
    width: 125,
    height: 125
  },
  lite: {
    opacity: 0.95,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor: '#333'
  },
});

// Images for dice faces and backgrounds
const diceImages = {
  1: require('./assets/images/diceFace1.png'),
  2: require('./assets/images/diceFace2.png'),
  3: require('./assets/images/diceFace3.png'),
  4: require('./assets/images/diceFace4.png'),
  5: require('./assets/images/diceFace5.png'),
  6: require('./assets/images/diceFace6.png'),
};

const bgImages = {
  1: require('./assets/images/background1.png'),
  2: require('./assets/images/background2.png'),
  3: require('./assets/images/background3.png'),
};

// Main App Component
export default function App() {
  const [firstDice, setFirstDice] = React.useState(2);
  const [secondDice, setSecondDice] = React.useState(4);
  const [bgImg, setBGImg] = React.useState(1);

  // Generate a random number between min and max (inclusive)
  const randomNum = (min = 1, max = 6) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Ensure new dice number is different from the previous one
  const getDiceNum = (prev) => {
    let num = randomNum();
    while (num === prev) {
      num = randomNum();
    }
    return num;
  }

  // Roll dice and update the state
  const rollDiceOnTap = () => {
    setFirstDice((prev) => getDiceNum(prev));
    setSecondDice((prev) => getDiceNum(prev));
    setBGImg(randomNum(1, 3));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.imageWrap} source={bgImages[bgImg]}>
        <View style={styles.diceContainer}>
          <Image style={styles.diceImage} source={diceImages[firstDice]} />
          <Image style={[styles.diceImage, styles.lite]} source={diceImages[secondDice]} />
        </View>
      </ImageBackground>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}
