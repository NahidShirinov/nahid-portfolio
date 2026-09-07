import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [status, setStatus] = useState<Status>('idle');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      setData(prev => ({...prev, [name]: value}));
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!ACCESS_KEY) {
        setStatus('error');
        return;
      }

      setStatus('submitting');
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', Accept: 'application/json'},
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            subject: `Portfolio contact from ${data.name}`,
            from_name: data.name,
            ...data,
          }),
        });
        const json = await res.json();
        if (json.success) {
          setStatus('success');
          setData(defaultData);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  if (status === 'success') {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center gap-y-3 rounded-md bg-neutral-800 p-6 text-center">
        <p className="text-lg font-bold text-white">Thanks — your message is on its way.</p>
        <p className="text-sm text-neutral-400">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={data.name} />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === 'submitting'}
        type="submit">
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-400" role="alert">
          {ACCESS_KEY
            ? 'Something went wrong. Please email me directly instead.'
            : 'The contact form is not configured yet — please email me directly.'}
        </p>
      )}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
