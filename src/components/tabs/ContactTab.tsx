import {FC, memo} from 'react';

import {contact} from '../../data/data';
import ContactForm from '../ContactForm';

const ContactTab: FC = memo(() => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-ink">{contact.headerText ?? 'Contact'}</h2>
      <span className="mt-2 block h-1 w-12 rounded bg-gradient-to-r from-accent to-accent-soft" />

      <p className="mt-6 max-w-prose text-sm leading-relaxed text-muted">{contact.description}</p>

      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  );
});

ContactTab.displayName = 'ContactTab';
export default ContactTab;
