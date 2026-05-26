import { login, signup } from '../auth/actions';

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">NutriFast</h2>
        {searchParams.error && (
          <div className="rounded bg-red-100 p-2 text-sm text-red-700">{searchParams.error}</div>
        )}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
            <input name="email" type="email" required className="mt-1 w-full rounded border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
            <input name="password" type="password" required className="mt-1 w-full rounded border p-2" />
          </div>
          <div className="flex gap-4 pt-2">
            <button formAction={login} className="flex-1 rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
              Entrar
            </button>
            <button formAction={signup} className="flex-1 rounded border border-gray-300 py-2 font-semibold text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}