<!-- Utilização de Bulma -->
<template>
  <div class="main">
    <div>
      <div class="tabs is-centered">
        <ul>
          <li :class="{'is-active': !register}"><a @click.prevent="register=false">Login</a></li>
          <li :class="{'is-active': register}"><a @click.prevent="register=true">Register</a></li>
        </ul>
      </div>
      <form action="" @submit.prevent="onSubmit" class="form-login">
        <div class="card auth-form">
          <div class="card-content">
            <div class="title has-text-centered">{{ formTitle }}</div>
            <div class="content">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="Email" v-model="credentials.email">
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" placeholder="Password" v-model="credentials.password">
                </div>
              </div>
              <div class="field is-grouped is-grouped-right">
                <p class="control">
                  <button class="button is-primary">
                    {{ formTitle }}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>
    import { computed, reactive, ref } from "vue"
    import { useAuthStore } from "../store/authStore"
    
    const authStore = useAuthStore();

    const register = ref(false);

    const credentials = reactive({
        email: "",
        password: ""
    });

    const formTitle = computed(() => {
        return register.value ? "Register" : "Login";
    });

    const onSubmit = () => {
        if (!credentials.email || !credentials.password) {
            alert("Please enter email and password")
            return
        }
        if (register.value) {
          authStore.registerUser(credentials)
        } else {
          authStore.loginUser(credentials)
        }
    }

</script>

<style scoped> 
  .main{
    background-color: var(--tertiary-color) !important;
    color: var(--text-color2) !important;
  }
  .card-content{
    background-color: var(--primary-color) !important;
  }
  .auth-form{
    max-width: 400px;
    margin: 0 auto;
  }
  .form-login{
    height: 70vh;
  }
</style>