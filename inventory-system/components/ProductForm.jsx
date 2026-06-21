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
    className="border p-4 my-4"
  >
    <input
      name="name"
      defaultValue={initialData?.name}
      placeholder="Name"
      required
      className="border p-1 mr-2"
    />

    <input
      name="quantity"
      type="number"
      defaultValue={initialData?.quantity}
      placeholder="Qty"
      required
      className="border p-1 mr-2"
    />

    <input
      name="supplier"
      defaultValue={initialData?.supplier}
      placeholder="Supplier"
      required
      className="border p-1 mr-2"
    />

    <button
      type="submit"
      className="bg-blue-500 text-white px-2 py-1 mr-2"
    >
      Save
    </button>

    <button
      type="button"
      onClick={onClose}
      className="bg-gray-200 px-2 py-1"
    >
      Cancel
    </button>
  </form>
);
}
