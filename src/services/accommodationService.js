/**
 * Service pour gérer les données d'hébergement
 * Centralise tous les appels de données liés aux accommodations
 */
class AccommodationService {
  async fetchAccommodations() {
    try {
      const response = await fetch("/src/data/data.json");

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

  async fetchAccommodationById(id) {
    try {
      const accommodations = await this.fetchAccommodations();
      return accommodations.find((acc) => acc.id === id) || null;
    } catch (error) {
      console.error(
        `Erreur lors de la recherche de l'accommodation ${id}:`,
        error
      );
      throw error;
    }
  }
}

export const accommodationService = new AccommodationService();
