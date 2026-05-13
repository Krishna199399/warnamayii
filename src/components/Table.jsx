{/* ==================== Modern Light Table ==================== */}
export default function Table() {
  const data = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Courtney Henry",
      title: "Designer",
      email: "courtney.henry@example.com",
      role: "Admin",
    },
    {
      name: "Tom Cook",
      title: "Director of Product",
      email: "tom.cook@example.com",
      role: "Member",
    },
    {
      name: "Whitney Francis",
      title: "Copywriter",
      email: "whitney.francis@example.com",
      role: "Admin",
    },
    {
      name: "Leonard Krasner",
      title: "Senior Designer",
      email: "leonard.krasner@example.com",
      role: "Owner",
    },
    {
      name: "Floyd Miles",
      title: "Principal Designer",
      email: "floyd.miles@example.com",
      role: "Member",
    },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg overflow-hidden">

      {/* Table */}
      <table className="w-full text-left">

        {/* Header */}
        <thead className="bg-slate-50 text-slate-600 text-sm">
          <tr>
            <th className="px-6 py-4 font-semibold">Name</th>
            <th className="px-6 py-4 font-semibold">Title</th>
            <th className="px-6 py-4 font-semibold">Email</th>
            <th className="px-6 py-4 font-semibold">Role</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="text-sm text-slate-700">

          {data.map((item, index) => (
            <tr
              key={index}
              className="border-t border-slate-200 hover:bg-slate-50 transition"
            >
              {/* Name */}
              <td className="px-6 py-4 font-medium text-slate-900">
                {item.name}
              </td>

              {/* Title */}
              <td className="px-6 py-4 text-slate-500">
                {item.title}
              </td>

              {/* Email */}
              <td className="px-6 py-4 text-slate-500">
                {item.email}
              </td>

              {/* Role */}
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.role === "Admin"
                      ? "bg-purple-100 text-purple-600"
                      : item.role === "Owner"
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {item.role}
                </span>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}