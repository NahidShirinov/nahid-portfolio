import {FC, memo} from 'react';

import {aboutItems, whatIDo} from '../../data/data';

const AboutTab: FC = memo(() => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-ink">About me</h2>
      <span className="mt-2 block h-1 w-12 rounded bg-gradient-to-r from-accent to-accent-soft" />

      <p className="mt-6 max-w-prose text-sm leading-relaxed text-muted">
        I make quality something a team can move fast with — automated checks that run in minutes, clear
        bug reports, and testing that starts in refinement rather than at the end. The full story is in
        the sidebar; here is what that looks like day to day.
      </p>

      {/* What I'm doing */}
      <h3 className="mt-9 text-lg font-semibold text-ink">What I&apos;m doing</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {whatIDo.map(service => (
          <article className="rounded-xl border border-line bg-card p-5" key={service.title}>
            <span
              aria-hidden
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-br from-accent/20 to-accent/5 text-2xl">
              {service.emoji}
            </span>
            <h4 className="mt-4 font-semibold text-ink">{service.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
          </article>
        ))}
      </div>

      {/* At a glance */}
      <h3 className="mt-10 text-lg font-semibold text-ink">At a glance</h3>
      <dl className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {aboutItems.map(item => (
          <div className="flex items-center gap-3" key={item.label}>
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-gradient-to-br from-accent/20 to-accent/5 text-lg">
              {item.emoji}
            </span>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-faint">{item.label}</dt>
              <dd className="text-sm text-ink">{item.text}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
});

AboutTab.displayName = 'AboutTab';
export default AboutTab;
