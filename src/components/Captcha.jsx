const Captcha = ({ problem, value, onChange, onClick }) => {
  return (
    <div className="mb-4">
      <label htmlFor="captcha" className="block text-gray-700 font-bold mb-2">
        Captcha: {problem}
      </label>
      <div className="flex">
        <input
          type="text"
          id="captcha"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-3/4 px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 mr-2"
        />
        <button
          type="button"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onClick}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};
export default Captcha;
