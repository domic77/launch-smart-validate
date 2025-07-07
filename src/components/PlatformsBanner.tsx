export const PlatformsBanner = () => {
  const platforms = [
    "Twitter/X", "LinkedIn", "Facebook", "Instagram", "TikTok", "Reddit", 
    "YouTube", "Discord", "Telegram", "WhatsApp", "Pinterest", "Snapchat", 
    "Clubhouse", "Threads"
  ];

  return (
    <section className="py-4 bg-gradient-primary overflow-hidden">
      <div className="relative">
        <div className="flex items-center">
          <div className="flex items-center space-x-8 scroll-animation whitespace-nowrap">
            <span className="text-primary-foreground font-semibold text-sm uppercase tracking-wider">
              INTEGRATED ACROSS:
            </span>
            {platforms.map((platform, index) => (
              <span 
                key={index} 
                className="text-primary-foreground/90 text-sm font-medium"
              >
                {platform}
              </span>
            ))}
            {/* Duplicate for seamless scroll */}
            {platforms.map((platform, index) => (
              <span 
                key={`duplicate-${index}`} 
                className="text-primary-foreground/90 text-sm font-medium"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};