/* colors */
import {
  Platform,
} from 'react-native';

const screen = {
  flex: 1,
  paddingTop: Platform.OS === 'ios' ? 64 : 54,
  backgroundColor: '#FFFFFF',
};

const mainColor = '#5bbcb2';
const secondColor = '#FFFFFF';
const thirdColor = '#E2970D';
const fourthColor = '#92CFCD';
const fifthColor = '#26766B';
const sixthColor = '#2B4A46';

/* fonts */
const mainFontBold = 'Nunito-Bold';
const mainFont = 'Nunito-Regular';
const mainFontLight = 'Nunito-Light';
const secondFontBold = 'Montserrat-Bold';
const secondFont= 'Montserrat-Regular';

export default {
  mainColor: mainColor,
  secondColor: secondColor,
  thirdColor: thirdColor,
  fourthColor: fourthColor,
  fifthColor: fifthColor,
  sixthColor: sixthColor,

  mainFontBold: mainFontBold,
  mainFont:  mainFont,
  mainFontLight: mainFontLight,
  secondFontBold: secondFontBold,
  secondFont: secondFont,
};
