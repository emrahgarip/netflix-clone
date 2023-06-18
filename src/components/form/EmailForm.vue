<template>
  <form class="email-form">
    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
    <div class="email-form__group">
      <label for="" class="email-form__group__label">
        <input
          type="email"
          name="email"
          id="email"
          class="form-control"
        >
        <span>Email address</span>
      </label>
      <button class="start-button">
        Get Started
        <RightArrow />
      </button>
    </div>
  </form>
</template>