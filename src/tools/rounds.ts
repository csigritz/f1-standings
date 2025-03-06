import fetch from "node-fetch";

type Input = {
  /**
   * Year of the season
   */
  year: number;
};

/**
 * Get rounds for a specific season
 */
export default async function rounds(input: Input) {
  try {
    const res = await fetch(`https://api.jolpi.ca/ergast/f1/${input.year}/races.json`, {
      method: "get"
    });
    const data = (await res.json()) as any;
    const returnValue = data.MRData.RaceTable.Races ?? []
    return returnValue;
  } catch (error) {
    return null
  }
}