'use client';
export default function CRMBasicTable() {
    const clients = [
      { id: 1, nombre: "Ana Pérez", email: "ana@mail.com", empresa: "TechSol", estado: "Activo" },
      { id: 2, nombre: "Luis Gómez", email: "luis@mail.com", empresa: "InnovaCo", estado: "Inactivo" },
      { id: 3, nombre: "María Ruiz", email: "maria@mail.com", empresa: "CreativeHub", estado: "Activo" },
    ];
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Clientes</h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white text-black">
            <thead className="bg-gray-100 text-black text-left text-sm uppercase">
              <tr>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Empresa</th>
                <th className="px-6 py-3">Estado</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr
                  key={client.id}
                  className="hover:bg-gray-100 cursor-pointer transition"
                  onClick={() => alert(`Clic en ${client.nombre}`)}
                >
                  <td className="px-6 py-4">{client.nombre}</td>
                  <td className="px-6 py-4">{client.email}</td>
                  <td className="px-6 py-4">{client.empresa}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm px-2 py-1 rounded-full ${client.estado === "Activo" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {client.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  