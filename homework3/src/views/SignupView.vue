<template>
  <main class="signup-page">
    <form class="signup-form" @submit.prevent="handleSignup" novalidate>
      <div class="form-row">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email"
        />
      </div>

      <div class="form-row">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </div>

      <p v-if="passwordErrors.length > 0" class="validation-error">
        The password is not valid - {{ passwordErrors.join(', ') }}
      </p>

      <button type="submit" class="signup-btn">Signup</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'SignupView',
  data() {
    return {
      email: '',
      password: '',
      passwordErrors: []
    }
  },
  methods: {
    validatePassword() {
      const errors = []
      const pwd = this.password

      if (pwd.length < 8 || pwd.length >= 15) {
        errors.push('The password should be at least 8 characters and less than 15 characters')
      }
      if (!/[A-Z]/.test(pwd)) {
        errors.push('Includes at least one uppercase alphabet character')
      }
      if ((pwd.match(/[a-z]/g) || []).length < 2) {
        errors.push('Includes at least two lowercase alphabet characters')
      }
      if (!/[0-9]/.test(pwd)) {
        errors.push('Includes at least one numeric value')
      }
      if (!/^[A-Z]/.test(pwd)) {
        errors.push('It should start with an uppercase letter')
      }
      if (!pwd.includes('_')) {
        errors.push('It should include the character "_"')
      }

      this.passwordErrors = errors
      return errors.length === 0
    },
    handleSignup() {
      this.validatePassword()
    }
  }
}
</script>

<style scoped>
.signup-page {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
}

.signup-form {
  background-color: #e6efde;
  border-radius: 12px;
  padding: 32px 28px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.form-row label {
  width: 90px;
  text-align: right;
  font-weight: bold;
  color: #1e293b;
  flex-shrink: 0;
}

.form-row input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  font-size: 0.95rem;
  text-align: center;
  background-color: #ffffff;
}

.validation-error {
  color: #b91c1c;
  background-color: #fee2e2;
  border: 1px solid #fca5a5;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.88rem;
  line-height: 1.4;
  text-align: left;
}

.signup-btn {
  background-color: #6b93c9;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 28px;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  align-self: center;
}

.signup-btn:hover {
  background-color: #4f79b5;
}

@media (max-width: 480px) {
  .form-row {
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }

  .form-row label {
    width: auto;
    text-align: left;
  }
}
</style>
