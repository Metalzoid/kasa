/**
 * Service pour gérer les données d'hébergement
 * Centralise tous les appels de données liés aux accommodations
 */
class Fetcher {
  async fetch(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(
        "Erreur dans AccommodationService.fetchAccommodations:",
        error
      );

      throw new Error(
        `Impossible de charger les données d'hébergement: ${error.message}`
      );
    }
  }
}

export const fetcher = new Fetcher();
