


const PhotoReview = () => {
    const images = import.meta.glob('../assets/images/lumbrr/*.{png,jpg,jpeg,svg,mp4}', { eager: true });
    
    // Sort images by filename
    const sortedImages = Object.keys(images).sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Photo Review</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedImages.map((path) => {
                    // Extract filename from path
                    const filename = path.split('/').pop();
                    const module = images[path] as { default: string };
                    const src = module.default;
                    const isVideo = filename?.endsWith('.mp4');

                    return (
                        <div key={path} className="border rounded-lg overflow-hidden shadow-lg bg-white">
                            <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                                {isVideo ? (
                                    <video 
                                        src={src} 
                                        controls 
                                        className="w-full h-full object-contain"
                                        preload="metadata"
                                    />
                                ) : (
                                    <img 
                                        src={src} 
                                        alt={filename} 
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                )}
                            </div>
                            <div className="p-4">
                                <p className="text-sm font-mono text-gray-600 break-all select-all cursor-text" title="Click to copy filename">
                                    {filename}
                                </p>
                                <button 
                                    className="mt-2 text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
                                    onClick={() => navigator.clipboard.writeText(filename || '')}
                                >
                                    Copy Name
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PhotoReview;
