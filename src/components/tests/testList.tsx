import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Test, uploadTest } from '../../redux/reducers/tests/tests';
import { RootState } from '../../redux/store';
import { TestView } from './test';

const s = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

interface TestListProps {
  tests: Array<Test>;
  addTest: (t: Test) => void;
}

export const TestListView: React.FC<TestListProps> = ({ tests, addTest }) => {
  const addPredefinedTest = () => {
    addTest({ answer: 'sas', question: 'sus' });
  };

  return (
    <View style={s.container}>
      {tests.map((t, i) => (
        <TestView test={t} key={i} />
      ))}
      <Button onPress={addPredefinedTest} title="sis" />
    </View>
  );
};

const mapStateToProps = (store: RootState) => ({
  tests: store.tests.tests,
});

export const TestListViewConnected = connect(mapStateToProps, { addTest: uploadTest })(
  TestListView
);
