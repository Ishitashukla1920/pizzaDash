'use client';

import { useState } from 'react';
import { 
  PlusIcon,
  ChevronUpDownIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ClockIcon,
  TruckIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import DashboardLayout from '@/components/layout/DashboardLayout';

const orders = [
  {
    id: 'PZA001',
    customerName: 'John Doe',
    customerPhone: '+1 (555) 123-4567',
    pizzaType: 'Margherita',
    quantity: 2,
    orderDate: '2024-03-15T10:30:00Z',
    status: 'Delivered',
    total: 24.99,
    address: '123 Main St, Anytown'
  },
  {
    id: 'PZA002',
    customerName: 'Jane Smith',
    customerPhone: '+1 (555) 234-5678',
    pizzaType: 'Pepperoni',
    quantity: 1,
    orderDate: '2024-03-15T11:45:00Z',
    status: 'Preparing',
    total: 15.99,
    address: '456 Oak Ave, Somewhere'
  },
  {
    id: 'PZA003',
    customerName: 'Mike Johnson',
    customerPhone: '+1 (555) 345-6789',
    pizzaType: 'Veggie Supreme',
    quantity: 3,
    orderDate: '2024-03-15T12:15:00Z',
    status: 'Pending',
    total: 45.97,
    address: '789 Pine St, Elsewhere'
  },
  {
    id: 'PZA004',
    customerName: 'Sarah Wilson',
    customerPhone: '+1 (555) 456-7890',
    pizzaType: 'Hawaiian',
    quantity: 1,
    orderDate: '2024-03-15T13:00:00Z',
    status: 'Out for Delivery',
    total: 18.99,
    address: '321 Elm St, Downtown'
  },
  {
    id: 'PZA005',
    customerName: 'Tom Brown',
    customerPhone: '+1 (555) 567-8901',
    pizzaType: 'BBQ Chicken',
    quantity: 2,
    orderDate: '2024-03-15T13:30:00Z',
    status: 'Cancelled',
    total: 31.98,
    address: '654 Maple Ave, Uptown'
  },
  {
    id: 'PZA006',
    customerName: 'Alice Green',
    customerPhone: '+1 (555) 111-2222',
    pizzaType: 'Margherita',
    quantity: 1,
    orderDate: '2024-03-16T09:00:00Z',
    status: 'Delivered',
    total: 12.99,
    address: '99 Cherry Ln'
  },
  {
    id: 'PZA007',
    customerName: 'Bob White',
    customerPhone: '+1 (555) 333-4444',
    pizzaType: 'Veggie Supreme',
    quantity: 2,
    orderDate: '2024-03-16T10:00:00Z',
    status: 'Preparing',
    total: 30.98,
    address: '88 Plum Ct'
  },
  {
    id: 'PZA008',
    customerName: 'Charlie Black',
    customerPhone: '+1 (555) 555-6666',
    pizzaType: 'Pepperoni',
    quantity: 3,
    orderDate: '2024-03-16T11:00:00Z',
    status: 'Pending',
    total: 47.97,
    address: '77 Pear Blvd'
  },
  {
    id: 'PZA009',
    customerName: 'David Grey',
    customerPhone: '+1 (555) 777-8888',
    pizzaType: 'Hawaiian',
    quantity: 1,
    orderDate: '2024-03-16T12:00:00Z',
    status: 'Out for Delivery',
    total: 18.99,
    address: '22 Apple Rd'
  },
  {
    id: 'PZA010',
    customerName: 'Eve Blue',
    customerPhone: '+1 (555) 999-0000',
    pizzaType: 'BBQ Chicken',
    quantity: 2,
    orderDate: '2024-03-16T13:00:00Z',
    status: 'Cancelled',
    total: 31.98,
    address: '33 Orange St'
  },
];

// Utility functions
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
};

