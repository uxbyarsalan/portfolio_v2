import Link from "next/link";
import Image from "next/image";

/**
 * ProjectCard
 *
 * Props:
 *   project   — project data object
 *   basePath  — link base, defaults to "/work"
 *   square    — inner image cutout shape only; outer card always rounded-2xl
 *   variant   — "default" | "outlined" (home grid: white card, 1px stroke,
 *               no shadow/lift/zoom on hover; only the arrow still animates)
 *
 * Important:
 *   - Outer card is always rounded-2xl regardless of `square`.
 *   - The "outlined" variant uses class `proj-card-flat` (instead of `proj-card`)
 *     so the global `.proj-card:hover .proj-img { transform: scale(1.03) }` rule
 *     in globals.css does NOT match — that's how the image zoom is suppressed
 *     for the home grid.
 */
export default function ProjectCard({
  project,
  basePath = "/work",
  square = false,
  variant = "default",
}) {
  const { slug, title, subtitle, stat, statLabel, image } = project;
  const isOutlined = variant === "outlined";

  // Outer link — class swap is the mechanism that disables the global zoom rule on v2 home
  const linkClass = `${isOutlined ? "proj-card-flat" : "proj-card"} group block h-full`;

  // Outer card container
  const cardClass = isOutlined
    ? // v2 outlined: white card, 1px solid #F0F0F0 stroke, NO hover shadow / lift
      "rounded-2xl overflow-hidden h-full flex flex-col bg-white border border-solid border-[#F0F0F0]"
    : // v1 default: original behavior — grey card, hover shadow + lift
      "rounded-2xl overflow-hidden h-full flex flex-col bg-[var(--color-bg-card)] transition-all duration-500 hover:shadow-xl hover:shadow-black/8 hover:translate-y-[-3px]";

  // Inner cutout background — outlined variant goes white to match the card
  const cutoutBg = isOutlined ? "bg-white" : "";

  // Heading size: default keeps original text-2xl/text-3xl (24/30px).
  // Outlined drops desktop to 27px (cards are narrower in 3-col layout). Mobile unchanged.
  const titleClass = isOutlined
    ? "text-2xl md:text-[27px] font-semibold tracking-tight leading-[1.05] mb-3 text-[var(--color-text)]"
    : "text-2xl md:text-3xl font-semibold tracking-tight leading-[1.05] mb-3 text-[var(--color-text)]";

  // Outlined variant: image bleeds edge-to-edge horizontally with no side margin,
  // and uses rounded-none so the image is perfectly flush against the card strokes.
  // Default variant: keeps original 16/20px side gutter and rounded-t-xl top.
  const cutoutWrapperClass = isOutlined ? "mt-auto" : "mx-4 md:mx-5 mt-auto";
  const cutoutShapeClass = isOutlined
    ? "rounded-none"
    : square
      ? "rounded-none"
      : "rounded-t-xl";
  const cutoutAspect = square ? "1/1" : "4/3";

  return (
    <Link href={`${basePath}/${slug}`} className={linkClass}>
      <div className={cardClass}>
        {/* Text content */}
        <div className="px-6 pt-6 pb-4 md:px-7 md:pt-7 md:pb-4">
          <h3 className={titleClass}>
            {title}
          </h3>
          <p className="text-[13px] leading-relaxed mb-4 text-[var(--color-text-muted)]">
            {subtitle}
          </p>
          {stat && (
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold stat-number text-[var(--color-text)]">
                {stat} {statLabel}
              </span>
              {/* Arrow — the ONE hover transition that survives in the outlined variant */}
              <span className="text-lg text-[var(--color-text)] transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </div>
          )}
        </div>

        {/* Cutout mockup — bleeds to bottom edge.
            `square` prop affects ONLY this inner cutout, never the outer card.
            `outlined` variant additionally removes side margin and corner radius. */}
        <div className={cutoutWrapperClass}>
          <div
            className={`relative overflow-hidden ${cutoutShapeClass} ${cutoutBg}`}
            style={{ aspectRatio: cutoutAspect }}
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="proj-img object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.15em]">
                  {title}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
