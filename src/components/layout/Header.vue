<template>
  <nav class="navbar navbar-expand-md sticky-top">
    <!-- v-class="`px-0 ${isTop && ' scrolled'}`" -->
    <div class="container px-3">
      <div class="row w-100">
        <div class="d-flex col-xs-12">
          <div>
            <a class="navbar-brand" href="/">
              <img src="./logo.svg" alt="logo" />
            </a>
          </div>
          <div class="flex-grow-1 text-right">
            <button
              class="navbar-toggler mt-3"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-nav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div class="collapse navbar-collapse" id="navbar-nav">
              <router-link to="/projects" class="nav-link">
                projects
              </router-link>
              <router-link to="/bio" class="nav-link"> bio </router-link>
              <router-link to="/resume" class="nav-link"> resume </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>