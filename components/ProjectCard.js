import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { slug, title, subtitle, stat, statLabel, image } = project;

  return (
    <Link href={`/work/${slug}`} className="proj-card group block h-full">
      <div className="rounded-2xl overflow-hidden h-full flex flex-col bg-[var(--color-bg-card)] transition-all duration-500 hover:shadow-xl hover:shadow-black/8 hover:translate-y-[-3px]">
        {/* Text content */}
        <div className="px-6 pt-6 pb-4 md:px-7 md:pt-7 md:pb-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.05] mb-3 text-[var(--color-text)]">
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
              <span className="text-lg text-[var(--color-text)] transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </div>
          )}
        </div>

        {/* Cutout mockup — bleeds to bottom edge */}
        <div className="mx-4 md:mx-5 mt-auto">
          <div className="relative rounded-t-xl overflow-hidden shadow-[0_-2px_12px_rgba(0,0,0,0.06)] bg-white" style={{ aspectRatio: "4/3" }}>
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
