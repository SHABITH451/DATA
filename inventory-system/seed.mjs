import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/inventory_db';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  supplier: { type: String, required: true },
  lastUpdated: { type: Date, default: Date.now }
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    await Product.deleteMany({}); // clear existing
    await Product.create([
      { name: 'MacBook Pro', quantity: 5, supplier: 'Apple' },
      { name: 'AirPods', quantity: 20, supplier: 'Apple' },
      { name: 'Dell XPS 15', quantity: 8, supplier: 'Dell' }
    ]);
    console.log('Successfully added 3 products to MongoDB!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding DB:', error);
    process.exit(1);
  }
}

seed();
