// Classes partagées entre les pages.
// Le site occupe la largeur de l'écran, avec des marges de sécurité et une limite sur très grand écran.
export const containerClass = "mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12";
export const sectionClass = `${containerClass} py-12 sm:py-20`;
export const pageTitleClass = "mt-3 text-3xl font-medium tracking-tight sm:text-5xl";
export const titleClass = "mt-3 text-2xl font-medium tracking-tight sm:text-4xl";
export const primaryButtonClass =
  "inline-flex min-h-11 items-center rounded-[3px] bg-accent px-5 font-medium text-background hover:opacity-90";
export const secondaryButtonClass =
  "inline-flex min-h-11 items-center rounded-[3px] border border-border px-5 hover:border-accent";
export const textLinkClass = "underline underline-offset-4 hover:text-accent";
