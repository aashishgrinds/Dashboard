import { ThemeProvider } from './components/ThemeProvider.tsx';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar.tsx';
import AppSidebar from './components/AppSidebar.tsx';
import Header from './components/Header.tsx';
import { Page, PageHeader } from './components/Page.tsx';
import { DashboardCard } from './components/DashboardCard.tsx';

const App = () => {
  return (
    <ThemeProvider>
      <SidebarProvider open={false}>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <main>
            <Page>
              <PageHeader />

              <div className="">
                <DashboardCard title='Vendor breakdown'
                description='Keep track of vendors and their security ratings.'
                buttonText='View full report'>

                </DashboardCard>
              </div>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
