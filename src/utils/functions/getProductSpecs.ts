import { ProductCardInfo, ProductDetailsInfo } from '../Types';

const specsDisplayNames = {
  screen: 'Screen',
  resolution: 'Resolution',
  processor: 'Processor',
  ram: 'RAM',
  capacity: 'Built in memory',
  camera: 'Camera',
  zoom: 'Zoom',
  cell: 'Cell',
} as const;

type SpecKey = keyof typeof specsDisplayNames;

const specsForCard: SpecKey[] = ['screen', 'capacity', 'ram'];
const specsForDetailsMain: SpecKey[] = [
  'screen',
  'resolution',
  'processor',
  'ram',
];
const specsForDetailsFull: SpecKey[] = [
  'screen',
  'resolution',
  'processor',
  'ram',
  'capacity',
  'camera',
  'zoom',
  'cell',
];

function buildSpecs<T extends Record<string, unknown>>(
  product: T,
  keys: SpecKey[],
): Record<string, string> {
  const specs: Record<string, string> = {};

  keys.forEach(key => {
    const value = product[key as keyof T];

    if (value !== undefined && value !== null) {
      const displayName = specsDisplayNames[key];
      specs[displayName] = Array.isArray(value)
        ? value.join(', ')
        : String(value);
    }
  });

  return specs;
}

export function getCardSpecs(product: ProductCardInfo) {
  return buildSpecs(product, specsForCard);
}

export function getMainSpecs(product: ProductDetailsInfo) {
  return buildSpecs(product, specsForDetailsMain);
}

export function getFullSpecs(product: ProductDetailsInfo) {
  return buildSpecs(product, specsForDetailsFull);
}
