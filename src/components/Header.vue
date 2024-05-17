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
    <!-- {{ authStore }} -->
</template>

<script setup>
    import { ref } from "vue"
    import { useAuthStore } from '@/store/authStore';
    import { onMounted } from 'vue';
    
    const authStore = useAuthStore()

    const onLogout = () => {
        authStore.logoutUser();
    }

    onMounted(() => {
        authStore.init()
    })

</script>

<style>
    .navbar{
        background-color: #363b50
    }
    nav{
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 0 !important;
    }
</style>