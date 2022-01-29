import { Test } from '@Reducers/tests';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface TestProps {
  test: Test;
}

export const TestView: React.FC<TestProps> = ({ test }) => (
  <View style={tw`flex flex-row justify-around `}>
    <Text>Question: {test.question}</Text>
    <Text>Answer: {test.answer}</Text>
  </View>
);
