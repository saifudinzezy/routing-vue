<template>
  <div>
    <h3>Edit the User</h3>
    <!-- value query abc.com/user/edit?locale=en&q=100-->
    <p>Locale: {{ $route.query.locale}}</p>
    <p>Analytics: {{ $route.query.q}}</p>
  </div>
</template>