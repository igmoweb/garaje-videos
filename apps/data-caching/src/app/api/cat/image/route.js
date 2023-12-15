import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const images = await res.json();
  return NextResponse.json(images[0].url);
}

export async function POST() {
  return GET();
}
