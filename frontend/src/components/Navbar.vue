<template>
<div class="ms-menu">
    <div class="ms-menu-logo">
        <router-link to="/">
            <img src="../assets/beSilver.png"/>
        </router-link>
    </div>
    <nav class="ms-menu-link">
        <input type="checkbox" id="ms-menu-toggle" />
        <label for="ms-menu-toggle" class="ms-menu-icon"
            ><i class="fa fa-bars"></i
        ></label>
        <ul>
            <li>
                <router-link to="/mods">
                    Mods
                </router-link>
            </li>
            <li>
                <router-link to="/tutorials">
                    Tutorials
                </router-link>
            </li>
            <li>
                <router-link to="/login">
                    Login
                </router-link>
            </li>
        </ul>
    </nav>
</div>
</template>

<style>
    @import url("../assets/navbar.css");
</style>