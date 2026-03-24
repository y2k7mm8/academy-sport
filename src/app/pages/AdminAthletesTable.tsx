import { useState } from "react";
import { useAthletes } from "../data/athletesStore";
import React from "react";

import { Search, Filter, MoreHorizontal, Plus, Download } from "lucide-react";

export function AdminAthletesTable() {
  const { athletes, add, update, remove, refresh } = useAthletes();

  // local state for modal form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);

  const openCreate = () => {
    setEditing({ name: "", sport: "", region: "", age: "", status: "Active" });
    setIsModalOpen(true);
  };

  const openEdit = (item: any) => {
    setEditing({ ...item });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditing(null);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    const payload = {
      name: editing.name,
      sport: editing.sport,
      region: editing.region,
      age: Number(editing.age) || undefined,
      status: editing.status,
    };
    if (editing.id) {
      update(editing.id, payload);
    } else {
      add(payload);
    }
    closeModal();
  };

  const totalEntries = 124;
  const perPage = 5;
  const totalPages = Math.ceil(totalEntries / perPage);
  const [page, setPage] = useState(1);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    // TODO: fetch page data from API
  };

  const handleExport = () => {
    const headers = ["id", "name", "sport", "region", "age", "status"];
    const rows = athletes.map((a) => [
      a.id,
      a.name,
      a.sport,
      a.region,
      a.age,
      a.status,
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "athletes.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 max-w-[1440px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-black text-neutral-900 tracking-tight uppercase">
            Athletes Directory
          </h1>
          <p className="text-sm text-neutral-500 font-medium mt-1">
            Manage and track national team members
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-white border border-neutral-200 text-sm font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 rounded shadow-sm transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Export
          </button>
          <button
            onClick={openCreate}
            className="px-4 py-2 bg-[#D50000] text-sm font-bold uppercase tracking-wider text-white hover:bg-red-700 rounded shadow-sm transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> New Athlete
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-neutral-50/50">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by name, sport, or ID..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-md text-sm focus:ring-2 focus:ring-[#D50000] outline-none transition-shadow"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => console.log("Open filters")}
              className="px-4 py-2 bg-white border border-neutral-200 text-sm font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 rounded shadow-sm transition-colors flex items-center gap-2 flex-1 justify-center sm:flex-none"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-50/80 border-b border-neutral-200">
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest w-12">
                  <input
                    type="checkbox"
                    className="rounded border-neutral-300 text-[#D50000] focus:ring-[#D50000]"
                  />
                </th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Athlete
                </th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Sport / Discipline
                </th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Region
                </th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Age
                </th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Status
                </th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 bg-white">
              {athletes.map((athlete) => (
                <tr
                  key={athlete.id}
                  className="hover:bg-neutral-50/50 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      className="rounded border-neutral-300 text-[#D50000] focus:ring-[#D50000]"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => openEdit(athlete)}
                      className="flex items-center gap-3 group-hover:text-[#D50000] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 overflow-hidden flex-shrink-0">
                        <img
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(athlete.name)}&background=f3f4f6&color=D50000&rounded=true`}
                          alt={athlete.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-900 group-hover:text-[#D50000]">
                          {athlete.name}
                        </div>
                        <div className="text-xs text-neutral-500 font-medium">
                          ID: #{2000 + athlete.id}
                        </div>
                      </div>
                    </button>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-neutral-700">
                    {athlete.sport}
                  </td>
                  <td className="py-4 px-6 text-sm text-neutral-600">
                    {athlete.region}
                  </td>
                  <td className="py-4 px-6 text-sm text-neutral-600 font-medium">
                    {athlete.age}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                        athlete.status === "Active"
                          ? "bg-emerald-100 text-emerald-800"
                          : athlete.status === "Pending"
                            ? "bg-[#FFD700]/20 text-yellow-800"
                            : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      {athlete.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => openEdit(athlete)}
                        className="px-3 py-1.5 border rounded text-sm font-bold bg-white hover:bg-neutral-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Delete athlete?")) {
                            remove(athlete.id);
                          }
                        }}
                        className="px-3 py-1.5 border rounded text-sm font-bold bg-white hover:bg-neutral-50 text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={closeModal}
            />
            <form
              onSubmit={submitForm}
              className="relative bg-white rounded-lg p-6 w-full max-w-lg z-10"
            >
              <h3 className="text-lg font-bold mb-4">
                {editing?.id ? "Edit Athlete" : "New Athlete"}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <input
                  value={editing?.name || ""}
                  onChange={(e) =>
                    setEditing((s: any) => ({ ...s, name: e.target.value }))
                  }
                  placeholder="Name"
                  className="p-2 border"
                />
                <input
                  value={editing?.sport || ""}
                  onChange={(e) =>
                    setEditing((s: any) => ({ ...s, sport: e.target.value }))
                  }
                  placeholder="Sport"
                  className="p-2 border"
                />
                <input
                  value={editing?.region || ""}
                  onChange={(e) =>
                    setEditing((s: any) => ({ ...s, region: e.target.value }))
                  }
                  placeholder="Region"
                  className="p-2 border"
                />
                <input
                  value={editing?.age || ""}
                  onChange={(e) =>
                    setEditing((s: any) => ({ ...s, age: e.target.value }))
                  }
                  placeholder="Age"
                  className="p-2 border"
                />
                <select
                  value={editing?.status || "Active"}
                  onChange={(e) =>
                    setEditing((s: any) => ({ ...s, status: e.target.value }))
                  }
                  className="col-span-2 p-2 border"
                >
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Draft</option>
                </select>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-3 py-1.5 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#D50000] text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Pagination placeholder */}
        <div className="p-4 border-t border-neutral-200 flex items-center justify-between bg-neutral-50/50">
          <span className="text-sm font-medium text-neutral-500">
            Showing 1 to 5 of 124 entries
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => goToPage(page - 1)}
              className={`px-3 py-1.5 border rounded text-sm font-bold ${page === 1 ? "border-neutral-200 bg-white text-neutral-400 cursor-not-allowed" : "border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700"}`}
              disabled={page === 1}
            >
              Prev
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`px-3 py-1.5 border rounded text-sm font-bold ${page === p ? "border-[#D50000] bg-[#D50000] text-white shadow-sm" : "border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700"}`}
                >
                  {p}
                </button>
              );
            })}
            <button
              onClick={() => goToPage(page + 1)}
              className={`px-3 py-1.5 border rounded text-sm font-bold ${page === totalPages ? "border-neutral-200 bg-white text-neutral-400 cursor-not-allowed" : "border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700"}`}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
