import { getCollection } from "astro:content";

/**
 * Returns the staticData entry for the given language.
 * Falls back to "es" if the language is not found, and
 * throws a descriptive error only if the collection is empty.
 */
export async function getStaticData(lang: string) {
  const collection = await getCollection("staticData");

  if (collection.length === 0) {
    throw new Error(
      "[getStaticData] The staticData collection is empty. Make sure the JSON files exist in src/content/staticData/."
    );
  }

  const entry =
    collection.find((e) => e.id === lang) ||
    collection.find((e) => e.id === "es") ||
    collection[0];

  if (!entry) {
    throw new Error(
      `[getStaticData] Could not find a staticData entry for lang="${lang}" or fallback "es".`
    );
  }

  return entry.data;
}
