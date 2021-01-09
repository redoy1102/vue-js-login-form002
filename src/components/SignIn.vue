<template>
<div class="container">
  <div class="myCard">
    <div class="row">
      <div class="col-md-6">
        <div class="myLeftCtn">

          <form class="myForm text-center">
            <header>Create new account</header>
            <div class="form-group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              <input type="text" class="myInput" placeholder="User Name" id="username" required>

            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "SignIn"
}
</script>

<style scoped>

</style>