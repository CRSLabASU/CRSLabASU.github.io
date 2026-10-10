import { z } from 'astro:content';

// A media field is either a plain path ("/images/foo.png", "/videos/demo.mp4")
// or an object when it needs options. Videos default to autoplay + loop,
// which browsers only allow when muted, so autoplaying videos are always muted.
// Captions are off unless `caption` is set.
export interface MediaOptions {
  src: string;
  caption?: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
}

export type MediaSource = string | MediaOptions;

export const mediaSchema = z.union([
  z.string(),
  z.object({
    src: z.string(),
    caption: z.string().optional(),
    poster: z.string().optional(),
    autoplay: z.boolean().optional(),
    loop: z.boolean().optional(),
  }),
]);

const VIDEO_EXTENSIONS = /\.(mp4|webm|mov|m4v|ogv)$/i;

export function resolveMedia(media: MediaSource): Required<Omit<MediaOptions, 'poster' | 'caption'>> & {
  caption?: string;
  poster?: string;
  isVideo: boolean;
} {
  const options = typeof media === 'string' ? { src: media } : media;
  return {
    src: options.src,
    caption: options.caption,
    poster: options.poster,
    autoplay: options.autoplay ?? true,
    loop: options.loop ?? true,
    isVideo: VIDEO_EXTENSIONS.test(options.src),
  };
}
