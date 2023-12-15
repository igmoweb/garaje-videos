import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('cat');
  return NextResponse.json(null);
}
