"use client";
import { useState, useEffect } from 'react';
import InventoryTable from '@/components/InventoryTable';
import ProductForm from '@/components/ProductForm';
import SupplierFilter from '@/components/SupplierFilter';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = () => fetch(`/api/products${filter ? `?supplier=${filter}` : ''}`).then(r => r.json()).then(setProducts);
  useEffect(() => { fetchProducts(); }, [filter]);

  return (
    <div className="p-4">
      <button onClick={() => setShowForm(true)} className="bg-green-500 text-white px-2 py-1 mb-2">Add</button>
      <SupplierFilter value={filter} onChange={setFilter} />
      <InventoryTable products={products} onEdit={p => { setEditing(p); setShowForm(true); }} onDelete={async id => { await fetch(`/api/products/${id}`, {method: 'DELETE'}); fetchProducts(); }} />
      {showForm && <ProductForm initialData={editing} onClose={() => { setShowForm(false); setEditing(null); }} onSave={async data => { await fetch(`/api/products${editing ? `/${editing._id}` : ''}`, { method: editing ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); setShowForm(false); setEditing(null); fetchProducts(); }} />}
    </div>
  );
}
