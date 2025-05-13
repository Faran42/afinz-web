import { useForm } from "react-hook-form";
import "./TransferForm.css";
import { useTransferFormViewModel } from "../../viewmodels/useTransferFormViewModel";

type FormValues = {
  agency: string;
  account: string;
  value: string;
};

export const TransferForm = () => {
  const { submitTransfer, loading } = useTransferFormViewModel();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    submitTransfer({
      agency: Number(data.agency),
      account: Number(data.account),
      value: Number(data.value),
    });
  };

  return (
    <form className="transfer-form-container" onSubmit={handleSubmit(onSubmit)}>
      <h3>Dados da transferência</h3>

      <div className="form-group">
        <label htmlFor="transferType">Tipo de transferência</label>
        <select id="transferType">
          <option value="TED">TED</option>
          <option value="DOC">DOC</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="agency">Agência</label>
        <input
          type="number"
          id="agency"
          placeholder="Digite a agência ex.: 3212"
          {...register("agency", { required: "Campo obrigatório" })}
        />
        {errors.agency && <span>{errors.agency.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="account">Conta</label>
        <input
          type="number"
          id="account"
          placeholder="Digite a conta  ex.: 9073"
          {...register("account", { required: "Campo obrigatório" })}
        />
        {errors.account && <span>{errors.account.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          id="value"
          placeholder="Digite o valor"
          {...register("value", { required: "Campo obrigatório" })}
        />
        {errors.value && <span>{errors.value.message}</span>}
      </div>

      <button className="transfer-button" type="submit" disabled={loading}>
        {loading ? "Transferindo..." : "Transferir"}
      </button>
    </form>
  );
};
