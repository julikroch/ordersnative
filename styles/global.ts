import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  button: {
    backgroundColor: '#ffda00',
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000',
  },
});

export default globalStyles;
