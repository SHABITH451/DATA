async function runCRUD() {
  console.log('--- Testing CRUD Operations ---');
  
  // 1. CREATE
  console.log('\n1. CREATE: Adding a new product...');
  const createRes = await fetch('http://localhost:3000/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test Keyboard', quantity: 15, supplier: 'Test Supplier' })
  });
  const createdProduct = await createRes.json();
  console.log('Created:', createdProduct);

  const productId = createdProduct._id;

  // 2. READ
  console.log('\n2. READ: Fetching the newly created product...');
  const readRes = await fetch(`http://localhost:3000/api/products/${productId}`);
  const readProduct = await readRes.json();
  console.log('Read:', readProduct);

  // 3. UPDATE
  console.log('\n3. UPDATE: Changing quantity to 50...');
  const updateRes = await fetch(`http://localhost:3000/api/products/${productId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...readProduct, quantity: 50 })
  });
  const updatedProduct = await updateRes.json();
  console.log('Updated:', updatedProduct);

  // 4. DELETE
  console.log('\n4. DELETE: Removing the test product...');
  const deleteRes = await fetch(`http://localhost:3000/api/products/${productId}`, {
    method: 'DELETE'
  });
  const deletedProduct = await deleteRes.json();
  console.log('Deleted:', deletedProduct);

  // Verify deletion
  const verifyRes = await fetch(`http://localhost:3000/api/products/${productId}`);
  console.log('\nVerify GET after delete status:', verifyRes.status);
}

runCRUD().catch(console.error);
