import { RadialBar, RadialBarChart, Label, PolarRadiusAxis } from 'recharts';
import { ChartContainer } from './ui/chart';
import type { ChartConfig } from './ui/chart';
import { VENDOR_MONITORED } from '../index.ts';
import { TrendingUp } from 'lucide-react';

const chartConfig = {
  monitored: {
    label: 'Total monitored',
    color: 'hsl(270 90% 60%)',
  },
  limit: {
    label: 'Available limit',
    color: 'hsl(var(--muted))',
  },
} satisfies ChartConfig;

export const AppRadialChart = () => {
  const monitored = VENDOR_MONITORED[0].monitored;
  const limit = VENDOR_MONITORED[0].limit;
  const total = monitored + limit;
  const percentage = Math.round((monitored / total) * 100);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative">
        <ChartContainer config={chartConfig} className='w-[240px] h-[140px]'>
          <RadialBarChart
            data={[{ monitored, limit }]}
            innerRadius={80}
            outerRadius={120}
            startAngle={180}
            endAngle={0}
          >
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
            <RadialBar
              dataKey="limit"
              fill="var(--color-limit)"
              stackId="a"
              cornerRadius={10}
              className="stroke-background stroke-[3px]"
            />
            <RadialBar
              dataKey="monitored"
              fill="var(--color-monitored)"
              stackId="a"
              cornerRadius={10}
              className="stroke-background stroke-[3px]"
            />
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 10}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {monitored}
                      </tspan>
                    </text>
                  );
                }
                return null;
              }}
            />
          </RadialBarChart>
        </ChartContainer>
        <div className="absolute top-2 right-8 flex items-center gap-1 text-emerald-500">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-semibold">10%</span>
        </div>
      </div>
      
      <div className="text-center space-y-1">
        <p className="text-sm font-semibold">You've almost reached your limit</p>
        <p className="text-sm text-muted-foreground">
          You have used {percentage}% of your available spots. Upgrade plan to monitor more vendors.
        </p>
      </div>
    </div>
  );
};