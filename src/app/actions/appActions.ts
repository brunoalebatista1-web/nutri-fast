'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const mealSchema = z.object({
  description: z.string().min(2, "Descrição muito curta"),
  calories: z.number().positive("Calorias devem ser maiores que zero"),
  type: z.enum(['café', 'almoço', 'lanche', 'jantar', 'ceia']),
  date: z.string(),
});

export async function createMeal(formData: FormData) {
  const supabase = await createClient();
  
  try {
    const rawData = {
      description: formData.get('description') as string,
      calories: Number(formData.get('calories')),
      type: formData.get('type') as any,
      date: formData.get('date') as string,
    };

    // Validação do Zod
    const validated = mealSchema.parse(rawData);
    
    // Força a data a ir em um formato simplificado de texto YYYY-MM-DD para não quebrar fusos
    const apenasDataISO = new Date(validated.date).toISOString();

    const { error } = await supabase.from('meals').insert([{
      description: validated.description,
      calories: validated.calories,
      type: validated.type,
      date: apenasDataISO // Garante o padrão correto
    }]);

    if (error) {
      console.error("Erro retornado pelo Supabase ao inserir comida:", error.message);
      throw new Error(error.message);
    }
  } catch (err: any) {
    console.error("Erro crítico na Server Action createMeal:", err);
    // Em vez de estourar o servidor, redireciona ou lança um erro amigável
    throw new Error("Falha ao registrar alimento. Verifique os dados.");
  }

  revalidatePath('/dashboard');
}

export async function updateMeal(id: string, formData: FormData) {
  const supabase = await createClient();
  const rawData = {
    description: formData.get('description') as string,
    calories: Number(formData.get('calories')),
    type: formData.get('type') as any,
    date: formData.get('date') as string,
  };

  const validated = mealSchema.parse(rawData);

  const { error } = await supabase.from('meals').update({
    ...validated,
    date: new Date(validated.date).toISOString()
  }).eq('id', id);

  if (error) throw new Error(error.message);
  revalidatePath('/dashboard');
}

// CORREÇÃO: Removeu-se qualquer lógica de UI (como confirm) daqui de dentro
export async function deleteMeal(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from('meals').delete().eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/dashboard');
}

// CORREÇÃO: Garantindo a atualização da meta encontrando o usuário de forma robusta
export async function updateCalorieGoal(goal: number) {
  const supabase = await createClient();
  
  // Pega o usuário logado de forma direta e segura
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error("Usuário não identificado.");

  // Usando UPSERT (Garante que atualiza se existir, ou cria se não existir)
  const { error } = await supabase.from('profiles').upsert({
    id: user.id,
    daily_calorie_goal: goal,
    updated_at: new Date().toISOString()
  });

  if (error) {
    console.error("Erro interno do Supabase:", error.message);
    throw new Error(error.message);
  }

  revalidatePath('/dashboard');
}

export async function startFast(plannedType: string) {
  const supabase = await createClient();
  const { error } = await supabase.from('fasts').insert([{
    start_time: new Date().toISOString(),
    planned_type: plannedType
  }]);

  if (error) throw new Error("Erro ao iniciar jejum.");
  revalidatePath('/dashboard');
}

export async function endFast(activeFastId: string) {
  const supabase = await createClient();
  const { error } = await supabase.from('fasts').update({
    end_time: new Date().toISOString()
  }).eq('id', activeFastId);

  if (error) throw new Error(error.message);
  revalidatePath('/dashboard');
}