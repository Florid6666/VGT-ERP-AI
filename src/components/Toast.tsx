import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-md">
      <div className="flex items-center gap-3 px-5 py-4 rounded-2xl glass-panel bg-slate-900/90 border border-white/15 shadow-2xl shadow-blue-500/10 text-white">
        {type === 'success' ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
        )}
        <p className="text-sm font-medium text-slate-200">{message}</p>
        <button
          onClick={onClose}
          className="ml-auto text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
          aria-label="Close toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
