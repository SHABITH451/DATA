import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET(request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const supplier = searchParams.get('supplier');
    
    let query = {};
    if (supplier) {
      // Case-insensitive regex search for supplier
      query.supplier = { $regex: new RegExp(supplier, 'i') };
    }

    const products = await Product.find(query).sort({ lastUpdated: -1 });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    body.lastUpdated = new Date();
    
    const newProduct = await Product.create(body);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add product' }, { status: 400 });
  }
}
