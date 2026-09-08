import classNames from 'classnames';
import {FC, memo} from 'react';

export type TabId = 'about' | 'resume' | 'contact';

export const TABS: {id: TabId; label: string; emoji: string}[] = [
  {id: 'about', label: 'About', emoji: '👤'},
  {id: 'resume', label: 'Resume', emoji: '📄'},
  {id: 'contact', label: 'Contact', emoji: '✉️'},
];

const Navbar: FC<{active: TabId; onChange: (tab: TabId) => void}> = memo(({active, onChange}) => {
  return (
    <nav className="sticky top-0 z-10 flex justify-center gap-1 rounded-t-2xl border-b border-line bg-surface/95 p-2 backdrop-blur sm:justify-end sm:px-6">
      {TABS.map(tab => {
        const isActive = tab.id === active;
        return (
          <button
            aria-current={isActive ? 'page' : undefined}
            className={classNames(
              'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              isActive ? 'bg-accent/15 text-accent' : 'text-muted hover:text-ink',
            )}
            key={tab.id}
            onClick={() => onChange(tab.id)}
            type="button">
            <span aria-hidden>{tab.emoji}</span>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;
