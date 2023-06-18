<script setup>
  import { RouterLink } from 'vue-router';
  const faq = [
    {
      "title" : "What is Netflix?",
      "content" : "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
      "title" : "How much does Netflix cost?",
      "content" : "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts."
    },
    {
      "title" : "Where can I watch?",
      "content" : "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
      "title" : "How do I cancel?",
      "content" : "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      "title" : "What can I watch on Netflix?",
      "content" : "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      "title" : "Is Netflix good for kids?",
      "content" : "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
    }
  ]
</script>
<template>
  <div class="home">
    <div class="home--banner">
      <div class="home--banner__bg">
        <div class="home--banner__content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <email-form></email-form>
        </div>
      </div>
    </div>
    <section class="home--section">
      <article class="home--article">
        <div class="home--article__col">
          <h3 class="home--article__col__title">Enjoy on your TV</h3>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div class="home--article__col">
          <div class="image-box">
            <img src="../assets/images/enjoy-on-tv.png" alt="">
          </div>
        </div>
      </article>
      <!-- DIVIDER START -->
      <article class="home--article with-divider">
        <div class="home--article__divider"></div>
      </article>
      <!-- DIVIDER END -->
      <article class="home--article">
        <div class="home--article__col">
          <div class="image-box">
            <img src="../assets/images/watch-everywhere.png" alt="">
          </div>
        </div>
        <div class="home--article__col">
          <h3 class="home--article__col__title">Watch everywhere</h3>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
      </article>
      <!-- DIVIDER START -->
      <article class="home--article with-divider">
        <div class="home--article__divider"></div>
      </article>
      <!-- DIVIDER END -->
      <article class="home--article">
        <div class="home--article__col">
          <h3 class="home--article__col__title">Create profiles for kids</h3>
          <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
        <div class="home--article__col">
          <div class="image-box">
            <img src="../assets/images/for-kids.png" alt="">
          </div>
        </div>
      </article>
      <!-- DIVIDER START -->
      <article class="home--article with-divider">
        <div class="home--article__divider"></div>
      </article>
      <!-- DIVIDER END -->
      <article class="home--article">
        <div class="home--article__col">
          <div class="image-box">
            <img src="../assets/images/download-app.png" alt="">
          </div>
        </div>
        <div class="home--article__col">
          <h3 class="home--article__col__title">Download your shows to watch offline</h3>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </article>
    </section>
    <section class="home--section transparent accordion-section">
      <AppAccordion
        title="Frequently Asked Questions"
        :data="faq"
      ></AppAccordion>
      <email-form></email-form>
    </section>
    <footer class="home--footer">
      <p>Questions? Call <a href="tel:0850-390-7444">0850-390-7444</a></p>
      <div class="home--footer__navbar">
        <nav class="home--footer__navbar--nav">
          <RouterLink to="/">FAQ</RouterLink>
          <RouterLink to="/">Help Center</RouterLink>
          <RouterLink to="/">Account</RouterLink>
          <RouterLink to="/">Media Center</RouterLink>
          <RouterLink to="/">Investor Relations</RouterLink>
          <RouterLink to="/">Jobs</RouterLink>
          <RouterLink to="/">Redeem Gift Cards</RouterLink>
          <RouterLink to="/">Ways to Watch</RouterLink>
          <RouterLink to="/">Terms of Use</RouterLink>
          <RouterLink to="/">Privacy</RouterLink>
          <RouterLink to="/">Cookie Preferences</RouterLink>
          <RouterLink to="/">Corporate Information</RouterLink>
          <RouterLink to="/">Contact Us</RouterLink>
          <RouterLink to="/">Speed Test</RouterLink>
          <RouterLink to="/">Legal Notices</RouterLink>
          <RouterLink to="/">Only on Netflix</RouterLink>
        </nav>
      </div>
      <div class="select-lang ml-0">
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
      <p class="mt-36">Netflix Türkiye</p>
    </footer>
  </div>
</template>
