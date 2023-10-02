<script setup lang="ts">
    import { type ModData } from '@/utils/types';
    const data = defineProps<ModData>()
</script>

<template>
    <div class="ms-card ms-fill">
        <div class="ms-card-title">
            <span>{{ data.category }}</span>
            <h2>{{ data.name }}</h2>
        </div>
        <div class="ms-card-content">
            <p>
                by {{ data.author }}
            </p>
        </div>
        <div class="ms-card-btn mod-btn">
            <a :href="data.mod_link" target="_blank"><button class="ms-btn ms-primary">Go to mod</button></a>
        </div>
    </div>
</template>

<style>
    @import url("../assets/card.css");
</style>