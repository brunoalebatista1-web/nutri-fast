'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, LineChart, Line } from 'recharts';

interface Props {
  chartData: { day: string; calories: number; fastingHours: number }[];
  calorieGoal: number;
}

export default function DashboardCharts({ chartData, calorieGoal }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-xl bg-white p-4 shadow dark:bg-gray-800">
        <h3 className="mb-4 font-bold text-gray-800 dark:text-white">Calorias nos últimos 7 dias</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <ReferenceLine y={calorieGoal} stroke="red" strokeDasharray="5 5" label="Meta" />
              <Bar dataKey="calories" fill="#3b82f6" name="Calorias" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-xl bg-white p-4 shadow dark:bg-gray-800">
        <h3 className="mb-4 font-bold text-gray-800 dark:text-white">Horas de Jejum nos últimos 7 dias</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="fastingHours" stroke="#10b981" strokeWidth={2} name="Horas" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}