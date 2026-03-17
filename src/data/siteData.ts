export const PHONE_NUMBER = "(978) 555-0142";
export const LICENSE_NUMBER = "HIC #198765";
export const BUSINESS_NAME = "Merrimack Valley Painters";

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
    description: "Our exterior painting service delivers lasting protection against New England's harsh weather. We use premium acrylic latex paints rated for freeze-thaw cycles, applied over meticulously prepared surfaces. Every project begins with a thorough inspection to address peeling, cracking, or wood rot before a single coat is applied.",
    metaTitle: "Exterior Painting Services Merrimack Valley MA | Licensed Painters",
    metaDesc: "Professional exterior painting in the Merrimack Valley. Weather-resistant coatings, thorough prep, and lasting results. Licensed & Insured. Free estimates.",
    h1: "Exterior House Painting in Merrimack Valley",
    processSteps: [
      { step: "01", title: "Inspect & Repair", desc: "Full exterior inspection. Scrape, sand, and repair damaged surfaces." },
      { step: "02", title: "Power Wash", desc: "Remove dirt, mildew, and loose paint with controlled pressure washing." },
      { step: "03", title: "Prime & Caulk", desc: "Spot-prime bare wood and caulk all joints and gaps." },
      { step: "04", title: "Apply Finish Coats", desc: "Two coats of premium exterior paint, brushed and rolled for durability." },
    ],
    relatedSlugs: ["interior-painting", "pressure-washing", "wood-staining"],
  },
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortDesc: "Transform your living spaces with flawless walls, crisp lines, and zero mess.",
    description: "We transform interiors with precision brush and roller work. From single accent walls to whole-home repaints, every project is executed with furniture protection, dust containment, and meticulous cut-in lines. We use low-VOC paints so your home stays healthy.",
    metaTitle: "Interior Painting Services Merrimack Valley MA | Professional Painters",
    metaDesc: "Expert interior painting in the Merrimack Valley. Flawless finishes, low-VOC paints, and clean workmanship. Licensed & Insured. Free estimates.",
    h1: "Interior Painting Services in Merrimack Valley",
    processSteps: [
      { step: "01", title: "Protect & Prep", desc: "Cover floors, furniture, and fixtures. Patch holes and sand smooth." },
      { step: "02", title: "Prime Surfaces", desc: "Apply primer to new drywall, stains, and color-change areas." },
      { step: "03", title: "Cut-In & Roll", desc: "Hand-cut edges for crisp lines, then roll walls for even coverage." },
      { step: "04", title: "Final Inspection", desc: "Touch up, clean up, and walk through with you for approval." },
    ],
    relatedSlugs: ["exterior-painting", "cabinet-painting", "drywall-repair"],
  },
  {
    slug: "cabinet-painting",
    name: "Cabinet Painting",
    shortDesc: "Refinish your kitchen cabinets for a fraction of the cost of replacement.",
    description: "Cabinet refinishing is one of the highest-ROI home improvements. We remove doors and hardware, sand and prime every surface, then apply a factory-smooth spray finish. The result is a kitchen that looks brand new without the cost or disruption of a full remodel.",
    metaTitle: "Cabinet Painting & Refinishing Merrimack Valley MA | Expert Finish",
    metaDesc: "Professional cabinet painting in the Merrimack Valley. Factory-smooth spray finishes at a fraction of replacement cost. Licensed & Insured.",
    h1: "Cabinet Painting & Refinishing in Merrimack Valley",
    processSteps: [
      { step: "01", title: "Prep & Mask", desc: "Remove doors, drawers, and hardware. Mask all adjacent surfaces." },
      { step: "02", title: "Sand & Prime", desc: "Degloss and sand all surfaces. Apply bonding primer." },
      { step: "03", title: "Fine-Finish Spray", desc: "Apply multiple coats of cabinet-grade enamel via HVLP sprayer." },
      { step: "04", title: "Hardware Re-install", desc: "Reinstall doors, drawers, and hardware. Final quality check." },
    ],
    relatedSlugs: ["interior-painting", "wood-staining"],
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    shortDesc: "Seamless patches for holes, cracks, and water damage — invisible once painted.",
    description: "From nail pops to large holes, our drywall repair service restores your walls to a smooth, paint-ready surface. We match existing textures and feather joints so repairs are completely invisible under the final coat of paint.",
    metaTitle: "Drywall Repair Services Merrimack Valley MA | Seamless Patches",
    metaDesc: "Expert drywall repair in the Merrimack Valley. Seamless patches for holes, cracks, and water damage. Licensed & Insured. Free estimates.",
    h1: "Drywall Repair & Patching in Merrimack Valley",
    processSteps: [
      { step: "01", title: "Assess Damage", desc: "Evaluate the size and cause of drywall damage." },
      { step: "02", title: "Cut & Patch", desc: "Cut clean edges, install backing, and set new drywall." },
      { step: "03", title: "Tape & Mud", desc: "Apply joint tape and multiple coats of compound, sanding between." },
      { step: "04", title: "Texture & Prime", desc: "Match surrounding texture, prime, and prepare for paint." },
    ],
    relatedSlugs: ["interior-painting", "wallpaper-removal"],
  },
  {
    slug: "wallpaper-hanging",
    name: "Wallpaper Hanging",
    shortDesc: "Precision wallpaper installation with perfectly matched patterns and seams.",
    description: "Professional wallpaper installation requires patience and precision. We prepare walls to manufacturer specifications, carefully match patterns, and ensure every seam is tight and every corner is clean. From bold accent walls to full-room applications.",
    metaTitle: "Wallpaper Hanging Services Merrimack Valley MA | Professional Install",
    metaDesc: "Professional wallpaper hanging in the Merrimack Valley. Pattern-matched, seamless installation. Licensed & Insured. Free estimates.",
    h1: "Professional Wallpaper Hanging in Merrimack Valley",
    processSteps: [
      { step: "01", title: "Wall Prep", desc: "Clean, smooth, and prime walls for optimal adhesion." },
      { step: "02", title: "Measure & Cut", desc: "Measure drops, match patterns, and cut with precision." },
      { step: "03", title: "Apply & Smooth", desc: "Apply adhesive, hang panels, and smooth out bubbles." },
      { step: "04", title: "Trim & Inspect", desc: "Trim edges, check seams, and clean excess adhesive." },
    ],
    relatedSlugs: ["wallpaper-removal", "interior-painting"],
  },
  {
    slug: "wallpaper-removal",
    name: "Wallpaper Removal",
    shortDesc: "Clean, damage-free wallpaper stripping that leaves walls ready for a fresh finish.",
    description: "Removing wallpaper improperly can damage drywall and create hours of extra prep work. Our team uses professional steamers and scoring tools to strip wallpaper cleanly, then skim-coats and sands walls to a smooth, paint-ready surface.",
    metaTitle: "Wallpaper Removal Services Merrimack Valley MA | Clean Stripping",
    metaDesc: "Professional wallpaper removal in the Merrimack Valley. Damage-free stripping and smooth wall prep. Licensed & Insured. Free estimates.",
    h1: "Wallpaper Removal Services in Merrimack Valley",
    processSteps: [
      { step: "01", title: "Score & Steam", desc: "Score the wallpaper surface and apply steam to loosen adhesive." },
      { step: "02", title: "Strip Panels", desc: "Carefully remove wallpaper panels without damaging drywall." },
      { step: "03", title: "Clean Adhesive", desc: "Wash walls to remove all remaining adhesive residue." },
      { step: "04", title: "Skim & Sand", desc: "Skim-coat imperfections and sand smooth for painting." },
    ],
    relatedSlugs: ["wallpaper-hanging", "interior-painting", "drywall-repair"],
  },
  {
    slug: "wood-staining",
    name: "Wood Staining",
    shortDesc: "Enhance the natural beauty of decks, fences, and trim with premium stains.",
    description: "Wood staining protects and enhances the natural grain of decks, fences, pergolas, and interior trim. We use penetrating oil-based and water-based stains that provide UV protection and resist peeling, ensuring your wood surfaces stay beautiful for years.",
    metaTitle: "Wood Staining Services Merrimack Valley MA | Decks, Fences & Trim",
    metaDesc: "Professional wood staining in the Merrimack Valley. Decks, fences, and trim. UV-resistant, penetrating stains. Licensed & Insured.",
    h1: "Wood Staining Services in Merrimack Valley",
    processSteps: [
      { step: "01", title: "Clean & Strip", desc: "Power wash and strip old finish to expose raw wood." },
      { step: "02", title: "Sand & Brighten", desc: "Sand surfaces smooth and apply wood brightener." },
      { step: "03", title: "Apply Stain", desc: "Brush or spray stain evenly, working with the grain." },
      { step: "04", title: "Seal & Protect", desc: "Apply protective topcoat for UV and moisture resistance." },
    ],
    relatedSlugs: ["exterior-painting", "pressure-washing"],
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    shortDesc: "Restore driveways, siding, and patios to like-new condition with controlled pressure.",
    description: "Our pressure washing service removes years of grime, mildew, and algae from siding, driveways, patios, and decks. We use adjustable pressure settings and appropriate detergents for each surface type to clean thoroughly without causing damage.",
    metaTitle: "Pressure Washing Services Merrimack Valley MA | Siding, Driveways & More",
    metaDesc: "Professional pressure washing in the Merrimack Valley. Siding, driveways, decks & patios. Safe, controlled cleaning. Licensed & Insured.",
    h1: "Pressure Washing Services in Merrimack Valley",
    processSteps: [
      { step: "01", title: "Assess Surfaces", desc: "Identify surface types and select appropriate pressure levels." },
      { step: "02", title: "Pre-Treat", desc: "Apply eco-friendly detergent to break down grime and mildew." },
      { step: "03", title: "Pressure Clean", desc: "Systematically wash surfaces with controlled water pressure." },
      { step: "04", title: "Final Rinse", desc: "Rinse thoroughly and inspect for any remaining spots." },
    ],
    relatedSlugs: ["exterior-painting", "wood-staining"],
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
