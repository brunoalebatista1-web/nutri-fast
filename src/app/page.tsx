import { redirect } from 'next/navigation';

export default function RootPage() {
  // Faz o site mandar o usuário direto para a tela de login
  redirect('/login');
}