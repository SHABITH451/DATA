export default function SupplierFilter({ value, onChange }) {
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Filter by supplier..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg shadow-md 
                   text-gray-700 placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 
                   focus:border-blue-400 transition"
      />
    </div>
  );
}