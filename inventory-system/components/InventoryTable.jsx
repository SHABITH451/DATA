export default function InventoryTable({ products, onEdit, onDelete }) {
  if (!products?.length)
    return (
      <div className="text-center text-red-500 mt-4 font-semibold">
        No products found.
      </div>
    );

  return (
    <div className="overflow-x-auto mt-4 shadow-lg rounded-lg">
      <table className="w-full text-left border-collapse bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Supplier</th>
            <th className="p-3 border">Quantity</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr
              key={p._id}
              className={`hover:bg-gray-100 transition ${
                p.quantity < 10 ? "bg-red-100" : ""
              }`}
            >
              <td className="p-3 border text-blue-600 font-medium">
                {p.name}
              </td>

              <td className="p-3 border text-purple-600">
                {p.supplier}
              </td>

              <td className="p-3 border text-green-600 font-semibold">
                {p.quantity}
              </td>

              <td className="p-3 border">
                <button
                  onClick={() => onEdit(p)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(p._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
