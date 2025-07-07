export const PlatformsBanner = () => {
  const platforms = [
    "Twitter/X", "LinkedIn", "Facebook", "Instagram", "TikTok", "Reddit", 
    "YouTube", "Discord", "Telegram", "WhatsApp", "Pinterest", "Snapchat", 
    "Clubhouse", "Threads"
  ];

  return (
    <section className="py-6 bg-gradient-multi overflow-hidden shadow-card">
      <div className="relative">
        <div className="flex items-center">
          <div className="flex items-center space-x-12 scroll-animation-fast whitespace-nowrap">
            <span className="text-primary-foreground font-bold text-base uppercase tracking-wider">
              INTEGRATED ACROSS:
            </span>
            {platforms.map((platform, index) => (
              <span 
                key={index} 
                className="text-primary-foreground/95 text-base font-semibold"
              >
                {platform}
              </span>
            ))}
            {/* Duplicate for seamless scroll */}
            {platforms.map((platform, index) => (
              <span 
                key={`duplicate-${index}`} 
                className="text-primary-foreground/95 text-base font-semibold"
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