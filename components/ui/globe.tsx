"use client";
import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const REALISTIC_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2.5, // Increased for better detail
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.6, // Increased for more realistic lighting
  mapSamples: 24000, // Increased for more detail
  mapBrightness: 1.4, // Enhanced to show more terrain detail
  baseColor: [0.16, 0.2, 1], // More blue for oceans
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [0.8, 0.8, 1], // Slight blue atmospheric glow
  scale: 1.1, // Slightly larger
  // Major cities around the world
  markers: [
    // Americas
    { location: [40.7128, -74.006], size: 0.06 }, // New York
    { location: [19.4326, -99.1332], size: 0.05 }, // Mexico City
    { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
    { location: [41.8781, -87.6298], size: 0.04 }, // Chicago
    { location: [34.0522, -118.2437], size: 0.05 }, // Los Angeles
    // Europe
    { location: [51.5074, -0.1278], size: 0.05 }, // London
    { location: [48.8566, 2.3522], size: 0.05 }, // Paris
    { location: [52.5200, 13.4050], size: 0.04 }, // Berlin
    { location: [41.9028, 12.4964], size: 0.04 }, // Rome
    { location: [40.4168, -3.7038], size: 0.04 }, // Madrid
    // Asia
    { location: [39.9042, 116.4074], size: 0.06 }, // Beijing
    { location: [19.076, 72.8777], size: 0.06 }, // Mumbai
    { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
    { location: [22.3193, 114.1694], size: 0.04 }, // Hong Kong
    { location: [37.5665, 126.9780], size: 0.04 }, // Seoul
    // Africa
    { location: [30.0444, 31.2357], size: 0.05 }, // Cairo
    { location: [-33.9249, 18.4241], size: 0.04 }, // Cape Town
    { location: [6.5244, 3.3792], size: 0.05 }, // Lagos
    // Australia/Oceania
    { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
    { location: [-37.8136, 144.9631], size: 0.04 }, // Melbourne
  ],
};

export function Globe({
  className,
  config = REALISTIC_GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  // Use useRef for mutable values that shouldn't trigger re-renders
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.005;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);
    
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}