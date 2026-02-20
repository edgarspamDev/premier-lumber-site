// Import specific images to ensure they are bundled by Vite

// SAWDUST: Sawmill operation shots (sawdust is a byproduct of milling)
import sawmill_log from '../assets/images/lumbrr/20260119_102704.opt.webp'; // Log on sawmill
import sawmill_operation from '../assets/images/lumbrr/20260119_103040.opt.webp'; // Multiple logs on sawmill, bark
import sawdust_pile from '../assets/images/lumbrr/sawdust-shovel.webp'; // Shovel in sawdust (Optimized)

// FIREWOOD: Actual firewood blocks and stacks
import firewood_blocks from '../assets/images/lumbrr/IMG-20260202-WA0004.webp'; // Bin of firewood blocks (Small enough)
import firewood_crates from '../assets/images/lumbrr/IMG-20260210-WA0002.webp'; // Stacked crates (firewood storage)

// LOG PICKUP: Actual logs - roadside and being processed
import logs_roadside from '../assets/images/lumbrr/logpick.webp'; // Hardwood logs stacked by road
import log_on_saw from '../assets/images/lumbrr/20260119_103036.opt.webp'; // Large log on saw with cut lumber
import logs_sawmill from '../assets/images/lumbrr/20260119_103040.opt.webp'; // Multiple logs on sawmill

// LUMBER: Milling and sawn boards
import lumber_slabs from '../assets/images/lumbrr/20260119_103745.opt.webp'; // Stacked lumber slabs in mill
import lumber_and_log from '../assets/images/lumbrr/20260119_103916(1).opt.webp'; // Log with sawn boards

// PALLETS
import pallet_yard from '../assets/images/lumbrr/Pallets.opt.webp'; // Pallet Stacks (Corrected)
import pallet_stacks from '../assets/images/lumbrr/Pallets.opt.webp'; // Pallet stacks outdoor
import pallet_warehouse from '../assets/images/lumbrr/IMG-20260209-WA0016.webp'; // Pallet warehouse interior

export const categorizedPhotos = {
  sawdust: [
    { src: sawdust_pile, alt: 'Shovel in sawdust pile' },
    { src: sawmill_operation, alt: 'Logs being processed at the sawmill' },
    { src: sawmill_log, alt: 'Log on sawmill ready for cutting' },
  ],
  firewood: [
    { src: firewood_blocks, alt: 'Bin of seasoned firewood blocks' },
    { src: firewood_crates, alt: 'Firewood storage crates' },
  ],
  logPickup: [
    { src: logs_roadside, alt: 'Hardwood logs stacked by the road for pickup' },
    { src: log_on_saw, alt: 'Large hardwood log being milled' },
    { src: logs_sawmill, alt: 'Logs on the sawmill line' },
  ],
  lumber: [
    { src: log_on_saw, alt: 'Hardwood log being cut into custom lumber' },
    { src: lumber_slabs, alt: 'Stacked lumber slabs in the mill' },
    { src: lumber_and_log, alt: 'Fresh-sawn boards next to log' },
  ],
  pallets: [
    { src: pallet_yard, alt: 'Outdoor pallet yard with stacked pallets' },
    { src: pallet_stacks, alt: 'Rows of stacked pallets' },
    { src: pallet_warehouse, alt: 'Pallet warehouse with forklift' },
  ],
};
