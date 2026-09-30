import type { CSSProperties } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface FigureProps {
  src: string;
  alt: string;
  /** Defaults to the alt text. Keep factual — describe what the photo shows. */
  caption?: string;
  /** "center" renders below the text; "left"/"right" float beside it on md+ screens. */
  align?: "center" | "left" | "right";
  /** Width constraint for centered figures. */
  className?: string;
  /** Sizing/object-fit for the img itself. */
  imgClassName?: string;
  style?: CSSProperties;
}

/**
 * Article figure: clickable photo (opens a full-size lightbox) with a caption.
 * Side-aligned figures float beside the body copy on desktop and stack on mobile.
 * Sections containing a floated figure should use `flow-root` to contain the float.
 */
export function Figure({
  src,
  alt,
  caption,
  align = "center",
  className = "max-w-2xl",
  imgClassName = "h-auto object-contain",
  style,
}: FigureProps) {
  const text = caption ?? alt;
  const image = (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          style={style}
          className={`w-full ${imgClassName} rounded-lg border cursor-pointer hover:opacity-90 transition-opacity`}
        />
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[95vh]">
        <DialogTitle className="sr-only">{alt} - Full Size</DialogTitle>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[90vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );

  if (align === "center") {
    return (
      <figure className={`mx-auto w-full ${className} mb-8`}>
        {image}
        <figcaption className="mt-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
          {text}
        </figcaption>
      </figure>
    );
  }

  const floatCls =
    align === "right" ? "md:float-right md:ml-8" : "md:float-left md:mr-8";
  const captionAlign = align === "right" ? "md:text-right" : "md:text-left";
  return (
    <figure className={`w-full md:w-[42%] ${floatCls} mb-8 md:mb-6`}>
      {image}
      <figcaption
        className={`mt-3 text-center ${captionAlign} font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground`}
      >
        {text}
      </figcaption>
    </figure>
  );
}
