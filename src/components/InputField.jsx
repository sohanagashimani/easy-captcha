const InputField = ({ label, id, value, onChange, type }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg shadow-sm border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );
};
export default InputField;
