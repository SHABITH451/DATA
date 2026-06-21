export default function SupplierFilter({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Filter by supplier..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded w-full max-w-sm mb-4"
    />
  );
}