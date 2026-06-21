export default function InventoryTable({ products, onEdit, onDelete }) {
  if (!products?.length) return <div>No products found.</div>;

  return (
    <table className="w-full text-left border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">name</th>
          <th className="p-2 border">Supplier</th>
          <th className="p-2 border">quantity</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p._id} className={p.quantity < 10 ? 'bg-red-100' : ''}>
            <td className="p-2 border">{p.name}</td>
            <td className="p-2 border">{p.supplier}</td>
            <td className="p-2 border">{p.quantity}</td>
            <td className="p-2 border">
              <button onClick={() => onEdit(p)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => onDelete(p._id)} className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
