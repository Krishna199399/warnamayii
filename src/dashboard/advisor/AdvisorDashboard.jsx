import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4000 },
  { name: "May", revenue: 6000 },
];

const piedata = [
  { name: "Crops", value: 400 },
  { name: "Fertilizers", value: 300 },
  { name: "Equipment", value: 200 },
  { name: "Services", value: 100 },
];

const COLORS = ["#007A55", "#22c55e", "#86efac", "#A4F4CF"];

export default function AdvisorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">Advisor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Total Farmers</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Total Sales</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">₹2.5L</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Pending Tasks</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">8</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* bar chart */}
        <div className="bg-white rounded-xl p-5 shadow w-full h-90">
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />
              <YAxis />

              <Tooltip 
                cursor={{ fill: "transparent" }}/>

              <Bar
                dataKey="revenue"
                fill="#007A55"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* pie chart */}
        <div className="bg-white p-5 rounded-xl shadow w-full h-90">
          <h2 className="text-lg font-semibold mb-4">
            Revenue Distribution
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={piedata}
                dataKey="value"
                innerRadius={60}   // makes donut style
                outerRadius={100}
                paddingAngle={3}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
