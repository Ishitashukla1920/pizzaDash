'use client';

import { useSession } from 'next-auth/react';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <DashboardLayout>
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating orbs for visual interest */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🍕</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Hello, {session?.user?.name || 'Guest'}!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to your Pizza Dashboard. Here you can manage your pizza orders and view your order history.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-900">127</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-green-600">
                  <span className="font-medium">+12%</span>
                  <span className="ml-1">from last month</span>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Orders</p>
                  <p className="text-3xl font-bold text-gray-900">8</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">🔥</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-green-600">
                  <span className="font-medium">+3</span>
                  <span className="ml-1">new today</span>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">$2,430</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-green-600">
                  <span className="font-medium">+18%</span>
                  <span className="ml-1">this week</span>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Satisfaction</p>
                  <p className="text-3xl font-bold text-gray-900">98%</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-green-600">
                  <span className="font-medium">+2%</span>
                  <span className="ml-1">improvement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  🍕 Create New Order
                </button>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  📋 View All Orders
                </button>
                <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  📊 Generate Report
                </button>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Pizzas</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/30 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🍕</span>
                    <span className="font-medium text-gray-900">Margherita</span>
                  </div>
                  <span className="text-sm font-semibold text-orange-600">34 orders</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/30 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🥓</span>
                    <span className="font-medium text-gray-900">Pepperoni</span>
                  </div>
                  <span className="text-sm font-semibold text-orange-600">28 orders</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/30 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌿</span>
                    <span className="font-medium text-gray-900">Veggie Supreme</span>
                  </div>
                  <span className="text-sm font-semibold text-orange-600">22 orders</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/30 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Order #PZA127 delivered successfully</p>
                  <p className="text-sm text-gray-600">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/30 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🍕</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">New order #PZA128 received</p>
                  <p className="text-sm text-gray-600">5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/30 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🚚</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Order #PZA126 out for delivery</p>
                  <p className="text-sm text-gray-600">8 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-orange-400/60 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-red-400/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-yellow-400/60 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-400/60 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>
    </DashboardLayout>
  );
}