<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <router-link
      class="navbar-brand"
      to="/"
    >
      Alpha Shop
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent" 
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <router-link
             to="#" 
             class="text-info mr-3"
        >
         男款
       </router-link>

          <router-link
             to="#" 
             class="text-info mr-3"
          > 
           男款
         </router-link>
      </div>
    </div>
  </nav>
</template>