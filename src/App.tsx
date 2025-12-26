import { ThemeProvider } from "./components/ThemeProvider.tsx"
import { SidebarProvider,SidebarInset } from "./components/ui/sidebar.tsx";
import AppSidebar from "./components/AppSidebar.tsx"

const App = () => {
  return (
    <ThemeProvider >
      <SidebarProvider open={false}>
        <AppSidebar>

        </AppSidebar>
    </SidebarProvider>
    </ThemeProvider>
  )
}

export default App