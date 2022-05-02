import { mande } from "mande";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
const api = mande("https://swapi.dev/api/");

export const usePlanetsStore = defineStore("locations", () => {
    const planets = ref([]);
    const planet = ref({});
    const loadingPlanet = ref(false);
    const loadingPlanets = ref(false);

    const listPlanets = async (search) => {
        loadingPlanets.value = true;
        try {
            const response = await api.get(
                `planets/${search ? `?search=${search}` : ""}`
            );
            const results = response?.results;

            planets.value = results.map((item) => ({
                ...item,
                id: item.url.substring(
                    item.url.length - 2,
                    item.url.length - 1
                ),
            }));
        } catch (error) {
            console.log(error);
        }
        loadingPlanets.value = false;
    };

    const listPlanet = async (id) => {
        loadingPlanet.value = true;
        try {
            const response = await api.get(`/planets/${id}/`);

            planet.value = response;
        } catch (error) {
            console.log(error);
        }
        loadingPlanet.value = false;
    };

    return {
        planets,
        planet,
        loadingPlanets,
        loadingPlanet,
        listPlanets,
        listPlanet,
    };
});
