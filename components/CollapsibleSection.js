import { useState } from 'react';

export default function CollapsibleSection({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <h3 onClick={() => setIsOpen(!isOpen)}>{title}</h3>
      {isOpen && <p>{content}</p>}
    </section>
  );
}
