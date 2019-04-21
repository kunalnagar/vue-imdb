<template>
    <div>
        <ul v-show="errors.length > 0" class="errors">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
        <div v-show="!errors.length">
            <h3>{{ list.name }}</h3>
            <p v-show="loading">Loading...</p>
            <ul class="list">
                <IMDbListItem
                    v-for="(item, index) in list.titles"
                    :key="index"
                    :item="item"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import IMDbListApi from '../services/IMDbList';
import IMDbListItem from './IMDbListItem.vue';

export default {
    components: {
        IMDbListItem
    },
    data() {
        return {
            loading: true,
            errors: [],
            list: []
        };
    },
    created() {
        IMDbListApi.getWatchList()
            .then(watchlist => {
                if (watchlist) {
                    this.list = watchlist.data;
                    this.loading = false;
                }
            })
            .catch(err => {
                console.error(err);
                this.errors.push(err.message);
            });
    }
};
</script>
<style lang="scss" scoped>
.list {
    padding: 0;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
}
.errors {
    padding: 0;
    color: red;
}
</style>
