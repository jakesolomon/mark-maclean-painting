export const PHONE_NUMBER = "(978) 555-0142";
export const LICENSE_NUMBER = "HIC #198765";
export const BUSINESS_NAME = "Mark MacLean Painting";

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
  processSteps: { step: string; title: string; desc: string }[];
  relatedSlugs: string[];
  whyChooseUs: WhyChooseItem[];
}

export interface CityInfo {
  slug: string;
  name: string;
  state: string;
  contextualCopy: string;
}

export const services: ServiceInfo[] = [
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortDesc: "Weather-resistant coatings that protect and beautify your home's exterior for years.",
    description: "Prep includes cleanup, sealing edges, removing old paint, and checking for damaged or rotted siding. We prime and apply two or more coats of high-quality exterior paint for resistance against fading, peeling, and moisture. Full exteriors or focused work on trim, windows, and doors. Residential and commercial.",
    metaTitle: "Exterior Painting in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional exterior painting in the Merrimack Valley. Thorough prep, two-coat minimum, and moisture-resistant finishes. Licensed & Insured. Free estimates.",
    h1: "Exterior Painting",
    processSteps: [
      { step: "01", title: "Inspect & Repair", desc: "Full exterior inspection. Scrape, sand, and repair damaged surfaces." },
      { step: "02", title: "Power Wash", desc: "Remove dirt, mildew, and loose paint with controlled pressure washing." },
      { step: "03", title: "Prime & Caulk", desc: "Spot-prime bare wood and caulk all joints and gaps." },
      { step: "04", title: "Apply Finish Coats", desc: "Two coats of premium exterior paint, brushed and rolled for durability." },
    ],
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
    description: "We cover floors and furniture before starting. We address caulking and drywall issues before applying multiple coats of high-quality interior paint. Full rooms or smaller jobs on walls, ceilings, trim, and doors. Residential and commercial.",
    metaTitle: "Interior Painting in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Expert interior painting in the Merrimack Valley. Full protection, drywall prep, and multiple coats of quality paint. Licensed & Insured. Free estimates.",
    h1: "Interior Painting",
    processSteps: [
      { step: "01", title: "Protect & Prep", desc: "Cover floors, furniture, and fixtures. Patch holes and sand smooth." },
      { step: "02", title: "Prime Surfaces", desc: "Apply primer to new drywall, stains, and color-change areas." },
      { step: "03", title: "Cut-In & Roll", desc: "Hand-cut edges for crisp lines, then roll walls for even coverage." },
      { step: "04", title: "Final Inspection", desc: "Touch up, clean up, and walk through with you for approval." },
    ],
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
    description: "We remove hardware and cabinet doors, cover walls and floors, then prime and apply two or more coats of high-quality paint for clean edges and durable finish. Kitchen cabinets, bathroom vanities, and built-ins. A cost-effective alternative to new cabinetry.",
    metaTitle: "Cabinet Painting in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional cabinet painting in the Merrimack Valley. Hardware removed, clean edges, and durable multi-coat finishes. Licensed & Insured.",
    h1: "Cabinet Painting",
    processSteps: [
      { step: "01", title: "Prep & Mask", desc: "Remove doors, drawers, and hardware. Mask all adjacent surfaces." },
      { step: "02", title: "Sand & Prime", desc: "Degloss and sand all surfaces. Apply bonding primer." },
      { step: "03", title: "Apply Finish Coats", desc: "Two or more coats of high-quality cabinet paint for a durable finish." },
      { step: "04", title: "Hardware Re-install", desc: "Reinstall doors, drawers, and hardware. Final quality check." },
    ],
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
    description: "We repair cracks, holes, moisture, and mold damage with texture-matching for a seamless, paint-ready finish. Commonly needed before interior painting projects.",
    metaTitle: "Drywall Repair in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Expert drywall repair in the Merrimack Valley. Cracks, holes, and moisture damage fixed with seamless texture matching. Licensed & Insured.",
    h1: "Drywall Repair",
    processSteps: [
      { step: "01", title: "Assess Damage", desc: "Evaluate the size and cause of drywall damage." },
      { step: "02", title: "Cut & Patch", desc: "Cut clean edges, install backing, and set new drywall." },
      { step: "03", title: "Tape & Mud", desc: "Apply joint tape and multiple coats of compound, sanding between." },
      { step: "04", title: "Texture & Prime", desc: "Match surrounding texture, prime, and prepare for paint." },
    ],
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
    description: "We prep and repair surfaces as needed, then hang with precise pattern matching and clean lines at ceilings and baseboards. Single accent walls or entire rooms. Residential and commercial.",
    metaTitle: "Wallpaper Hanging in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional wallpaper hanging in the Merrimack Valley. Precise pattern matching, clean lines, and expert surface prep. Licensed & Insured.",
    h1: "Wallpaper Hanging",
    processSteps: [
      { step: "01", title: "Wall Prep", desc: "Clean, smooth, and prime walls for optimal adhesion." },
      { step: "02", title: "Measure & Cut", desc: "Measure drops, match patterns, and cut with precision." },
      { step: "03", title: "Apply & Smooth", desc: "Apply adhesive, hang panels, and smooth out bubbles." },
      { step: "04", title: "Trim & Inspect", desc: "Trim edges, check seams, and clean excess adhesive." },
    ],
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
    description: "We remove wallpaper and all adhesive residue without damaging drywall, and repair any pre-existing damage behind it. Leaves smooth, paint-ready walls.",
    metaTitle: "Wallpaper Removal in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional wallpaper removal in the Merrimack Valley. Damage-free stripping, adhesive cleanup, and smooth wall prep. Licensed & Insured.",
    h1: "Wallpaper Removal",
    processSteps: [
      { step: "01", title: "Score & Steam", desc: "Score the wallpaper surface and apply steam to loosen adhesive." },
      { step: "02", title: "Strip Panels", desc: "Carefully remove wallpaper panels without damaging drywall." },
      { step: "03", title: "Clean Adhesive", desc: "Wash walls to remove all remaining adhesive residue." },
      { step: "04", title: "Skim & Sand", desc: "Skim-coat imperfections and sand smooth for painting." },
    ],
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
    description: "Surface prep includes sanding and cleaning for even stain absorption. We stain furniture, cabinets, decks, stairs, railings, and trim. Interior and exterior.",
    metaTitle: "Wood Staining in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional wood staining in the Merrimack Valley. Sanding, cleaning, and even stain application for decks, cabinets, and trim. Licensed & Insured.",
    h1: "Wood Staining",
    processSteps: [
      { step: "01", title: "Clean & Strip", desc: "Power wash and strip old finish to expose raw wood." },
      { step: "02", title: "Sand & Brighten", desc: "Sand surfaces smooth and apply wood brightener." },
      { step: "03", title: "Apply Stain", desc: "Brush or spray stain evenly, working with the grain." },
      { step: "04", title: "Seal & Protect", desc: "Apply protective topcoat for UV and moisture resistance." },
    ],
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
    description: "Preliminary wash with cleaners followed by high-pressure wash to remove mold, debris, and dirt. Siding, decks, driveways, sidewalks, fences, and patios. Residential and commercial.",
    metaTitle: "Pressure Washing in Merrimack Valley, MA | Mark MacLean Painting",
    metaDesc: "Professional pressure washing in the Merrimack Valley. Mold, debris, and dirt removed from siding, decks, driveways, and more. Licensed & Insured.",
    h1: "Pressure Washing",
    processSteps: [
      { step: "01", title: "Assess Surfaces", desc: "Identify surface types and select appropriate pressure levels." },
      { step: "02", title: "Pre-Treat", desc: "Apply cleaning solution to break down mold, debris, and dirt." },
      { step: "03", title: "Pressure Clean", desc: "High-pressure wash to remove all buildup from surfaces." },
      { step: "04", title: "Final Rinse", desc: "Rinse thoroughly and inspect for any remaining spots." },
    ],
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
  { slug: "andover", name: "Andover", state: "MA", contextualCopy: "Serving the historic homes of Andover with lead-safe certified painting practices. From Phillips Academy to Shawsheen Village, we understand the care these properties demand." },
  { slug: "north-andover", name: "North Andover", state: "MA", contextualCopy: "Professional painting for North Andover's diverse housing stock — from downtown colonials to newer developments along Route 114." },
  { slug: "haverhill", name: "Haverhill", state: "MA", contextualCopy: "From the Victorian homes of Bradford to the riverfront condos downtown, Haverhill properties get the precise, durable finishes they deserve." },
  { slug: "billerica", name: "Billerica", state: "MA", contextualCopy: "Reliable painting services for Billerica homeowners. We protect your investment with quality materials and meticulous preparation." },
  { slug: "lowell", name: "Lowell", state: "MA", contextualCopy: "Expert painting for Lowell's mill conversions, triple-deckers, and single-family homes. Lead-safe certified for older properties." },
  { slug: "methuen", name: "Methuen", state: "MA", contextualCopy: "Methuen homeowners trust us for interior and exterior painting that withstands the Merrimack Valley's seasons." },
  { slug: "tewksbury", name: "Tewksbury", state: "MA", contextualCopy: "Quality painting services for Tewksbury homes. From new construction touch-ups to full exterior repaints." },
  { slug: "dracut", name: "Dracut", state: "MA", contextualCopy: "Serving Dracut with professional painting that combines New England craftsmanship with modern techniques." },
  { slug: "chelmsford", name: "Chelmsford", state: "MA", contextualCopy: "Chelmsford's trusted painters. We deliver clean, lasting results for your home's interior and exterior." },
  { slug: "lawrence", name: "Lawrence", state: "MA", contextualCopy: "Professional painting services for Lawrence homes and multi-family properties. Licensed, insured, and lead-safe certified." },
  { slug: "burlington", name: "Burlington", state: "MA", contextualCopy: "Burlington homeowners rely on us for premium painting services — from colonial restorations to modern refreshes." },
  { slug: "wilmington", name: "Wilmington", state: "MA", contextualCopy: "Wilmington's go-to painters for residential interior and exterior projects. Quality prep, quality paint, quality results." },
];


export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
export const getCityBySlug = (slug: string) => cities.find(c => c.slug === slug);
