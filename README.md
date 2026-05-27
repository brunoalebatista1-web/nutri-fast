# 🔥 CalorieFast

Um aplicativo web moderno para rastreamento de calorias e controle de jejum intermitente. Desenvolvido com Next.js, TypeScript e Supabase.

---

## 📋 Descrição

**CalorieFast** é uma aplicação de saúde e bem-estar que permite aos usuários:

- 📊 **Rastrear ingestão de calorias** em tempo real
- ⏱️ **Controlar jejum intermitente** com timer automático
- 📈 **Visualizar análises semanais** através de gráficos interativos
- 🎯 **Definir metas calóricas** personalizadas
- 🌙 **Alternar entre temas claro e escuro**
- 📱 **Funciona em qualquer dispositivo** (responsivo)

A aplicação foi desenvolvida como um projeto full-stack moderno, combinando as melhores práticas de segurança, validação de dados e experiência do usuário.

---

## 🛠️ Stack Tecnológico

### Frontend
- **[Next.js 16.2.6](https://nextjs.org/)** - Framework React com Server Components
- **[React 18.2.0](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3.3.0](https://tailwindcss.com/)** - Estilos utilitários
- **[Radix UI / shadcn/ui](https://ui.shadcn.com/)** - Componentes acessíveis
- **[React Hook Form 7.49.3](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod 3.22.4](https://zod.dev/)** - Validação de schemas

### Backend & Database
- **[Supabase](https://supabase.com/)** - PostgreSQL + Auth
- **[PLpgSQL](https://www.postgresql.org/docs/current/plpgsql.html)** - Triggers e funções no banco

### Gráficos & Visualização
- **[Recharts 2.10.3](https://recharts.org/)** - Gráficos interativos
- **[Lucide React 0.323.0](https://lucide.dev/)** - Ícones

### Utilitários
- **[date-fns 3.2.0](https://date-fns.org/)** - Manipulação de datas
- **[next-themes 0.2.1](https://github.com/pacocoursey/next-themes)** - Tema claro/escuro
- **[clsx 2.1.0](https://github.com/lukeed/clsx)** - Utilitário para className

---

## 🚀 Guia de Setup Local

### Pré-requisitos

Certifique-se de que você possui instalado:
- **Node.js 18+** ([Download](https://nodejs.org/))
- **npm 9+** ou **yarn**
- Uma **conta Supabase** ([Criar aqui](https://supabase.com))

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/ram-sam/caloriefast.git
cd caloriefast
Passo 2: Instalar Dependências
bash
npm install
Passo 3: Configurar o Supabase
Acesse https://supabase.com e crie uma nova conta
Crie um novo projeto chamado caloriefast
Aguarde o projeto ser provisionado (cerca de 2 minutos)
Vá para SQL Editor → New Query
Copie o conteúdo completo do arquivo supabase-setup.sql
Cole no editor e clique em RUN
Passo 4: Configurar Variáveis de Ambiente
Copie o arquivo .env.example para .env.local:

bash
cp .env.example .env.local
No dashboard do Supabase, vá em Settings → API

Encontre e copie:

Project URL (variável NEXT_PUBLIC_SUPABASE_URL)
anon public key (variável NEXT_PUBLIC_SUPABASE_ANON_KEY)
Cole os valores no arquivo .env.local

Passo 5: Rodar o Servidor de Desenvolvimento
bash
npm run dev
A aplicação estará disponível em: http://localhost:3000

Passo 6: Testando a Aplicação
Acesse http://localhost:3000
Clique em "Criar Conta"
Registre-se com um email (pode usar email de teste)
Configure uma meta de 2000 calorias
Adicione algumas refeições
Inicie um jejum e veja o timer em ação!
🔐 Variáveis de Ambiente Necessárias
Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:

env
# Supabase API
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Explicação das Variáveis
Variável	Descrição
NEXT_PUBLIC_SUPABASE_URL	URL da sua instância Supabase (encontrada em Settings → API)
NEXT_PUBLIC_SUPABASE_ANON_KEY	Chave pública do Supabase (role: anon, encontrada em Settings → API)
⚠️ Nota: Essas variáveis são públicas (prefixo NEXT_PUBLIC_) e serão expostas no cliente. Nunca compartilhe sua chave privada (role: service_role).

📱 Funcionalidades Principais
🔐 Autenticação
Sign up com validação de email
Login com email e senha
Logout com limpeza de sessão
Middleware protege rotas sensíveis
Redirect automático baseado em status de autenticação
📊 Dashboard Inteligente
Cards de resumo (calorias, jejum, refeições)
Barra de progresso de meta calórica
Timer de jejum em tempo real
Listagem de refeições do dia
Acesso rápido a todas funcionalidades
🍽️ Gerenciamento de Refeições (CRUD)
Modal para criar/editar refeições
Validação em tempo real
Tipos: café, almoço, lanche, jantar, ceia
Filtro por data
Confirmação antes de excluir
⏱️ Controle de Jejum
Múltiplos tipos: 16:8, 18:6, 20:4, 24h, custom
Timer visual com barra de progresso
Cálculo automático de duração
Apenas um jejum ativo por vez
Histórico de jejuns completados
📈 Análise Semanal
Gráfico de linha: calorias diárias vs meta
Gráfico de barras: horas de jejum
Métricas agregadas:
Média de calorias
Total de jejuns
Média de horas em jejum
Dados dos últimos 7 dias
🎨 UX/UI Avançado
Modo escuro/claro (com persistência)
Design responsivo (mobile-first)
Estados de loading em todas as ações
Mensagens de erro claras
Empty states informativos
Feedback visual imediato
🌐 Link da Aplicação em Produção
A aplicação está disponível em produção em:

https://caloriefast.vercel.app

Para fazer deploy da sua própria instância na Vercel:

Faça push do seu código para o GitHub
Acesse https://vercel.com
Clique em "New Project"
Importe seu repositório
Configure as variáveis de ambiente
Clique em "Deploy"
📸 Screenshots das Telas Principais
🏠 Landing Page
Página inicial com informações sobre a aplicação

![Landing Page]([Adicionar screenshot aqui])

📋 Página de Login
Autenticação segura com email e senha

![Login]([Adicionar screenshot aqui])

📋 Página de Cadastro
Registro de novos usuários

![Signup]([Adicionar screenshot aqui])

📊 Dashboard Principal
Visão geral com resumo de calorias, jejum e refeições

![Dashboard]([Adicionar screenshot aqui])

📈 Gráficos Semanais
Análise visual do progresso da semana

![Gráficos]([Adicionar screenshot aqui])

🍽️ Modal de Refeições
Interface para adicionar/editar refeições

![Meal Dialog]([Adicionar screenshot aqui])

⏱️ Timer de Jejum
Visualização em tempo real do jejum

![Fasting Timer]([Adicionar screenshot aqui])

🌙 Modo Escuro
Tema escuro disponível em toda a aplicação

![Dark Mode]([Adicionar screenshot aqui])

📁 Estrutura do Projeto
Code
caloriefast/
├── src/
│   ├── app/                          # App Router do Next.js
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.tsx         # Página de login
│   │   │   └── signup/
│   │   │       └── page.tsx         # Página de cadastro
│   │   │
│   │   ├── dashboard/
│   │   │   └── page.tsx             # Dashboard principal
│   │   │
│   │   ├── api/                      # Route Handlers
│   │   │   ├── meals/[id]/route.ts   # API para refeições
│   │   │   ├── goals/[id]/route.ts   # API para metas
│   │   │   └── fasts/[id]/route.ts   # API para jejuns
│   │   │
│   │   ├── globals.css               # Estilos globais
│   │   ├── layout.tsx                # Layout raiz
│   │   └── page.tsx                  # Landing page
│   │
│   ├── components/
│   │   ├── ui/                       # Componentes Radix/shadcn
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   │
│   │   ├── dashboard.tsx              # Dashboard container
│   │   ├── fasting-control.tsx        # Timer e controle de jejum
│   │   ├── goal-setting.tsx           # Modal de metas
│   │   ├── meal-dialog.tsx            # Modal de refeições
│   │   ├── meal-list.tsx              # Listagem de refeições
│   │   ├── theme-toggle.tsx           # Botão tema escuro/claro
│   │   └── ...
│   │
│   ├── lib/
│   │   ├── supabase/                  # Cliente Supabase
│   │   ├── utils.ts                   # Funções utilitárias
│   │   └── ...
│   │
│   └── types/
│       └── index.ts                   # Type definitions
│
├── public/                            # Arquivos estáticos
│   ├── favicon.ico
│   └── manifest.json                  # PWA manifest
│
├── supabase-setup.sql                 # Script SQL para banco
├── .env.example                       # Exemplo de variáveis
├── .gitignore                         # Arquivos ignorados
├── package.json                       # Dependências
├── tsconfig.json                      # Configuração TypeScript
├── next.config.js                     # Configuração Next.js
├── tailwind.config.ts                 # Configuração Tailwind
├── postcss.config.js                  # Configuração PostCSS
└── README.md                          # Este arquivo
🔒 Segurança
Row Level Security (RLS)
Todas as tabelas do banco de dados possuem políticas RLS ativadas:

Usuários só podem acessar seus próprios dados
Queries SQL automaticamente filtram por user_id
Impossível acessar dados de outro usuário mesmo se contornar a UI
Validação Dupla
Client-side: Com Zod para feedback instantâneo
Server-side: Validação na API antes de salvar
Database: Constraints e triggers PostgreSQL
Variáveis Protegidas
Credenciais em arquivo .env.local (não commitado)
.env.example no repositório como referência
Variáveis públicas apenas com prefixo NEXT_PUBLIC_
💻 Comandos Disponíveis
bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Executar linter
npm run lint
🤝 Como Contribuir
Se você encontrar bugs ou tiver sugestões de melhorias:

Abra uma issue
Faça um fork do projeto
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'Add some AmazingFeature')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request
📄 Licença
Este projeto está sob a licença MIT.

📞 Contato
Desenvolvedor: @ram-sam

Dúvidas? Abra uma issue no repositório!

🙏 Agradecimentos
Vercel pela hospedagem
Supabase pelo backend
shadcn/ui pelos componentes
Tailwind CSS pelos estilos

