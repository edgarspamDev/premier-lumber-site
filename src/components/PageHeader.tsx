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
            className="w-full h-full object-cover opacity-60"
            fetchPriority="high"
          />
        ) : (
          <div className="w-full h-full bg-brand-brown opacity-40" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-brand-text/60 to-transparent z-0" />

      <div className="container-custom relative z-10 text-center">
        {/* Back / Breadcrumbs */}
        <div className="flex justify-center mb-6">
          <nav className="inline-flex items-center text-sm font-medium text-stone-300 hover:text-white transition-colors bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span className="mx-2 text-stone-500">/</span>
            <span className="text-white">{title}</span>
          </nav>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 animate-fade-in-up">{title}</h1>
        <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}
