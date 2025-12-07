import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ZoomIn } from "lucide-react";

interface ScreenshotViewerProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ScreenshotViewer({ src, alt, caption }: ScreenshotViewerProps) {
  return (
    <div className="my-6">
      <Dialog>
        <DialogTrigger asChild>
          <div className="screenshot-container group relative">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                <ZoomIn className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden bg-transparent border-none shadow-none">
          <VisuallyHidden>
            <DialogTitle>{alt}</DialogTitle>
          </VisuallyHidden>
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </DialogContent>
      </Dialog>
      {caption && (
        <p className="text-center text-sm text-muted-foreground mt-2 italic">
          {caption}
        </p>
      )}
    </div>
  );
}
