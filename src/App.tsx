import { ThemeProvider } from './components/ThemeProvider.tsx';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar.tsx';
import AppSidebar from './components/AppSidebar.tsx';
import Header from './components/Header.tsx';
import { Page, PageHeader } from './components/Page.tsx';
import { DashboardCard } from './components/DashboardCard.tsx';
import { AppBarChart } from './components/AppBarChart.tsx';
import { AppRadialChart } from './components/AppRadialChart.tsx';

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
              <div className="grid gap-4 lg:grid-cols-2">
                <DashboardCard
                  title="Vendor breakdown"
                  description="Keep track of vendors and their security ratings."
                  buttonText="View full report"
                >
                  <AppBarChart />
                </DashboardCard>
                <DashboardCard
                  title="Vendor monitored"
                  description="You're using 80% of available spots."
                  buttonText="Upgrade plan"
                >
                  <AppRadialChart />
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