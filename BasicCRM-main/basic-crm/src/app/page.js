'use client';
import { useState } from "react";
import CRMBasicTable from "../components/client-table";
import ClientForm from "../components/client-form";

export default function Home() {
  const [clients, setClients] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addClient = (newClient) => {
    setClients([...clients, { ...newClient, id: clients.length + 1 }]);
    setModalOpen(false); // cerrar modal tras agregar
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black p-8">

      <h1 className="text-4xl font-bold text-white mb-4">Basic CRM</h1>
      <p className="text-gray-700 text-lg mb-6">Bienvenido a tu gestor de relaciones con clientes.</p>

      {/* Contenedor con tabla y botón */}
      <div className="relative w-full max-w-5xl bg-white rounded shadow p-4">
        <button
          onClick={() => setModalOpen(true)}
          className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Añadir nuevo cliente
        </button>

        <CRMBasicTable clients={clients} />
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded p-6 w-96 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              &times;
            </button>

            <ClientForm onAddClient={addClient} />
          </div>
        </div>
      )}

    </main>
  );
}
