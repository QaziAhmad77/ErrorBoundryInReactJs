import ErrorBoundary from './component/ErrorBoundries';
import Counter from './component/Counter';
import Alert from './component/Alert';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        margin: 'auto',
        height: '100vh',
      }}
    >
      <ErrorBoundary>
        <Alert message={'Hello'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter title={'First'} />
        <Counter title={'Second'} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