const getStatusConfig = (status: string) => {
  const configs: { [key: string]: { color: string; icon: any; iconColor: string } } = {
    'Pending': {
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: ClockIcon,
      iconColor: 'text-amber-500'
    },
    'Preparing': {
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: ExclamationTriangleIcon,
      iconColor: 'text-blue-500'
    },
    'Out for Delivery': {
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      icon: TruckIcon,
      iconColor: 'text-purple-500'
    },
    'Delivered': {
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: CheckCircleIcon,
      iconColor: 'text-emerald-500'
    },
    'Cancelled': {
      color: 'bg-red-50 text-red-700 border-red-200',
      icon: XCircleIcon,
      iconColor: 'text-red-500'
    }
  };
  return configs[status] || {
    color: 'bg-gray-50 text-gray-700 border-gray-200',
    icon: ClockIcon,
    iconColor: 'text-gray-500'
  };
};

const getPizzaEmoji = (pizzaType: string) => {
  const emojis: { [key: string]: string } = {
    'Margherita': '🍕',
    'Pepperoni': '🍕',
    'Veggie Supreme': '🥗',
    'Hawaiian': '🍍',
    'BBQ Chicken': '🍗'
  };
  return emojis[pizzaType] || '🍕';
};

export default function OrdersPage() {
  const [sortField, setSortField] = useState<string>('orderDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // sorting
  const filteredAndSortedOrders = orders
    .filter(order => {
      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const matchesSearch =
        order.customerName.toLowerCase().includes(lowerCaseSearchTerm) ||
        order.id.toLowerCase().includes(lowerCaseSearchTerm) ||
        order.pizzaType.toLowerCase().includes(lowerCaseSearchTerm) ||
        order.customerPhone.includes(lowerCaseSearchTerm); 
      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortField === 'orderDate') {
        comparison = new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime();
      } else if (sortField === 'quantity' || sortField === 'total') {
        comparison = (a as any)[sortField] - (b as any)[sortField];
      } else {
        comparison = String((a as any)[sortField]).localeCompare(String((b as any)[sortField]));
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });

  // --- Sorting Toggler Function ---
  const toggleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc'); 
    }
  };

  const statusCounts = orders.reduce((acc: { [key: string]: number }, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});

  const totalRevenue = orders
    .filter(order => order.status === 'Delivered')
    .reduce((sum, order) => sum + order.total, 0);

  const activeOrders = orders.filter(order =>
    ['Pending', 'Preparing', 'Out for Delivery'].includes(order.status)
  ).length;

  const statusOptions = [
    { value: 'all', label: 'All Status', count: orders.length },
    { value: 'Pending', label: 'Pending', count: statusCounts['Pending'] || 0 },
    { value: 'Preparing', label: 'Preparing', count: statusCounts['Preparing'] || 0 },
    { value: 'Out for Delivery', label: 'Out for Delivery', count: statusCounts['Out for Delivery'] || 0 },
    { value: 'Delivered', label: 'Delivered', count: statusCounts['Delivered'] || 0 },
    { value: 'Cancelled', label: 'Cancelled', count: statusCounts['Cancelled'] || 0 },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="p-4 sm:p-6 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🍕</span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Pizza Orders
                  </h1>
                  <p className="text-slate-600 text-sm">Real-time order management</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:scale-105 text-sm">
                <PlusIcon className="h-4 w-4" />
                New Order
              </button>
            </div>

            {/* Compact Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Total</div>
                    <div className="text-2xl font-bold text-slate-900">{orders.length}</div>
                  </div>
                  <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="text-slate-600 text-lg">📊</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Active</div>
                    <div className="text-2xl font-bold text-amber-600">{activeOrders}</div>
                  </div>
                  <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center">
                    <ClockIcon className="h-5 w-5 text-amber-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Delivered</div>
                    <div className="text-2xl font-bold text-emerald-600">{statusCounts['Delivered'] || 0}</div>
                  </div>
                  <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Revenue</div>
                    <div className="text-2xl font-bold text-green-600">${totalRevenue.toFixed(2)}</div>
                  </div>
                  <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <span className="text-green-500 text-lg">💰</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Filter Bar */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              {/* Search Input  */}
              <div className="relative flex-1 max-w-sm w-full">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search orders by name, ID, pizza..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 w-full border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white/50 backdrop-blur-sm transition-all duration-200 text-sm placeholder-slate-400"
                />
              </div>

              {/* Status Filter */}
              <div className="flex gap-2 flex-wrap justify-end">
                {statusOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setStatusFilter(option.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      statusFilter === option.value
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {option.label}
                    <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                      statusFilter === option.value
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {option.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200/50 bg-slate-50/50 flex justify-between items-center">
              <h3 className="text-base font-semibold text-slate-900">
                Orders ({filteredAndSortedOrders.length})
              </h3>
              <div className="text-xs text-slate-500">
                Updated {new Date().toLocaleTimeString()}
              </div>
            </div>

            {/* Responsive Table Wrapper  */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200/50">
                <thead className="bg-slate-50/50">
                  <tr>
                    {[
                      { key: 'id', label: 'Order ID' },
                      { key: 'customerName', label: 'Customer' },
                      { key: 'pizzaType', label: 'Pizza' },
                      { key: 'quantity', label: 'Qty' },
                      { key: 'total', label: 'Total' },
                      { key: 'orderDate', label: 'Time' },
                      { key: 'status', label: 'Status' }, 
                      { key: null, label: 'Actions' }
                    ].map((header) => (
                      <th
                        key={header.label}
                        className={`px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider min-w-[70px] ${
                          header.key ? 'cursor-pointer hover:bg-slate-100/50 transition-colors' : ''
                        }`}
                        onClick={header.key ? () => toggleSort(header.key) : undefined}
                      >
                        <div className="flex items-center space-x-1">
                          <span>{header.label}</span>
                          {header.key && (
                            <ChevronUpDownIcon className="h-3 w-3 text-slate-400" />
                          )}
                          {/* Show sort direction indicator */}
                          {sortField === header.key && (
                            <span className="text-orange-500 text-xs font-bold">
                              {sortDirection === 'asc' ? '↑' : '↓'}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white/50 divide-y divide-slate-200/30">
                  {filteredAndSortedOrders.map((order) => {
                    const statusConfig = getStatusConfig(order.status);
                    const StatusIcon = statusConfig.icon;

                    return (
                      <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-bold text-slate-900">{order.id}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-slate-900">{order.customerName}</div>
                            <div className="text-xs text-slate-500">{order.customerPhone}</div>
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="text-base">{getPizzaEmoji(order.pizzaType)}</span>
                            <div className="text-sm font-medium text-slate-900">{order.pizzaType}</div>
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-semibold text-slate-900">{order.quantity}x</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-bold text-slate-900">${order.total.toFixed(2)}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-slate-900">{formatDate(order.orderDate)}</div>
                          <div className="text-xs text-slate-500">{formatTime(order.orderDate)}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${statusConfig.color}`}>
                            <StatusIcon className={`h-3 w-3 ${statusConfig.iconColor}`} />
                            {order.status}
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            {[
                              { icon: EyeIcon, color: 'blue' },
                              { icon: PencilIcon, color: 'orange' },
                              { icon: TrashIcon, color: 'red' }
                            ].map(({ icon: Icon, color }, index) => (
                              <button
                                key={index}
                                className={`p-1.5 text-slate-400 hover:text-${color}-600 hover:bg-${color}-50 rounded-lg transition-all duration-200`}
                              >
                                <Icon className="h-4 w-4" />
                              </button>
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* No orders found message */}
            {filteredAndSortedOrders.length === 0 && (
              <div className="text-center py-12">
                <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍕</span>
                </div>
                <div className="text-lg font-medium text-slate-900 mb-2">No orders found</div>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}