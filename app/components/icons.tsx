import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps): IconProps => ({
  width: 16,
  height: 16,
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  ...props,
});

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base({ fill: "none", stroke: "currentColor", ...props })}>
      <path
        d="M3 6h18M3 12h18M3 18h18"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base({ fill: "none", stroke: "currentColor", ...props })}>
      <circle cx={11} cy={11} r={7} strokeWidth={2} />
      <path d="m20 20-3.5-3.5" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.2-1.3 1.4-1.3h1.4V5.8c-.7-.1-1.4-.2-2-.2-2 0-3.4 1.2-3.4 3.5v1.9H8.5V14h2.4v7h2.6Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M17.5 4h2.6l-5.7 6.5L21 20h-5.3l-4.1-5.4L6.8 20H4.2l6-6.9L3.5 4h5.4l3.7 4.9L17.5 4Zm-.9 14.5h1.4L8.4 5.4H6.9l9.7 13.1Z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1 .1l-.8-.1a4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.3 11.6 11.6 0 0 0 8.3 20c7.5 0 11.6-6.3 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base({ fill: "none", stroke: "currentColor", ...props })}>
      <rect x={3} y={5} width={18} height={14} rx={2} strokeWidth={2} />
      <path d="m4 7 8 6 8-6" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function CommentIcon(props: IconProps) {
  return (
    <svg {...base({ fill: "none", stroke: "currentColor", ...props })}>
      <path
        d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 20l1-3.7A8.4 8.4 0 1 1 21 11.5Z"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...base({ fill: "none", stroke: "currentColor", width: 12, height: 12, ...props })}>
      <path d="m6 9 6 6 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...base({ fill: "none", stroke: "currentColor", ...props })}>
      <path d="m15 18-6-6 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base({ fill: "none", stroke: "currentColor", ...props })}>
      <path d="m9 18 6-6-6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base({ fill: "none", stroke: "currentColor", ...props })}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
