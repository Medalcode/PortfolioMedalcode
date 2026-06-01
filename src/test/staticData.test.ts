import { describe, it, expect, vi } from "vitest";
import { getStaticData } from "../shared/utils/getStaticData";

// Mocking astro:content's getCollection
vi.mock("astro:content", () => ({
  getCollection: vi.fn(async (collectionName) => {
    if (collectionName === "staticData") {
      return [
        { id: "es", data: { profileName: "Hola" } },
        { id: "en", data: { profileName: "Hello" } },
      ];
    }
    return [];
  }),
}));

describe("getStaticData utility", () => {
  it("should return the correct language entry when it exists", async () => {
    const data = await getStaticData("en");
    expect(data.profileName).toBe("Hello");
  });

  it("should fall back to 'es' if the requested language is missing", async () => {
    const data = await getStaticData("fr");
    expect(data.profileName).toBe("Hola");
  });

  it("should return the first entry if 'es' is also missing (simulated by empty mock result eventually, but here it will hit 'es')", async () => {
    // We can override the mock for specific tests if needed
  });
});
