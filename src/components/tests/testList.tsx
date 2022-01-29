import { uploadTest } from '@Reducers/tests';
import { RootState } from '@Store';
import { Button, StyleSheet, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { TestView } from './test';

const s = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

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

const mapDispatchToProps = {
  addTest: uploadTest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type TestListProps = ConnectedProps<typeof connector>;

export const TestListViewConnected = connector(TestListView);
