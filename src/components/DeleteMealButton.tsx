'use client'; // <-- Isso avisa ao Next.js que este botão específico pode ter interatividade

import { Trash2 } from 'lucide-react';
import { deleteMeal } from '@/app/actions/appActions';

export default function DeleteMealButton({ mealId }: { mealId: string }) {
  return (
    <form action={async () => { await deleteMeal(mealId); }}>
      <button 
        type="submit" 
        onClick={(e) => {
          if (!confirm('Deseja realmente remover esta refeição permanentemente do seu relatório?')) {
            e.preventDefault();
          }
        }}
        className="text-slate-300 hover:text-red-500 transition p-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
        title="Excluir"
      >
        <Trash2 size={15} />
      </button>
    </form>
  );
}