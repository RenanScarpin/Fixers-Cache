export interface SourceLinkInfo {
  url: string
  title: string
  linkLabel: string
}

const RTG_DOWNLOADS = 'https://rtalsoriangames.com/downloadable-content/'

/**
 * Official R. Talsorian Games / R. Talsorian Store destinations for item sources.
 *
 * Paid books point to an official product/purchase page where one is available.
 * Interface RED volumes 2-5 are sold as DriveThruRPG/POD titles, so they point to
 * RTG's own release/purchase posts rather than to a third-party URL directly.
 * Free DLC points to RTG's official downloads page.
 */
export const SOURCE_LINKS: Record<string, SourceLinkInfo> = {
  NMI: {
    url: 'https://rtalsoriangames.com/2025/01/27/shopping-trip-time-night-market-index-is-now-updated-to-v-1-1/',
    title: 'Night Market Index',
    linkLabel: 'View the official Night Market Index',
  },
  BC: {
    url: 'https://talsorianstore.com/products/black-chrome-digital-pdf',
    title: 'Black Chrome',
    linkLabel: 'Buy Black Chrome from R. Talsorian Games',
  },
  CEMK: {
    url: 'https://talsorianstore.com/products/cyberpunk-edgerunners-mission-kit-digital-edition',
    title: 'Cyberpunk: Edgerunners Mission Kit',
    linkLabel: 'Buy the Cyberpunk: Edgerunners Mission Kit from R. Talsorian Games',
  },
  CPCW: {
    url: 'https://rtalsoriangames.com/2023/12/08/pax-unplugged-flipbook-part-2-the-cyberpunk-edgerunners-mission-kit-car-wars-crossover/',
    title: 'CP:R/Car Wars Crossover Promo',
    linkLabel: 'View the official CP:R/Car Wars crossover',
  },
  'CP:R': {
    url: 'https://talsorianstore.com/collections/cyberpunk-red/products/cyberpunk-red-digital-edition',
    title: 'Cyberpunk RED',
    linkLabel: 'Buy Cyberpunk RED from R. Talsorian Games',
  },
  'CP:DP': {
    url: 'https://talsorianstore.com/products/cyberpunk-red-data-pack-digital-pdf',
    title: 'Cyberpunk RED Data Pack',
    linkLabel: 'Buy the Cyberpunk RED Data Pack from R. Talsorian Games',
  },
  DGD: {
    url: 'https://talsorianstore.com/collections/digital-products-pdfs/products/danger-gal-dossier-digital-pdf',
    title: 'Danger Gal Dossier',
    linkLabel: 'Buy Danger Gal Dossier from R. Talsorian Games',
  },
  IR1: {
    url: 'https://talsorianstore.com/collections/cyberpunk-red/products/interface-red-volume-1',
    title: 'Interface RED Volume 1',
    linkLabel: 'Buy Interface RED Volume 1 from R. Talsorian Games',
  },
  IR2: {
    url: 'https://rtalsoriangames.com/2023/03/05/interface-red-vol-ume-2-is-go-other-cyberpunk-news/',
    title: 'Interface RED Volume 2',
    linkLabel: 'View the official Interface RED Volume 2 purchase page',
  },
  IR3: {
    url: 'https://rtalsoriangames.com/2024/02/24/interface-red-volume-3-has-released-on-drivethrurpg/',
    title: 'Interface RED Volume 3',
    linkLabel: 'View the official Interface RED Volume 3 purchase page',
  },
  IR4: {
    url: 'https://rtalsoriangames.com/2025/05/28/interface-red-volume-4-is-updated-physical-prints-coming-soon/',
    title: 'Interface RED Volume 4',
    linkLabel: 'View the official Interface RED Volume 4 purchase page',
  },
  IR5: {
    url: 'https://rtalsoriangames.com/2026/02/19/night-city-2045-timeline-interface-red-volume-5-pod-available/',
    title: 'Interface RED Volume 5',
    linkLabel: 'View the official Interface RED Volume 5 purchase page',
  },
  MC: {
    url: 'https://rtalsoriangames.com/2021/10/25/micro-chrome-now-available/',
    title: 'Micro Chrome',
    linkLabel: 'View the official Micro Chrome page',
  },
  'T:Hope': {
    url: 'https://talsorianstore.com/collections/digital-products-pdfs/products/tales-of-the-red-hope-reborn-digital-pdf',
    title: 'Tales of the RED: Hope Reborn',
    linkLabel: 'Buy Tales of the RED: Hope Reborn from R. Talsorian Games',
  },
  'T:Street': {
    url: 'https://talsorianstore.com/products/tales-of-the-red-street-stories-copy',
    title: 'Tales of the RED: Street Stories',
    linkLabel: 'Buy Tales of the RED: Street Stories from R. Talsorian Games',
  },
}

const DLC_TITLES: Record<string, string> = {
  'DL:12Cute': '12 Days of Cutiemas',
  'DL:12Cy': '12 Days of Cybermas',
  'DL:12Gear': '12 Days of Gearmas',
  'DL:12Gun': '12 Days of Gunmas',
  'DL:12RED': '12 Days of REDMas',
  'DL:12V': '12 Days of VehicleMas',
  'DL:AAA': 'All About Agents',
  'DL:BC+': 'Black Chrome+',
  'DL:Cargo': 'Cargo Containers & Cube Hotels',
  'DL:CC': 'Cyberchairs',
  'DL:CtR': 'Chasing the Rabbit',
  'DL:Conapts': 'Corp Conapts & Studio Apartments',
  'DL:DGD+': 'Danger Gal Dossier+',
  'DL:Elf1': 'Elflines Online',
  'DL:ElfTCG': 'Elflines Online the TCG',
  'DL:ElfM': 'Elflines Online: Magic Returns',
  'DL:GQ': 'Going Quiet',
  'DL:Home': 'No Place Like Home',
  'DL:HP': 'Hornet’s Pharmacy',
  'DL:HR+': 'Hope Reborn+',
  'DL:JSK': 'Jumpstart Kit Conversion Guide',
  'DL:Mix': 'Mixing Drinks—Changing Lives',
  'DL:MHC': 'Must Have Cyberware Deals',
  'DL:MK2': 'Mission Kit DLC #2',
  'DL:Punk': 'Dreaded Punknaught',
  'DL:Sego': 'Segotari Power',
  'DL:Stick': 'Stickball',
  'DL:TT': 'Toggle’s Temple',
  'DL:UP': 'Midnight With the Upload',
  'DL:WG': 'Woodchipper’s Garage',
  'DL:We': 'Night City Weather',
  'DL:Wheels': 'Spinning Your Wheels',
  'DL:YNBF': 'Your New Best Friend',
}

for (const [code, title] of Object.entries(DLC_TITLES)) {
  SOURCE_LINKS[code] = {
    url: RTG_DOWNLOADS,
    title,
    linkLabel: `Find ${title} on R. Talsorian Games downloads`,
  }
}

export function getSourceLink(code: string | null): SourceLinkInfo | null {
  if (!code) return null
  return SOURCE_LINKS[code] ?? null
}
