export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getLeads } from "@/lib/getLeads";

export default async function AdminPage() {
  const leads = await getLeads();

  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-blue-900">
              Admin Dashboard
            </h1>

            <p className="mt-3 text-gray-600">
              Manage website inquiries and leads.
            </p>
          </div>

          <a
            href="/login"
            className="rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700"
          >
            Logout
          </a>
        </div>

        <div className="mt-12 overflow-x-auto rounded-3xl bg-white shadow-xl">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Service</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="p-8 text-center text-gray-500"
                  >
                    No leads found
                  </td>
                </tr>
              ) : (
                leads.map((lead: any, index: number) => (
                  <tr
                    key={lead.id || index}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">{lead.name}</td>

                    <td className="p-4">{lead.email}</td>

                    <td className="p-4">{lead.phone}</td>

                    <td className="p-4">{lead.service}</td>

                    <td className="p-4 max-w-xs">
                      {lead.message}
                    </td>

                    <td className="p-4">
                      {lead.created_at
                        ? new Date(
                            lead.created_at
                          ).toLocaleDateString()
                        : "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}