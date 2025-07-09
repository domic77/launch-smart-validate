import React, { useRef, useEffect } from "react";
import { motion } from "@motionone/react";
import { animate } from "@motionone/dom";
import { cn } from "@/lib/utils";

export function ButtonWithMovingBorder({
  borderRadius = "1rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
  [key: string]: any;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create the glowing border element
    const container = containerRef.current;
    const glowElement = document.createElement('div');
    
    // Style the glow element
    glowElement.className = cn(
      "absolute w-16 h-4 blur-sm opacity-80 bg-[radial-gradient(var(--sky-500)_40%,transparent_70%)]",
      borderClassName
    );
    
    container.appendChild(glowElement);
    
    // Create animation path points
    let animationRef: number;
    let startTime = 0;
    let currentSegment = 0;
    
    const updatePosition = (timestamp: number) => {
      if (!container) return;
      
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Get container dimensions
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      // Calculate perimeter path coordinates (adjusted for element size)
      const topLeft = { x: 0, y: 0 };
      const topRight = { x: width - 64, y: 0 };
      const bottomRight = { x: width - 64, y: height - 16 };
      const bottomLeft = { x: 0, y: height - 16 };
      
      // Total animation time (4 seconds for full cycle)
      const totalDuration = 4000;
      const segmentDuration = totalDuration / 4;
      
      // Current time in the animation cycle
      const cycleTime = elapsed % totalDuration;
      
      // Determine which segment we're in
      currentSegment = Math.floor(cycleTime / segmentDuration);
      
      // Progress within the current segment (0 to 1)
      const segmentProgress = (cycleTime % segmentDuration) / segmentDuration;
      
      // Calculate position based on current segment and progress
      let x = 0, y = 0, rotation = 0;
      
      if (currentSegment === 0) {
        // Top edge: left to right
        x = topLeft.x + (topRight.x - topLeft.x) * segmentProgress;
        y = topLeft.y;
        rotation = 0;
      } else if (currentSegment === 1) {
        // Right edge: top to bottom
        x = topRight.x;
        y = topRight.y + (bottomRight.y - topRight.y) * segmentProgress;
        rotation = 90;
      } else if (currentSegment === 2) {
        // Bottom edge: right to left
        x = bottomRight.x - (bottomRight.x - bottomLeft.x) * segmentProgress;
        y = bottomRight.y;
        rotation = 180;
      } else {
        // Left edge: bottom to top
        x = bottomLeft.x;
        y = bottomLeft.y - (bottomLeft.y - topLeft.y) * segmentProgress;
        rotation = 270;
      }
      
      // Apply position
      glowElement.style.left = `${x}px`;
      glowElement.style.top = `${y}px`;
      glowElement.style.transform = `rotate(${rotation}deg)`;
      
      // Continue animation
      animationRef = requestAnimationFrame(updatePosition);
    };
    
    // Start animation
    animationRef = requestAnimationFrame(updatePosition);
    
    return () => {
      if (animationRef) {
        cancelAnimationFrame(animationRef);
      }
      if (glowElement && glowElement.parentNode) {
        glowElement.parentNode.removeChild(glowElement);
      }
    };
  }, [borderClassName]);

  return (
    <Component
      className={cn(
        "bg-transparent relative h-auto w-auto p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      />

      <div
        className={cn(
          "relative border border-border/40 bg-background/60 backdrop-blur-sm flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
} 