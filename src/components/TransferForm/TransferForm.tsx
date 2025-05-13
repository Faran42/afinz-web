// import { useTransferFormViewModel } from "../../viewmodels/useTransferFormViewModel";

// export const TransferForm = () => {
//   const {
//     transferType,
//     handleTransferTypeChange,
//     agency,
//     account,
//     amount,
//     handleChange,
//     handleSubmit,
//   } = useTransferFormViewModel();

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-[360px] bg-white p-6 rounded-xl shadow-md">
//       <h2 className="text-sm font-semibold mb-4">Dados da transferência</h2>

//       <label className="text-sm">Tipo de transferência</label>
//       <select
//         value={transferType}
//         onChange={handleTransferTypeChange}
//         className="w-full mb-4 p-2 border border-gray-300 rounded text-sm text-gray-400">
//         <option value="TED">TED (Transferência entre contas)</option>
//         {/* outros tipos podem ser adicionados aqui */}
//       </select>

//       <input
//         type="text"
//         placeholder="Agência"
//         value={agency}
//         onChange={(e) => handleChange("agency", e.target.value)}
//         className="w-full mb-3 p-2 border border-gray-300 rounded text-sm"
//       />

//       <input
//         type="text"
//         placeholder="Conta"
//         value={account}
//         onChange={(e) => handleChange("account", e.target.value)}
//         className="w-full mb-3 p-2 border border-gray-300 rounded text-sm"
//       />

//       <input
//         type="text"
//         placeholder="Valor"
//         value={amount}
//         onChange={(e) => handleChange("amount", e.target.value)}
//         className="w-full mb-4 p-2 border border-gray-300 rounded text-sm"
//       />

//       <button
//         type="submit"
//         className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
//         Transferir
//       </button>
//     </form>
//   );
// };

import "./TransferForm.css";

export const TransferForm = () => {
  return (
    <div className="transfer-form-container">
      <h3>Dados da transferência</h3>

      <div className="form-group">
        <label htmlFor="transferType">Tipo de transferência</label>
        <select id="transferType">
          <option value="TED">TED (Transferência entre contas)</option>
          <option value="DOC">DOC (Documento de Ordem de Crédito)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="agency">Agência</label>
        <input
          type="text"
          id="agency"
          placeholder="Digite a agência (ex: 3212)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="account">Conta</label>
        <input
          type="text"
          id="account"
          placeholder="Digite a conta (ex: 9073)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Valor</label>
        <input type="text" id="amount" placeholder="Digite o valor " />
      </div>

      <button className="transfer-button">Transferir</button>
    </div>
  );
};
