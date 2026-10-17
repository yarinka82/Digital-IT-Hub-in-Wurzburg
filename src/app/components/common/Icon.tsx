import Image from "next/image";
import type { ComponentType } from "react";

type IconProps = {
  className?: string;
  iconName?: string;
  SvgComponent?: ComponentType<{
    className?: string;
    width?: number;
    height?: number;
  }>;
  src?: string;
  width?: number;
  height?: number;
  size?: number;
};

export default function Icon({
  className,
  iconName,
  SvgComponent,
  src,
  width,
  height,
  size,
}: IconProps) {
  const finalWidth = width ?? size;
  const finalHeight = height ?? size;

  if (SvgComponent) {
    return (
      <SvgComponent
        className={className}
        width={finalWidth}
        height={finalHeight}
      />
    );
  }

  if (src) {
    return (
      <Image
        src={src}
        className={className}
        alt={iconName ?? "icon"}
        width={finalWidth}
        height={finalHeight}
        priority
      />
    );
  }

  if (iconName) {
    const version = process.env.BUILD_TIME_VERSION;
    return (
      <svg className={className} width={finalWidth} height={finalHeight}>
        <use href={`/sprite.svg?v=${version}#${iconName}`} />
      </svg>
    );
  }

  return null;
}
