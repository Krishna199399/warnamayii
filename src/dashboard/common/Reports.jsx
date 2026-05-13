import React from 'react'
import { DollarSign, ShoppingCart, Users, TrendingUp, MapPin, Trophy } from "lucide-react";

export default function Reports() {
  return (
    <div className=" space-y-8">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800">Reports</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Sales */}
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-full">
            <DollarSign className="text-green-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Sales</p>
            <h2 className="text-xl font-bold">₹1,13,620</h2>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <ShoppingCart className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Orders</p>
            <h2 className="text-xl font-bold">13</h2>
          </div>
        </div>

        {/* Users */}
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-full">
            <Users className="text-purple-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Network</p>
            <h2 className="text-xl font-bold">5</h2>
          </div>
        </div>

        {/* Earnings */}
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-3">
          <div className="bg-orange-100 p-2 rounded-full">
            <TrendingUp className="text-orange-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Earnings</p>
            <h2 className="text-xl font-bold">₹1,137</h2>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Sales by Region */}
        <div className="bg-white rounded-xl p-5 shadow">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-green-600" />
            <h2 className="font-semibold text-lg">Sales by Region</h2>
          </div>

          {[
            { name: "Anand", value: "₹1,13,620", width: "100%" },
            { name: "Satara", value: "₹57,920", width: "60%" },
            { name: "Bharuch", value: "₹46,300", width: "45%" },
            { name: "Nadiad", value: "₹43,260", width: "40%" },
          ].map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{item.name}</span>
                <span>{item.value}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: item.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Advisors */}
        <div className="bg-white rounded-xl p-5 shadow">
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={18} className="text-yellow-500" />
            <h2 className="font-semibold text-lg">Top Advisors</h2>
          </div>

          {[
            { name: "Prakash Rao", amount: "₹46,300" },
            { name: "Mohan Verma", amount: "₹46,180" },
            { name: "Lalita Devi", amount: "₹43,260" },
            { name: "Dinesh Kumar", amount: "₹34,590" },
            { name: "Savita Bai", amount: "₹32,850" },
          ].map((user, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-2 border-b last:border-none"
            >
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded-full text-xs">
                  {i + 1}
                </span>
                <span>{user.name}</span>
              </div>
              <span className="text-green-600 font-medium">
                {user.amount}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
