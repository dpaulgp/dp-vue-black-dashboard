<template>

<card type="secondary"
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="border-0 mb-0">
                <template>
                    <div class="text-center text-muted mb-4">
                        <small>Sign in with credentials</small>
                    </div>
                    <form @submit.prevent="login">
                        <base-input alternative
                                    class="mb-3"

                                    placeholder="Usuario"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="usuario.usuario"
                                    >
                        </base-input>
                        <base-input alternative
                                    type="password"
                                    placeholder="Clave"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="usuario.clave"
                                    >
                        </base-input>
                        <div class="text-center">
                            <base-button type="submit" class="my-4" fill @click="login">Sign In</base-button>
                        </div>
                    </form>
                </template>
            </card>
<!-- 
<card>

    <div class="row">
      <h1>Login</h1>
      <div class="col-md-8">
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input id="username" v-model="usuario.usuario" type="text" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" v-model="usuario.clave" type="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
      </div>
    </div>
</card> -->

</template>
  
  <script>
  export default {
    data() {
      return {
        usuario: {
          usuario: '',
          clave: ''
        },
        error: null
      };
    },
    methods: {
      login() {
        fetch('http://localhost:8800/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.usuario)
        })
        .then(response => {
  if (!response.ok) {
    return response.json().then(err => {
      throw new Error(err.message || 'Login failed');
    });
  }
  return response.json();
})
.then(data => {
  if (data.token) {
    localStorage.setItem('token', data.token); // Save the token locally
    localStorage.setItem('usuario', data.usuario); // Save the this.turno.usuario = JSON.parse(localStorage.getItem('user')); locally
    this.$router.push('/dashboard'); // Redirect to dashboard
  } else {
    this.error = 'Invalid credentials'; // Fallback error message
  }
})
.catch(error => {
  console.error('Error:', error);
  this.error = error.message; // Display more informative error messages
});

      }
    }
  };
  </script>
  