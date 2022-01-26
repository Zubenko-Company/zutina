import { StyleSheet, Text, View } from 'react-native';
import { Test } from '../../redux/reducers/tests/tests';

const s = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 500,
  },
});

interface TestProps {
  test: Test;
}

export const TestView: React.FC<TestProps> = ({ test }) => (
  <View style={s.container}>
    <Text>Question: {test.question}</Text>
    <Text>Answer: {test.answer}</Text>
  </View>
);
