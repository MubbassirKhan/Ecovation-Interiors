import { useEffect, useState } from 'react';

export default function DevelopmentNotice() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div className="development-notice" role="presentation">
      <div
        className="development-notice__backdrop"
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
      <section
        className="development-notice__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="development-notice-title"
      >
        <button
          className="development-notice__close"
          type="button"
          aria-label="Close development notice"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <p className="development-notice__eyebrow">Development notice</p>
        <h2 id="development-notice-title">This website is still in development.</h2>
        <p>
          Some things may not work as expected. You can ignore this message because this is only a development notice.
        </p>
        <button
          className="development-notice__action"
          type="button"
          onClick={() => setOpen(false)}
        >
          Continue browsing <span aria-hidden="true">&rarr;</span>
        </button>
      </section>
    </div>
  );
}
