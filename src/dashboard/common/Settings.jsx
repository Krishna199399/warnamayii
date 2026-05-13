import React from 'react'

import { User, Mail, Phone, Lock, Camera } from "lucide-react";

function Settings() {
  return (
    <div className=" space-y-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-green-700">
            <User size={20} /> Profile Settings
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Update your personal information and account details.
          </p>

          {/* Name */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Name</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <User className="text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Email</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <Mail className="text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 outline-none"
              />
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                Verified
              </span>
            </div>
            <p className="text-green-600 text-xs mt-1">
              ✔ Your email is verified
            </p>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Phone number</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <Phone className="text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Your Number"
                className="w-full p-2 outline-none"
              />
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                Verified
              </span>
            </div>
            <p className="text-green-600 text-xs mt-1">
              ✔ Your phone number is verified
            </p>
          </div>

          {/* Change Password */}
          <h3 className="font-semibold mb-3 text-gray-700">
            Change Password
          </h3>

          <div className="space-y-3">
            <div className="flex items-center border rounded-lg px-3">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-2 outline-none"
              />
            </div>

            <div className="flex items-center border rounded-lg px-3">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-2 outline-none"
              />
            </div>

            <div className="flex items-center border rounded-lg px-3">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          <button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg">
            Save Changes
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">
          
          {/* Profile Photo */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <h3 className="font-semibold mb-2">Profile Photo</h3>
            <p className="text-sm text-gray-500 mb-4">
              This will be displayed on your profile.
            </p>

            <div className="relative w-28 h-28 mx-auto mb-4">
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-green-600 p-2 rounded-full">
                <Camera size={16} className="text-white" />
              </div>
            </div>

            <div className="border-2 border-dashed rounded-lg p-4 text-sm text-gray-500 mb-3">
              Click to upload or drag and drop <br />
              PNG, JPG up to 2MB
            </div>

            <button className="text-red-500 text-sm hover:underline">
              Remove Photo
            </button>
          </div>

          {/* Tips */}
          <div className="bg-green-100 rounded-xl p-4">
            <h4 className="font-semibold text-green-800 mb-1">Tips</h4>
            <p className="text-sm text-gray-700">
              Use a strong password with a mix of letters, numbers & symbols.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings;