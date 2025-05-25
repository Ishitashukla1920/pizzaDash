// src/app/api/register/route.ts

import { NextResponse } from 'next/server';

// !!! IMPORTANT: This is for DEMO PURPOSES ONLY.
// In a real application, replace this with a proper database like MongoDB, PostgreSQL, etc.
// Data stored here will be lost when your Next.js development server restarts.
interface TempUser {
    id: string;
    name: string;
    email: string;
    password: string; // In a real app, this MUST be hashed (e.g., using bcrypt)
}
// Initialize with your demo user for testing the sign-in
const tempUsers: TempUser[] = [
    { id: "demo-user-id-001", name: "Demo User", email: "demo@pizzadash.com", password: "demo123" },
];
// !!! END TEMP USER STORAGE !!!

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Basic server-side validation
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    if (password.length < 6) {
        return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        return NextResponse.json({ message: 'Please enter a valid email' }, { status: 400 });
    }


    // Check if user with this email already exists in our temporary store
    if (tempUsers.some(user => user.email === email)) {
      return NextResponse.json({ message: 'User with this email already exists.' }, { status: 409 });
    }

    // Simulate user creation (in real app: hash password, save to DB)
    const newUserId = `user-${Date.now()}`; // Simple unique ID
    const newUser: TempUser = {
      id: newUserId,
      name,
      email,
      password, // Again, HASH THIS IN A REAL APP!
    };
    tempUsers.push(newUser); // Add to our in-memory array
    console.log("New user registered (in-memory):", newUser);

    return NextResponse.json({ message: 'User registered successfully!', user: { id: newUser.id, name: newUser.name, email: newUser.email } }, { status: 201 });

  } catch (error) {
    console.error("API /api/register error:", error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}