// using reactboundary component

// import ErrorBoundary from './component/UsingReactBoundaryComponent/ErrorBoundries';
// import Counter from './component/UsingReactBoundaryComponent/Counter';
// import Alert from './component/UsingReactBoundaryComponent/Alert';

// const App = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         gap: '50px',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '500px',
//         margin: 'auto',
//         height: '100vh',
//       }}
//     >
//       <ErrorBoundary>
//         <Alert message={'Hello'} />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Counter title={'First'} />
//         <Counter title={'Second'} />
//       </ErrorBoundary>
//     </div>
//   );
// };

// export default App;

// using react error boundary package
import { ErrorBoundary } from 'react-error-boundary';
import Alert from './component/UsingReactErrorBoundaryPackage/Alert';
import Fallback from './component/UsingReactErrorBoundaryPackage/Fallback';
import Counter from './component/UsingReactErrorBoundaryPackage/Counter';

const App = () => {
  const errorHandler = (error, errorInfo) => {
    console.log('Logging', error, errorInfo);
  };
  return (
    <div
      style={{
        display: 'flex',
        gap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: '100vh',
        marginLeft: '100px',
      }}
    >
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
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
