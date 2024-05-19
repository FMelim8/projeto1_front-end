<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample ml-5" class="navbar-menu">
                    <div class="navbar-start ml-5">
                    <RouterLink class="navbar-item" to="/" >
                        Home
                    </RouterLink>
                    <RouterLink class="navbar-item" to="/weather" >
                        Weather
                    </RouterLink>
                    <button @click="toggleTheme" class="navbar-item" v-if="themeStore.theme == 'dark'">
                        Theme <i class="fa-solid fa-lightbulb fa-lg"></i>
                    </button>
                    <button @click="toggleTheme" class="navbar-item" v-if="themeStore.theme == 'light'">
                        Theme <i class="fa-solid fa-moon fa-lg"></i>
                    </button>
                </div>
                <div class="navbar-end mr-5">
                    <div class="navbar-item" v-if="authStore.user.uid">
                        <!-- mostra o nome antes do @ do email da pessoa -->
                        Bem vindo, {{ (authStore.user.email.split("@")[0]) }}
                    </div>
                    <div class="navbar-item">
                        <div class="buttons">
                        <RouterLink class="button is-primary" to="/auth" v-if="!authStore.user.uid">
                            <strong>Register / Log in</strong>
                        </RouterLink>
                        <button class="button is-light" @click.prevent="onLogout" v-if="authStore.user.uid">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { ref } from "vue"
    import { useAuthStore } from '@/store/authStore';
    import { onMounted } from 'vue';
    import { useThemeStore } from '../store/themeStore';

    const themeStore = useThemeStore();
    
    const authStore = useAuthStore()

    const onLogout = () => {
        authStore.logoutUser();
    }

    var colors = ""

    onMounted(() => {
        authStore.init()
        colors = assignColors()
    })

    const toggleTheme = () => {
        themeStore.setTheme(themeStore.theme === 'light' ? 'dark' : 'light');
        colors = assignColors();
    };


    const assignColors = () => {
        const colors = {
            background: themeStore.theme === "light" ? "#ffffff" : "#14161A",
            primary: themeStore.theme === "light" ? "#484b6a" : "#181B20",
            secondary: themeStore.theme === "light" ? "#9394a5" : "#6c757d",
            tertiary: themeStore.theme === "light" ? "#d2d3db" : "#363b50",
            text: themeStore.theme === "light" ? "#181B20" : "#6c757d",
            text2: themeStore.theme === "light" ? "#000000" : "#ffffff"
        };
        document.documentElement.style.setProperty("--backg-color", colors.background);
        document.documentElement.style.setProperty("--primary-color", colors.primary);
        document.documentElement.style.setProperty("--secondary-color", colors.secondary);
        document.documentElement.style.setProperty("--tertiary-color", colors.tertiary);
        document.documentElement.style.setProperty("--text-color", colors.text);
        document.documentElement.style.setProperty("--text-color2", colors.text2);
        return colors;
    };

</script>

<style>
    i{
        margin-left: 5px;
    }
    nav{
        background-color: var(--primary-color) !important;
        padding-bottom: 0 !important;
    }
    .navbar-item {
    color: var(--text-color) !important;
    }
    nav{
        /* color: #acb7c2; */
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 0 !important;
    }
</style>