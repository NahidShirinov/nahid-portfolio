import Image from 'next/image';
import {FC, memo, useState} from 'react';

import {contact, profile, socialLinks} from '../data/data';

const currentYear = new Date().getFullYear();

const Sidebar: FC = memo(() => {
  const [showContacts, setShowContacts] = useState(true);

  return (
    <aside className="w-full rounded-2xl border border-line bg-surface p-5 sm:p-7 lg:sticky lg:top-10 lg:max-h-[calc(100vh-5rem)] lg:w-[360px] lg:shrink-0 lg:overflow-y-auto">
      {/* Identity */}
      <div className="flex items-center gap-4">
        <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent-soft p-[2px]">
          <Image
            alt={profile.name}
            className="h-full w-full rounded-[14px] object-cover"
            height={144}
            priority
            src={profile.avatarSrc}
            width={144}
          />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold text-ink">{profile.name}</h1>
          <span className="mt-1 inline-block rounded-md bg-card px-2 py-1 text-xs font-medium text-muted">
            {profile.title}
          </span>
        </div>
      </div>

      {profile.resumeUrl && (
        <a
          className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-soft transition-colors hover:bg-accent/20"
          href={profile.resumeUrl}>
          <span aria-hidden>⬇️</span> Download CV
        </a>
      )}

      <hr className="my-5 border-line" />

      {/* Detailed bio */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-soft">About me</p>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
        {profile.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <hr className="my-5 border-line" />

      {/* Contacts */}
      <button
        aria-expanded={showContacts}
        className="flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-soft"
        onClick={() => setShowContacts(v => !v)}
        type="button">
        Contacts
        <span aria-hidden className="text-muted">
          {showContacts ? '–' : '+'}
        </span>
      </button>

      {showContacts && (
        <ul className="mt-4 space-y-3">
          {contact.items.map(item => (
            <li className="flex items-center gap-3" key={item.label}>
              <span
                aria-hidden
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-gradient-to-br from-accent/20 to-accent/5 text-base">
                {item.emoji}
              </span>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-faint">{item.label}</p>
                {item.href ? (
                  <a
                    className="block truncate text-sm text-ink transition-colors hover:text-accent"
                    href={item.href}
                    rel="noreferrer"
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}>
                    {item.text}
                  </a>
                ) : (
                  <p className="truncate text-sm text-ink">{item.text}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Socials */}
      <div className="mt-6 flex flex-wrap gap-2">
        {socialLinks.map(social => (
          <a
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-card text-base transition-colors hover:border-accent/50"
            href={social.href}
            key={social.label}
            rel="noreferrer"
            target="_blank"
            title={social.label}>
            <span aria-hidden>{social.emoji}</span>
          </a>
        ))}
      </div>

      <p className="mt-6 text-[11px] text-faint">
        © {currentYear} {profile.name}
      </p>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';
export default Sidebar;
