<script setup lang="ts">

import {getAllMods} from "../utils/functions"
import Navbar from '@/components/Navbar.vue';
import Dropdown from '@/components/Dropdown.vue';
import ModCard from "@/components/ModCard.vue";
import { onMounted, ref } from "vue";
import { type ModData } from '../utils/types';

const mods = ref<ModData[]>()

onMounted(async () => {
    mods.value = await getAllMods()
})

</script>

<template>
    <Navbar />
    <div class="ms-fullwidth ms-text-center">
        <h3>Mods list</h3>
        <div class="mods-warning">
            <h5>DON'T INSTALL ALL THE MODS ON THIS LIST!<br>
                <h6>Benzo recommends all the mods on this list.</h6>
                <p><i>He does not use all of these at once.</i></p>
            </h5>
        </div>
        <Dropdown/>
        <div class="mods-grid">
            <ModCard v-for="mod in mods" :key="mod._id" :_id="mod._id" :name="mod.name" :author="mod.author" :mod_link="mod.mod_link" :category="mod.category" />
        </div>
    </div>
</template>

<style>
@import url("../assets/mods.css");
</style>
