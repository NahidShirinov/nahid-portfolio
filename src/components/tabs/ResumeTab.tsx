import {FC, memo} from 'react';

import {education, experience, skills} from '../../data/data';
import {TimelineItem} from '../../data/dataDef';

const Timeline: FC<{emoji: string; title: string; items: TimelineItem[]}> = memo(({emoji, title, items}) => (
  <section className="mt-8 first:mt-0">
    <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
      <span aria-hidden>{emoji}</span>
      {title}
    </h3>
    <ol className="mt-4 space-y-4 border-l border-line pl-5">
      {items.map((item, i) => (
        <li className="relative" key={`${item.title}-${i}`}>
          <span className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface" />
          <h4 className="font-semibold text-ink">{item.title}</h4>
          <p className="text-xs text-faint">
            {item.location} <span className="mx-1">•</span> {item.date}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.content}</p>
        </li>
      ))}
    </ol>
  </section>
));
Timeline.displayName = 'Timeline';

const ResumeTab: FC = memo(() => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-ink">Resume</h2>
      <span className="mt-2 block h-1 w-12 rounded bg-gradient-to-r from-accent to-accent-soft" />

      <div className="mt-6">
        <Timeline emoji="💼" items={experience} title="Experience" />
        <Timeline emoji="🎓" items={education} title="Education" />
      </div>

      <section className="mt-10">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
          <span aria-hidden>🧠</span>
          Skills
        </h3>
        <div className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {skills.map(group => (
            <div key={group.name}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-soft">{group.name}</p>
              <ul className="mt-3 space-y-3">
                {group.skills.map(skill => {
                  const pct = Math.round((skill.level / (skill.max ?? 10)) * 100);
                  return (
                    <li key={skill.name}>
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="text-ink">{skill.name}</span>
                        <span className="text-faint">{pct}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-card">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                          style={{width: `${pct}%`}}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

ResumeTab.displayName = 'ResumeTab';
export default ResumeTab;
