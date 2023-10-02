<script setup lang="ts">
function showDropdown() {
    const content = document.getElementsByClassName("ms-dropdown-content")
    for (const item of content) {
        const dropdown = item as HTMLElement
        let { display } = dropdown.style
        console.log(display)
        display === "none" || !display ? dropdown.style.display = "block" : dropdown.style.display = "none"
    }
}

function hideDropdown() {
    const content = document.getElementsByClassName("ms-dropdown-content")
    for (const item of content) {
        const dropdown = item as HTMLElement
        dropdown.style.display = "none"
    }
}
</script>

<template>
    <div>
        <div class="ms-dropdown dropdown">
            <button @click="showDropdown" class="ms-btn ms-primary">
                Category <i class="fas fa-sort-down"></i>
            </button>
            <div class="ms-dropdown-content">
                <ul class="ms-dropdown-content-list">
                    <li><a @click="hideDropdown" href="#">All</a></li>
                    <li><a @click="hideDropdown" href="#">Essentials</a></li>
                    <li><a @click="hideDropdown" href="#">Plugins</a></li>
                    <li><a @click="hideDropdown" href="#">Callouts</a></li>
                    <li><a @click="hideDropdown" href="#">Vehicles</a></li>
                    <li><a @click="hideDropdown" href="#">Sirens</a></li>
                    <li><a @click="hideDropdown" href="#">Other Audio</a></li>
                    <li><a @click="hideDropdown" href="#">Weapons</a></li>
                    <li><a @click="hideDropdown" href="#">Lighting</a></li>
                    <li><a @click="hideDropdown" href="#">Graphics</a></li>
                    <li><a @click="hideDropdown" href="#">Wardrobe</a></li>
                </ul>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>
</template>

<style>
    @import url(../assets/dropdown.css);
</style>