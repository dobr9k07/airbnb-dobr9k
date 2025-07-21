// Тип для числових полів
export type NumericField = "guest" | "bedroom" | "bed" | "bathroom";

// Мапінг назв полів до URL параметрів
export const FIELD_TO_PARAM_MAP: Record<NumericField, string> = {
  guest: "guest",
  bedroom: "bedrooms",
  bed: "beds",
  bathroom: "bathrooms",
};
