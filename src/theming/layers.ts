export type LayerType = 'MODAL' | 'ALERT' | 'BOTTOM_SHEET' | 'NOTIFICATION';

export type LayerLevelType = {
  MODAL: number;
  ALERT: number;
  BOTTOM_SHEET: number;
  NOTIFICATION: number;
};

export const LayerLevels: LayerLevelType = {
  MODAL: 1000,
  ALERT: 3000,
  BOTTOM_SHEET: 2000,
  NOTIFICATION: 4000,
};
