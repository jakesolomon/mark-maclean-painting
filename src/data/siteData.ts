export const PHONE_NUMBER = "(978) 912-4271";
export const BUSINESS_NAME = "Mark MacLean Painting";
export const EMAIL_ADDRESS = "m.macleanpainting@gmail.com";

export interface WhyChooseItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceInfo {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  relatedSlugs: string[];
  whyChooseUs: WhyChooseItem[];
}

export interface CityInfo {
  slug: string;
  name: string;
  state: string;
}

export const services: ServiceInfo[] = [
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortDesc: "Weather-resistant coatings that protect and beautify your home's exterior for years.",
    description: "Our exterior painting process ensures lasting results: thorough surface prep including edge sealing and old paint removal, inspection for siding damage, professional priming, and two or more coats of premium exterior paint. The result is a finish that resists fading, peeling, and moisture damage through New England's toughest weather. Available for complete exteriors or specific features like trim and windows.",
    metaTitle: "Exterior Painting in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional exterior painting in the Merrimack Valley. Thorough prep, two-coat minimum, and moisture-resistant finishes. Fully Insured. Free estimates.",
    h1: "Exterior Painting",
    relatedSlugs: ["interior-painting", "pressure-washing", "wood-staining"],
    whyChooseUs: [
      { icon: "Layers", title: "Surface Prep First", desc: "We remove old paint and check for rotted or damaged siding before touching a brush." },
      { icon: "ShieldCheck", title: "Two-Coat Minimum", desc: "Every exterior gets a full prime plus two or more finish coats for lasting protection." },
      { icon: "Droplets", title: "Moisture Protection", desc: "Paint selection and application engineered to resist fading, peeling, and water damage." },
      { icon: "Building2", title: "Residential & Commercial", desc: "Full exteriors or focused work on trim, windows, and doors for any property type." },
    ],
  },
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortDesc: "Transform your living spaces with flawless walls, crisp lines, and zero mess.",
    description: "We cover floors and furniture before starting. We address caulking and drywall issues before applying multiple coats of high-quality interior paint. Full rooms or smaller jobs on walls, ceilings, trim, and doors.",
    metaTitle: "Interior Painting in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Expert interior painting in the Merrimack Valley. Full protection, drywall prep, and multiple coats of quality paint. Fully Insured. Free estimates.",
    h1: "Interior Painting",
    relatedSlugs: ["exterior-painting", "cabinet-painting", "drywall-repair"],
    whyChooseUs: [
      { icon: "ShieldCheck", title: "Full Protection", desc: "Floors and furniture are covered before we start — no mess, no damage." },
      { icon: "Wrench", title: "Prep Before Paint", desc: "We address caulking and drywall issues before any paint goes on the wall." },
      { icon: "Layers", title: "Multiple Coats", desc: "High-quality interior paint applied in multiple coats for even, lasting coverage." },
      { icon: "Home", title: "Any Room, Any Size", desc: "Full rooms or smaller jobs on walls, ceilings, trim, and doors." },
    ],
  },
  {
    slug: "cabinet-painting",
    name: "Cabinet Painting",
    shortDesc: "Refinish your kitchen cabinets for a fraction of the cost of replacement.",
    description: "Give your cabinets a fresh, modern look without the cost and disruption of replacement. We carefully prep your kitchen cabinets, bathroom vanities, or built-ins by protecting surrounding areas and removing all hardware. Multiple coats of premium paint deliver a factory-fresh finish with clean edges and lasting durability.",
    metaTitle: "Cabinet Painting in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional cabinet painting in the Merrimack Valley. Hardware removed, clean edges, and durable multi-coat finishes. Fully Insured.",
    h1: "Cabinet Painting",
    relatedSlugs: ["interior-painting", "wood-staining"],
    whyChooseUs: [
      { icon: "Unplug", title: "Hardware Removed", desc: "Doors and hardware come off before we start — ensuring full coverage on every surface." },
      { icon: "Target", title: "Clean Edges Guaranteed", desc: "Walls and floors covered, precise masking for sharp lines on every cabinet." },
      { icon: "ShieldCheck", title: "Built to Last", desc: "Two or more coats of high-quality paint rated for heavy daily use." },
      { icon: "PiggyBank", title: "Cost-Effective Alternative", desc: "Kitchen cabinets, bathroom vanities, and built-ins refreshed at a fraction of replacement cost." },
    ],
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    shortDesc: "Seamless patches for holes, cracks, and water damage — invisible once painted.",
    description: "We repair cracks, holes, moisture, and mold damage with texture-matching for a seamless, paint-ready finish. Available as a standalone service or paired with interior painting.",
    metaTitle: "Drywall Repair in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Expert drywall repair in the Merrimack Valley. Cracks, holes, and moisture damage fixed with seamless texture matching. Fully Insured.",
    h1: "Drywall Repair",
    relatedSlugs: ["interior-painting", "wallpaper-removal"],
    whyChooseUs: [
      { icon: "Scan", title: "Full Damage Assessment", desc: "We evaluate cracks, holes, moisture, and mold damage before making any repairs." },
      { icon: "Puzzle", title: "Texture Matching", desc: "Repairs are blended to match existing wall texture for a seamless result." },
      { icon: "Paintbrush", title: "Paint-Ready Finish", desc: "Walls are left smooth and primed, ready for a flawless coat of paint." },
      { icon: "ArrowRightLeft", title: "Pairs with Painting", desc: "Commonly needed before interior painting — we handle both in one project." },
    ],
  },
  {
    slug: "wallpaper-hanging",
    name: "Wallpaper Hanging",
    shortDesc: "Precision wallpaper installation with perfectly matched patterns and seams.",
    description: "Expert wallpaper hanging for accent walls or full rooms. We handle surface preparation, precise pattern alignment, and clean edge work at ceilings and baseboards. Our attention to detail ensures a professional finish that transforms your space.",
    metaTitle: "Wallpaper Hanging in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional wallpaper hanging in the Merrimack Valley. Precise pattern matching, clean lines, and expert surface prep. Fully Insured.",
    h1: "Wallpaper Hanging",
    relatedSlugs: ["wallpaper-removal", "interior-painting"],
    whyChooseUs: [
      { icon: "Wrench", title: "Surface Prep & Repair", desc: "Walls are prepped and repaired as needed before any wallpaper goes up." },
      { icon: "Grid3x3", title: "Precise Pattern Matching", desc: "Every seam is aligned and every pattern is matched for a professional finish." },
      { icon: "Ruler", title: "Clean Lines", desc: "Sharp, clean edges at ceilings and baseboards — no rough cuts or gaps." },
      { icon: "Building2", title: "Accent Walls or Full Rooms", desc: "Single statement walls or entire rooms, for residential and commercial spaces." },
    ],
  },
  {
    slug: "wallpaper-removal",
    name: "Wallpaper Removal",
    shortDesc: "Clean, damage-free wallpaper stripping that leaves walls ready for a fresh finish.",
    description: "We safely remove wallpaper and all adhesive residue without damaging drywall, and repair any pre-existing damage behind it. Leaves smooth, paint-ready walls.",
    metaTitle: "Wallpaper Removal in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional wallpaper removal in the Merrimack Valley. Damage-free stripping, adhesive cleanup, and smooth wall prep. Fully Insured.",
    h1: "Wallpaper Removal",
    relatedSlugs: ["wallpaper-hanging", "interior-painting", "drywall-repair"],
    whyChooseUs: [
      { icon: "ShieldCheck", title: "Drywall Protected", desc: "We remove wallpaper without damaging the drywall underneath." },
      { icon: "Eraser", title: "Full Adhesive Removal", desc: "All adhesive residue is cleaned away — no sticky patches left behind." },
      { icon: "Wrench", title: "Pre-Existing Damage Repaired", desc: "Any damage found behind the wallpaper is repaired before we finish." },
      { icon: "Paintbrush", title: "Smooth, Paint-Ready Walls", desc: "Walls are left smooth and ready for a fresh coat of paint or new wallpaper." },
    ],
  },
  {
    slug: "wood-staining",
    name: "Wood Staining",
    shortDesc: "Enhance the natural beauty of decks, fences, and trim with premium stains.",
    description: "Expert wood staining brings out the natural beauty of wood while protecting it from wear. We carefully sand and clean surfaces for optimal stain absorption, then apply finishes that deliver rich, even color. Interior or exterior: furniture, cabinetry, decks, stairs, railings, and trim.",
    metaTitle: "Wood Staining in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional wood staining in the Merrimack Valley. Sanding, cleaning, and even stain application for decks, cabinets, and trim. Fully Insured.",
    h1: "Wood Staining",
    relatedSlugs: ["exterior-painting", "pressure-washing"],
    whyChooseUs: [
      { icon: "Paintbrush", title: "Thorough Surface Prep", desc: "Sanding and cleaning ensure even stain absorption with no blotchy spots." },
      { icon: "TreeDeciduous", title: "Interior & Exterior", desc: "We stain furniture, cabinets, decks, stairs, railings, and trim — inside and out." },
      { icon: "Layers", title: "Even Application", desc: "Stain is applied evenly, working with the wood grain for a natural finish." },
      { icon: "Armchair", title: "Furniture to Decks", desc: "From fine furniture and cabinets to large decks and railings." },
    ],
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    shortDesc: "Restore driveways, siding, and patios to like-new condition with controlled pressure.",
    description: "Professional pressure washing restores curb appeal and removes years of buildup from siding, decks, driveways, sidewalks, fences, and patios. We use a two-step process: targeted cleaners to break down stubborn grime, followed by high-pressure washing to eliminate mold, dirt, and debris.",
    metaTitle: "Pressure Washing in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional pressure washing in the Merrimack Valley. Mold, debris, and dirt removed from siding, decks, driveways, and more. Fully Insured.",
    h1: "Pressure Washing",
    relatedSlugs: ["exterior-painting", "wood-staining"],
    whyChooseUs: [
      { icon: "SprayCan", title: "Pre-Treat with Cleaners", desc: "Surfaces are pre-washed with cleaning solutions before high-pressure treatment." },
      { icon: "Droplets", title: "Mold & Debris Removal", desc: "Mold, debris, and built-up dirt are fully removed from every surface." },
      { icon: "LayoutGrid", title: "All Surface Types", desc: "Siding, decks, driveways, sidewalks, fences, and patios — we clean them all." },
      { icon: "Building2", title: "Residential & Commercial", desc: "Professional-grade pressure washing for homes and commercial properties." },
    ],
  },
];

export const cities: CityInfo[] = [
  { slug: "andover", name: "Andover", state: "MA" },
  { slug: "north-andover", name: "North Andover", state: "MA" },
  { slug: "haverhill", name: "Haverhill", state: "MA" },
  { slug: "billerica", name: "Billerica", state: "MA" },
  { slug: "lowell", name: "Lowell", state: "MA" },
  { slug: "methuen", name: "Methuen", state: "MA" },
  { slug: "tewksbury", name: "Tewksbury", state: "MA" },
  { slug: "dracut", name: "Dracut", state: "MA" },
  { slug: "chelmsford", name: "Chelmsford", state: "MA" },
  { slug: "lawrence", name: "Lawrence", state: "MA" },
  { slug: "burlington", name: "Burlington", state: "MA" },
  { slug: "wilmington", name: "Wilmington", state: "MA" },
];


export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
export const getCityBySlug = (slug: string) => cities.find(c => c.slug === slug);
