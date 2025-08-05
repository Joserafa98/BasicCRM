'use client';

export default function CRMBasicTable({ clients = [] }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Clientes</h2>

      {clients.length === 0 ? (
        <p className="text-gray-400">No hay clientes registrados aún.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow max-w-4xl w-full">
          <table className="min-w-full bg-white text-black text-center">
            <thead className="bg-gray-100 text-black text-sm uppercase">
              <tr>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Empresa</th>
                <th className="px-6 py-3">Estado</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 cursor-pointer transition"
                  onClick={() => alert(`Clic en ${client.nombre}`)}
                >
                  <td className="px-6 py-4">{client.nombre}</td>
                  <td className="px-6 py-4">{client.email}</td>
                  <td className="px-6 py-4">{client.empresa || client.telefono || '-'}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      client.estado === "Activo"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {client.estado || "Activo"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
