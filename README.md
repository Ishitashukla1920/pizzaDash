# Pizza Dashboard

A modern pizza order management dashboard built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🔐 Google OAuth Authentication
- 📊 Pizza Order Management
- 📱 Responsive Design
- 🎨 Modern UI/UX
- 🔍 Sorting and Filtering
- ⚡ Fast Performance

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- NextAuth.js
- Headless UI
- Hero Icons
- Date-fns
- Clsx

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- A Google Cloud Console account for OAuth credentials

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pizza-dashboard.git
cd pizza-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key # Generate a random string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setting up Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google OAuth2 API
4. Configure the OAuth consent screen
5. Create OAuth 2.0 credentials (Client ID and Client Secret)
6. Add authorized redirect URIs:
   - http://localhost:3000/api/auth/callback/google (for development)
   - https://your-production-domain.com/api/auth/callback/google (for production)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   └── dashboard/         # Dashboard pages
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── layout/           # Layout components
│   └── providers/        # Context providers
└── middleware.ts         # Authentication middleware
```

## Deployment

This project is ready to be deployed to Vercel or Railway:

1. Push your code to GitHub
2. Connect your repository to Vercel or Railway
3. Configure environment variables
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 