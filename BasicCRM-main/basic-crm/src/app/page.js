import CRMBasicTable from "../components/client-table";


export default function Home() {
  return (
    <>
    <main className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Basic CRM</h1>
      <p className="text-gray-700 text-lg">Bienvenido a tu gestor de relaciones con clientes.</p>
    </main>
    <CRMBasicTable></CRMBasicTable>
    </>
  );
}
