# PizzaDash

A modern pizza order management dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

* 🔐 **Google OAuth Authentication** (via NextAuth.js)
* 📊 **Pizza Order Management** (sorting, filtering, stats)
* 📱 **Responsive Design** across devices
* 🎨 **Modern UI/UX** with Headless UI & Hero Icons
* 🔍 **Fast Filtering & Sorting** of orders
* ⚡ **High Performance** with Next.js optimizations

---

## 🧱 Technology Stack

* **Next.js 14** (App Router)
* **TypeScript** for type-safe code
* **Tailwind CSS** for utility-first styling
* **NextAuth.js** for authentication
* **Headless UI** for accessible components
* **Hero Icons** for crisp SVG icons
* **date-fns** for date formatting
* **clsx** for conditional classNames

---

## 👤 Demo User

* **Email:** `demo@pizzadash.com`
* **Password:** `demo123`

> The login/signup page is not connected to a backend—use Google OAuth or the above demo credentials to access the dashboard.

---

## 🔧 Getting Started

### Prerequisites

* **Node.js** 18.17 or later
* **npm** or **yarn**
* A **Google Cloud Console** account for OAuth credentials

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/pizza-dashboard.git
   cd pizza-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment file**

   * Create a `.env.local` in the project root:

     ```env
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=your-secret-key      # generate a random string
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     ```

4. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Setting up Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. **Configure OAuth Consent Screen**:

   * Set app name, support email, developer contact
4. **Create OAuth 2.0 credentials**

   * Go to **APIs & Services > Credentials**
   * Click **+ CREATE CREDENTIALS > OAuth client ID**
   * Choose **Web application**
   * Under **Authorized JavaScript Origins**, add:

     ```
     http://localhost:3000
     ```
   * Under **Authorized redirect URIs**, add:

     ```
     http://localhost:3000/api/auth/callback/google
     https://your-production-domain.com/api/auth/callback/google
     ```
5. **Save** your Client ID & Client Secret into `.env.local`.

---

## 📁 Project Structure

```
src/
├── app/                   # Next.js App Router directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages/components
│   └── dashboard/         # Dashboard pages/components
├── components/            # Reusable React components
│   ├── auth/              # Sign-in/sign-up forms
│   ├── layout/            # Layout wrappers (e.g., DashboardLayout)
│   └── providers/         # Context providers
├── styles/                # Tailwind config and globals
└── middleware.ts          # Auth middleware

---

## 🚢 Deployment

### Vercel (recommended)
1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables in settings
4. Deploy (automatic on push)

### Railway (alternative)
1. Connect your GitHub repo to Railway
2. Configure environment variables
3. Deploy

---

## 🤝 Contributing

Contributions welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

```
