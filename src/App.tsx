import { ThemeProvider } from './components/ThemeProvider.tsx';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar.tsx';
import AppSidebar from './components/AppSidebar.tsx'
import Header from './components/Header.tsx'

const App = () => {
  return (
    <ThemeProvider>
      <SidebarProvider open={false}>
        <AppSidebar />
        <SidebarInset>
          <Header/>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
