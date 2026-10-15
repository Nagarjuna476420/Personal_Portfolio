import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import './Toast.css';

export function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div className={`toast-notification toast-${type} glass-panel`}>
      <div className="toast-icon">
        {type === 'success' ? (
          <CheckCircle2 size={18} color="var(--success)" />
        ) : (
          <AlertCircle size={18} color="var(--error)" />
        )}
      </div>
      <div className="toast-message">{message}</div>
      {onClose && (
        <button
          className="toast-close-btn"
          onClick={onClose}
          aria-label="Close notification"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}
