import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { VENDOR_BREAKDOWN } from '../index.ts';
import { useIsMobile } from '@/hooks/use-mobile.ts';

const chartConfig = {
  asia: { label: 'Asia', color: 'hsl(var(--chart-1))' },
  us: { label: 'US', color: 'hsl(var(--chart-2))' },
  eu: { label: 'EU', color: 'hsl(var(--chart-3))' },
} satisfies ChartConfig;

export const AppBarChart = () => {
  const isMobile = useIsMobile();

  return (
    <ChartContainer
      config={chartConfig}
      className="h-[200px] lg:h-[280px] w-full"
    >
      <BarChart
        accessibilityLayer
        data={VENDOR_BREAKDOWN}
        barSize={isMobile ? 16 : 32}
      >
        <CartesianGrid 
          vertical={false} 
          stroke="hsl(var(--border))"
          strokeDasharray="3 3"
        />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value: string) => value.slice(0, 3)}
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />

        <YAxis 
          tickLine={false} 
          axisLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />

        <Bar 
          dataKey="asia" 
          stackId="a" 
          fill="hsl(270 100% 75%)"
          radius={[0, 0, 0, 0]}
        />
        <Bar 
          dataKey="us" 
          stackId="a" 
          fill="hsl(270 95% 65%)"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="eu"
          stackId="a"
          fill="hsl(270 90% 55%)"
          radius={[8, 8, 0, 0]}
        />

        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  );
};