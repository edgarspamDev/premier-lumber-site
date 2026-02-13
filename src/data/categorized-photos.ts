// Import specific images to ensure they are bundled by Vite
// SAWDUST: Safe close-ups
import sawdust_grain from '../assets/images/lumbrr/20260119_102704.jpg';
// Sawmill operation - likely machinery but relevant context
import sawmill1 from '../assets/images/lumbrr/20260119_103040.jpg';

// FIREWOOD: Piles and stacks, checking for vehicles
// IMG-20260210-WA0002.jpg was used previously, verified as safe stack
import firewood_main from '../assets/images/lumbrr/IMG-20260210-WA0002.jpg';
import firewood1 from '../assets/images/lumbrr/IMG-20260202-WA0004.jpg';
import firewood2 from '../assets/images/lumbrr/20260119_103745.jpg'; // Pile
import firewood3 from '../assets/images/lumbrr/IMG-20260202-WA0008.jpg'; // Pile

// LOG PICKUP: Log-specific photos only (no pallet-only yard shots)
import log_road from '../assets/images/lumbrr/IMG-20260209-WA0016.jpg'; // Logs stacked by road
import log_sawmill_close from '../assets/images/lumbrr/IMG-20260209-WA0014.jpg'; // Logs on sawmill
import log_sawmill_wide from '../assets/images/lumbrr/IMG-20260209-WA0010.jpg'; // Logs on sawmill
import log_processing from '../assets/images/lumbrr/20260119_103647.jpg'; // Log processing and milling

// LUMBER: Pallets and milling
import pallet1 from '../assets/images/lumbrr/IMG-20260209-WA0012.jpg';

import scrap_bin from '../assets/images/lumbrr/20260119_103650.jpg'; // Bin of wood scraps/sawdust

export const categorizedPhotos = {
  sawdust: [
    { src: sawdust_grain, alt: 'Close up of wood grain and sawdust' },
    { src: scrap_bin, alt: 'Wood scraps and sawdust bin' },
    { src: sawmill1, alt: 'Sawmill operation producing sawdust' } 
  ],
  firewood: [
    { src: firewood_main, alt: 'Seasoned firewood ready for delivery' },
    { src: firewood3, alt: 'Firewood logs' },
    { src: firewood2, alt: 'Stacked firewood' },
    { src: scrap_bin, alt: 'Wood scraps for kindling' },
    { src: firewood1, alt: 'Bin of wood blocks for firewood' } // IMG-20260202-WA0004.jpg (portrait)
  ],
  logPickup: [
    { src: log_road, alt: 'Hardwood logs stacked by the road' },
    { src: log_sawmill_close, alt: 'Hardwood logs being milled' },
    { src: log_sawmill_wide, alt: 'Large logs on the sawmill line' },
    { src: log_processing, alt: 'Log processing at the mill' }
  ],
  lumber: [
    { src: firewood2, alt: 'Stacked lumber and timber' }, // Using 20260119_103745 as primary
    { src: pallet1, alt: 'Stacked pallets and lumber' },
    { src: sawmill1, alt: 'Custom milling operation' }
  ]
};
