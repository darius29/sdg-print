import { KeyboardEvent, ReactNode } from 'react';

interface ChipProps {
  label: string;
  icon?: ReactNode;
  active?: boolean;
  className?: string;
}

export const Chip = ({ label, icon, active, className }: ChipProps) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
      active
        ? 'border-accent/70 bg-accent/10 text-text'
        : 'border-slate-700 bg-surface/50 text-muted'
    } ${className ?? ''}`.trim()}
  >
    {icon}
    <span>{label}</span>
  </span>
);

interface PillButtonProps {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  role?: string;
  tabIndex?: number;
  ariaSelected?: boolean;
  ariaControls?: string;
  id?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
}

export const PillButton = ({
  label,
  icon,
  onClick,
  isActive,
  className,
  role,
  tabIndex,
  ariaSelected,
  ariaControls,
  id,
  onKeyDown,
}: PillButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    role={role}
    tabIndex={tabIndex}
    aria-selected={ariaSelected}
    aria-controls={ariaControls}
    id={id}
    onKeyDown={onKeyDown}
    data-active={isActive ? 'true' : 'false'}
    className={`tab-trigger inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
      isActive
        ? 'border-accent/70 bg-accent/15 text-text'
        : 'border-slate-700 bg-surface/60 text-muted hover:-translate-y-0.5 hover:border-accent/60 hover:text-text'
    } ${className ?? ''}`.trim()}
  >
    {icon}
    <span>{label}</span>
  </button>
);
