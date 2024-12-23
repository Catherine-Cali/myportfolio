import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="bg-pink-200 h-16 flex items-center justify-between px-4 shadow-md">
      {/* Bouton pour ouvrir/fermer la sidebar */}
      <SidebarTrigger>
        <button className="p-2 bg-gray-700 text-white rounded-md hover:bg-gray-800">
          Menu
        </button>
      </SidebarTrigger>

      {/* Titre centré */}
      <h1 className="text-lg font-bold text-gray-700 text-center flex-1">
        Catherine CALI
      </h1>
    </header>
  );
}
