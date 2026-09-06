import {
  Award,
  Beaker,
  Droplets,
  FlaskConical,
  Headset,
  Pill,
  Scroll,
  Shield,
  Shirt,
  TrainFront,
  Truck,
  Zap,
} from "lucide-react";
import type { IconKey } from "@/lib/content";

/** Maps content icon keys to Lucide components. Keeping the mapping here means
 *  the data modules stay free of framework imports. */
const map = {
  droplets: Droplets,
  zap: Zap,
  train: TrainFront,
  shield: Shield,
  shirt: Shirt,
  pill: Pill,
  scroll: Scroll,
  flask: FlaskConical,
  beaker: Beaker,
  truck: Truck,
  headset: Headset,
  badge: Award,
} as const;

export default function Icon({
  name,
  size = 20,
  className,
}: {
  name: IconKey;
  size?: number;
  className?: string;
}) {
  const Glyph = map[name];
  return (
    <Glyph size={size} strokeWidth={1.8} className={className} aria-hidden="true" />
  );
}
