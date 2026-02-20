import type { ReactNode } from 'react';

interface NoTranslateProps {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'div';
}

/**
 * Wraps content to prevent it from being translated by browser translation tools (Google Translate, Chrome, etc.).
 * Adds both the 'notranslate' class and the HTML5 translate="no" attribute for maximum compatibility.
 */
export function NoTranslate({ children, className = '', as: Component = 'span' }: NoTranslateProps) {
  return (
    <Component 
      className={`notranslate ${className}`} 
      translate="no"
    >
      {children}
    </Component>
  );
}
