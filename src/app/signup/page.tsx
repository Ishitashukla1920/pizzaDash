import { Metadata } from 'next';
import SignUpForm from '@/components/auth/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up - Pizza Dashboard',
  description: 'Create your Pizza Dashboard account',
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo/Brand section */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🍕</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2">
              Join PizzaDash
            </h2>
            <p className="text-gray-300 text-lg">
              Create your account to get started
            </p>
          </div>
          
          {/* Glass morphism container */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-[1.02]">
            <SignUpForm />
          </div>
          
          {/* Additional decorative elements */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Join thousands of pizza lovers worldwide
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping delay-100"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-200"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-bounce delay-500"></div>
      </div>
    </div>
  );
}