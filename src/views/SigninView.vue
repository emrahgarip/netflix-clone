<script setup>
  import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="auth">
    <!-- HEADER -->
   <div class="auth__header">
    <RouterLink to="/" class="auth__header__link">
      <AppLogo></AppLogo>
    </RouterLink>
   </div>
   <!-- COVER -->
   <div class="auth__cover">
    <img
      src="../assets/images/perspective-background.jpg"
      alt=""
      class="auth__cover__image"
    >
   </div>
   <div class="auth__body">
    <div class="auth__body--content">
      <div class="auth__body--content__form-wrapper">
        <!-- FORM -->
        <form action="" class="auth-form">
          <!-- FORM TITLE -->
          <h1 class="auth-form__title">Sign In</h1>
          <!-- FORM GROUP -->
          <div class="form-group">
            <label for="" class="form-group__label">
              <input type="text" class="form-control">
              <span>Email or phone number</span>
            </label>
          </div>
          <!-- FORM GROUP -->
          <div class="form-group pb-2">
            <label for="" class="form-group__label">
              <input type="password" class="form-control">
              <span>Password</span>
            </label>
          </div>
          <!-- SUBMIT BUTTON -->
          <button class="button signin w-full py-15 mt-22 mb-12 text-base font-medium">Sign In</button>
          <div class="auth-form__action">
            <CustomCheckbox id="rememberMe"></CustomCheckbox>
            <RouterLink to="/">Need help?</RouterLink>
          </div>
        </form>
        <div class="auth__body--content__form-wrapper__footer">
          <p>New to Netflix? <RouterLink to="/">Sign up now.</RouterLink></p>
          <p class="recaptcha-more">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></p>
          <div class="recaptcha"></div>
        </div>
      </div>
    </div>
    <div class="auth__body--footer">
      <div class="auth__body--footer__content">
        <p>Questions? Call <a href="tel:0850-390-7444">0850-390-7444</a></p>
        <div class="auth__body--footer__content__navbar">
          <nav class="auth__body--footer__content__navbar--nav">
            <RouterLink to="/">FAQ</RouterLink>
            <RouterLink to="/">Help Center</RouterLink>
            <RouterLink to="/">Terms of Use</RouterLink>
            <RouterLink to="/">Privacy</RouterLink>
            <RouterLink to="/">Cookie Preferences</RouterLink>
            <RouterLink to="/">Corporate Information</RouterLink>
          </nav>
        </div>
        <div class="select-lang mt-24">
        <div class="icon">
          <GlobalEarth></GlobalEarth>
        </div>
        <select name="" id="">
          <option value="English">English</option>
          <option value="Türkçe">Türkçe</option>
        </select>
        <div class="caret-down">
          <CaretDown></CaretDown>
        </div>
      </div>
      </div>
    </div>
   </div>
  </div>
</template>