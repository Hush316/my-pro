import Service from '@/service';
import { defineStore } from 'pinia';

const useCityStore = defineStore({
    id: 'city',
    state: () => ({
        allCities: {},
        currentCity: {},
    }),
    actions: {
        async fetchAllCitiesData() {
            const res = await Service.getAllCity();
            this.allCities = res.data;
        },
    },
});

export default useCityStore;
