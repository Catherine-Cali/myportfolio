import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body className="flex h-screen">
        <SidebarProvider>
          {/* Barre latérale */}
          <AppSidebar />

          <div className="flex flex-col w-full">
            {/* Header */}
            <Header />

            {/* Contenu principal */}
            <main className="flex-1 p-4">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
