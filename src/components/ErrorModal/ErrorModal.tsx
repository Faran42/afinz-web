import React from "react";
import "./ErrorModal.css";

interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ message, onClose }) => {
  return (
    <div className="error-modal-backdrop">
      <div className="error-modal">
        <div className="icon">❗</div>
        <div className="message">{message}</div>
        <button onClick={onClose} className="close-button">
          Fechar
        </button>
      </div>
    </div>
  );
};
