import fetch from "node-fetch";

/**
 * Get the year of the current F! season
 */
export default async function currentSeason() {
  try {
    const res = await fetch(`https://api.jolpi.ca/ergast/f1/current/seasons.json`, {
      method: "get",
    });
    const data = (await res.json()) as any;
    const returnValue = data.MRData.SeasonTable.Seasons[0] ?? [];
    return returnValue;
  } catch (error) {
    return null;
  }
}
