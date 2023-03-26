const ErrorMessage = ({ message }) => {
  return (
    <div className="text-red-500 font-bold mb-4">
      {message && <p>{message}</p>}
    </div>
  );
};
export default ErrorMessage;
