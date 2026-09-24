import { useEffect, useState } from 'react';

export function useImageViewer(images) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };
  const next = () => setSelectedIndex((current) => (current + 1) % images.length);
  const previous = () => setSelectedIndex((current) => (current - 1 + images.length) % images.length);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'Escape') close();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return { selectedIndex, isOpen, open, next, previous, close };
}

export function ImageViewer({ images, selectedIndex, isOpen, next, previous, close }) {
  if (!isOpen) return null;

  const [src, alt] = images[selectedIndex];

  return (
    <div className="image-viewer" role="dialog" aria-modal="true" aria-label={alt} onClick={close}>
      <button className="image-viewer__close" type="button" onClick={close} aria-label="Close enlarged image">Close</button>
      <button className="image-viewer__nav image-viewer__nav--previous" type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous image">&#8592;</button>
      <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
      <button className="image-viewer__nav image-viewer__nav--next" type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next image">&#8594;</button>
    </div>
  );
}
