/* eslint-disable react/prop-types */
const Alert = ({ message }) => {
  if (typeof message !== 'string') {
    throw new Error('Message must be a string');
  }
  return (
    <h1 style={{ border: '3px solid black', padding: '10px' }}>{message}</h1>
  );
};

export default Alert;
