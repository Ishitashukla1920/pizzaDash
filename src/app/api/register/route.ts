

import { NextResponse } from 'next/server';


interface TempUser {
    id: string;
    name: string;
    email: string;
    password: string; 
}
const tempUsers: TempUser[] = [
    { id: "demo-user-id-001", name: "Demo User", email: "demo@pizzadash.com", password: "demo123" },
];

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


    if (tempUsers.some(user => user.email === email)) {
      return NextResponse.json({ message: 'User with this email already exists.' }, { status: 409 });
    }

    const newUserId = `user-${Date.now()}`; 
    const newUser: TempUser = {
      id: newUserId,
      name,
      email,
      password, 
    };
    tempUsers.push(newUser); 
    console.log("New user registered (in-memory):", newUser);

    return NextResponse.json({ message: 'User registered successfully!', user: { id: newUser.id, name: newUser.name, email: newUser.email } }, { status: 201 });

  } catch (error) {
    console.error("API /api/register error:", error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}