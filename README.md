

## 🚀 afinz-web

🎉 **Bem-vindo ao frontend React do Desafio Afinz!** 🎉

Uma aplicação para gerenciar transações bancárias entre usuários, seguindo o desafio técnico da Afinz.

----------

## 🏗️ Arquitetura e Padrões

### MVVM (Model-View-ViewModel)

-   **Models** (`src/models`): Tipos puros e DTOs que representam dados de API e regras de negócio.
    
-   **ViewModels** (`src/viewmodels`): Hooks que encapsulam lógica, chamadas HTTP, formatações e tratamento de erros.
    
-   **Views** (`src/views` e `src/components`): Componentes React que apenas consomem ViewModels e renderizam UI.
    

### Context Providers

-   **AppContext** (`src/contexts/AppContext.tsx`): Gerencia `profile` e `balance` globalmente.
    
-   **UIContext** (`src/contexts/UIContext.tsx`): Controla modais de erro via `errorMessage` e `clearError`.
    

### 🚦 Navegação

-   **React Router v6** (`src/routes`): Rotas aninhadas para abas `Saldo` e `Transferir`, usando `<Outlet />` e `<NavLink>`.
    

### 🔌 Comunicação com API

-   **Axios** (`src/api/axios.ts`): Cliente configurado com `VITE_API_BASE_URL` e `VITE_API_TOKEN` (Bearer).
    
-   **Services** (`src/services/bankService.ts`): Funções para `/profile`, `/balance`, `/consult-agency-account` e `/transfer`.
    
-   **Tratamento de Erros**: _Interceptors_ no Axios + UIContext para mensagens amigáveis.
    

### 🛠️ Formulários e Validações

-   **react-hook-form**: Controle de estado e validações declarativas.
    
-   **Utils** (`src/utils`): Funções como `formatToBRL`, `formatTimestamp` e parse de DTO.
    

### 💡 Componentes Reutilizáveis

-   **CurrencyInput**: Máscara de moeda sem alterar `rawValue` (em centavos).
    
-   **ErrorModal** e **TransactionReceiptModal**: Feedback de erros e comprovantes.
---

## Como rodar o projeto

### Pré-requisitos
- Node.js v16+ e npm ou Yarn
- Variáveis de ambiente definidas em `.env` será enviado no e-mail:  
  ```
  VITE_API_BASE_URL=
  VITE_API_TOKEN=
  ```

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/Faran42/afinz-web.git
   cd afinz-web
   ```
2. Instale dependências:
   ```bash
   npm install
   # ou yarn
   ```
3. Rode em modo de desenvolvimento:
   ```bash
   npm run dev
   # ou yarn dev
   ```
4. Abra [http://localhost:3000](http://localhost:3000) no navegador 
Atenção nessa parte, a porta pode mudar de acordo com as configurações do seu sistema, na dúvida, checar a porta no console / terminal após rodar o comando npm run dev.

### Variáveis de Ambiente
- **VITE_API_BASE_URL**: URL base da API (público ou mocks).  
- **VITE_API_TOKEN**: token Bearer para autenticação.

---

## Scripts
- `npm run dev`: inicia servidor de desenvolvimento
- `npm run build`: gera build de produção
- `npm run preview`: serve build localmente
- `npm run lint`: executa ESLint
---


## Considerações Finais
Este projeto adota padrões modernos de React e arquitetura MVVM para garantir **separação de responsabilidades**, **testabilidade** e **escala** futura. Componentização, hooks customizados e contextos permitem alta reutilização e manutenção.

##### Feito com ❤️ por Franklyn Rocha
