interface PageHeaderProps {
  title: string;
  subtitle: string;
  bgImage?: string;
}

export function PageHeader({ title, subtitle, bgImage }: PageHeaderProps) {
  return (
    <div className="relative bg-brand-text pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <img 
            src={bgImage} 
            alt="Header Background" 
            className="w-full h-full object-cover opacity-40"
            fetchPriority="high"
          />
        ) : (
          <div className="w-full h-full bg-brand-brown opacity-40" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-brand-text/80 to-transparent z-0" />

      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 animate-fade-in-up">{title}</h1>
        <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}
