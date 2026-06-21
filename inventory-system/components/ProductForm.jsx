export default function ProductForm({ initialData, onClose, onSave }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const fd = new FormData(e.target);

        onSave({
          name: fd.get("name"),
          quantity: +fd.get("quantity"),
          supplier: fd.get("supplier"),
        });

        alert("Product saved successfully!");
      }}
      className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 my-6 border"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Product Form
      </h2>

      <div className="mb-4">
        <input
          name="name"
          defaultValue={initialData?.name}
          placeholder="Product Name"
          required
          className="w-full border p-3 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <input
          name="quantity"
          type="number"
          defaultValue={initialData?.quantity}
          placeholder="Quantity"
          required
          className="w-full border p-3 rounded text-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <input
          name="supplier"
          defaultValue={initialData?.supplier}
          placeholder="Supplier Name"
          required
          className="w-full border p-3 rounded text-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex gap-3 justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Save
        </button>

        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
