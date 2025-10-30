# RFK DOCS

## 📘 Visão Geral

 É um portal desenvolvido para apresentar e disponibilizar aos usuários todas as documentações e informações relacionadas aos sistemas e projetos do Grupo RFK, incluindo o **site Hub IA** e demais iniciativas internas relacionadas as documentações dos processos interno da empresa.  


## Sobre repositório

Este repositório contém uma landing/documentação com seções como **Início**, **Sobre**, **Como usar** e **AI Docs**, com navegação por âncoras e componentes reutilizáveis de UI.

### Principais recursos
- ⚡️ Next.js (App Router) com Turbopack (`dev` e `build`)
- 🎨 Tailwind CSS v4 (tokens e design via CSS com `oklch`)
- 🧩 TypeScript
- 🖼️ Ícones com `lucide-react`
- 🍔 Menu hambúrguer com `hamburger-react`
- 🧱 ShadCN UI



## 🗂️ Estrutura de Pastas
O projeto segue uma arquitetura modular, organizada por componentes reutilizáveis, com foco em clareza e escalabilidade. 

```
src/
├─ app/                  # App Router (layout.tsx, page.tsx, not-found.tsx, favicon.ico)
├─ components/           # Seções e componentes da página
│  ├─ about.tsx
│  ├─ ai-docs.tsx
│  ├─ footer.tsx
│  ├─ header.tsx
│  ├─ home.tsx
│  ├─ how-to-use.tsx
│  ├─ wrapper-section.tsx
│  └─ ui/                # Primitivos de UI
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ dropdown-menu.tsx
│     └─ index.tsx
├─ lib/
│  └─ utils.ts
└─ style/
   └─ global.css

public/                  # Assets estáticos
next.config.ts           # Configurações do Next.js
tsconfig.json            # Configurações do TypeScript
postcss.config.mjs       # Configuração do PostCSS/Tailwind
```



## 🚀 Como Rodar Localmente

### Pré‑requisitos
- Node.js **20.x** (LTS)
- **npm** (padrão deste projeto)

### Passos
```bash
# 1) Instalar dependências
npm install

# 2) Rodar em desenvolvimento
npm run dev

# 3) Build de produção
npm run build

# 4) Iniciar servidor de produção
npm start
```

> Por padrão o dev server roda em `http://localhost:3000`.



## 🧪 Scripts disponíveis

- `npm run dev` — inicia o dev server com **Turbopack**
- `npm run build` — build de produção com **Turbopack**
- `npm start` — inicia o servidor de produção




## 👨‍💻 **Autor**
Desenvolvido por [Thiago Kalac](https://github.com/thiagoKalac)



