import React from 'react';

export type IconName = 
  | 'phone' 
  | 'location' 
  | 'home'
  | 'clock' 
  | 'truck' 
  | 'pallets' 
  | 'firewood' 
  | 'sawdust' 
  | 'lumber' 
  | 'saw' 
  | 'wrench'
  | 'quote' 
  | 'shield' 
  | 'gallery' 
  | 'check'
  | 'menu'
  | 'close'
  | 'instagram'
  | 'facebook'
  | 'mail'
  | 'search'
  | 'star'
  | 'google';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, className = '', ...props }: IconProps) {
  const icons: Record<IconName, React.ReactNode> = {
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    home: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
    location: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    truck: (
      <>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
    pallets: (
      <>
        <rect x="2" y="14" width="20" height="4" rx="1" />
        <rect x="3" y="6" width="18" height="4" rx="1" />
        <line x1="5" y1="10" x2="5" y2="14" />
        <line x1="12" y1="10" x2="12" y2="14" />
        <line x1="19" y1="10" x2="19" y2="14" />
        <line x1="2" y1="18" x2="2" y2="21" />
        <line x1="12" y1="18" x2="12" y2="21" />
        <line x1="22" y1="18" x2="22" y2="21" />
      </>
    ),
    firewood: (
      <>
        <circle cx="8" cy="16" r="4" />
        <circle cx="16" cy="16" r="4" />
        <path d="M12 12v-6" />
        <path d="M8 12l4-4 4 4" />
        <path d="M12 2l-2 2" />
        <path d="M12 2l2 2" />
      </>
    ),
    sawdust: (
      <>
        <circle cx="4" cy="12" r="1" />
        <circle cx="8" cy="18" r="1" />
        <circle cx="12" cy="14" r="1" />
        <circle cx="16" cy="19" r="1" />
        <circle cx="20" cy="12" r="1" />
        <circle cx="18" cy="6" r="1" />
        <circle cx="10" cy="5" r="1" />
        <circle cx="6" cy="9" r="1" />

        <circle cx="12" cy="12" r="9" />
      </>
    ),
    lumber: (
      <>
         <rect x="4" y="4" width="16" height="16" transform="rotate(45 12 12)" rx="1" />
         <line x1="9" y1="9" x2="15" y2="15" />
      </>
    ),
    saw: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10zm0 0l2 2m-2-2l-2 2" />
      </>
    ),
    wrench: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.457 1.641.033 3.389-1.27 4.692-1.44 1.44-3.506 1.849-5.33 1.226l-8.057 8.057a2 2 0 0 1-2.828-2.828l8.057-8.057c-.623-1.824-.214-3.891 1.226-5.33 1.303-1.304 3.05-1.728 4.692-1.27z" />
    ),
    quote: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </>
    ),
    shield: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    gallery: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </>
    ),
    check: (
      <polyline points="20 6 9 17 4 12" />
    ),
    menu: (
      <>
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    ),
    close: (
       <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
       </>
    ),
    instagram: (
      <>
         <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </>
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    ),
    mail: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </>
    ),
    search: (
      <circle cx="11" cy="11" r="8"></circle>
    ),
    star: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
    google: (
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.12-3.293 2.14-2.16 2.813-5.213 2.813-7.667 0-.76-.067-1.467-.173-2.12H12.48z" />
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {icons[name]}
    </svg>
  );
}

// Premier Lumber saw blade logo mark - for inline SVG usage
interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 40, className = '' }: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      {/* Saw blade */}
      <circle cx="50" cy="50" r="45" fill="#1a1a1a"/>
      {/* Teeth */}
      <g fill="#1a1a1a">
        {[...Array(24)].map((_, i) => (
          <polygon
            key={i}
            points="50,2 54,12 46,12"
            transform={`rotate(${i * 15} 50 50)`}
          />
        ))}
      </g>
      {/* PL text */}
      <text x="24" y="64" fontFamily="Arial Black, sans-serif" fontSize="38" fontWeight="900" fill="#f97316">P</text>
      <text x="52" y="64" fontFamily="Arial Black, sans-serif" fontSize="38" fontWeight="900" fill="#ffffff">L</text>
      {/* Center hole */}
      <circle cx="50" cy="50" r="4" fill="#0f0f0f"/>
    </svg>
  );
}
