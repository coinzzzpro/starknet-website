import { LinkData } from "@starknet-io/cms-data/src/settings/main-menu";

export const titleCase = (s = "") => {
  return s
    .split(/[-_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function getComputedLinkData(
  locale: string,
  link?: LinkData
): { href?: string; label?: string } {
  if (!link) {
    return { href: '', label: '' };
  }

  const label = link.custom_title || link.page_data?.title || link.post_data?.title;

  let href = link.custom_external_link || 
             `/${locale}/${link.custom_internal_link?.replace(/(^\/|\/$)/g, "")}` ||
             link.page_data?.link ||
             `/${locale}/posts/${link.post_data?.category}/${link.post_data?.slug}`;

  href = href || '#';

  return { href, label };
}

export function loadScript(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const head = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.src = url;

    // Resolve the promise when the script is successfully loaded
    script.onload = () => resolve();

    // Reject the promise if there's an error loading the script
    script.onerror = error => reject(error);

    head.appendChild(script);
  });
}
