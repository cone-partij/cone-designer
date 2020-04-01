<template>
  <b-container fluid id="layout-wrapper">
    <b-navbar toggleable="lg" type="dark" sticky class="navbar-wrapper">
      <b-navbar-brand href="#">Cone Designer</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button
              size="sm"
              variant="light"
              class="my-2 my-sm-0 primary"
              >Save</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="sidebar-wrapper">
      <ListComponent />
    </div>

    <div class="main-wrapper">
      <router-view />
    </div>
  </b-container>
</template>

<script>
import ListComponent from "@/components/ListComponent";

export default {
  name: "Layout",
  components: {
    ListComponent
  }
};
</script>

<style lang="scss" scoped>
#layout-wrapper {
  padding: 0 0 !important;
  position: relative;
  height: 100vh;
  .navbar-wrapper {
    background-image: linear-gradient(to right, #df7861, #ecb390);
  }
  .sidebar-wrapper {
    position: absolute;
    left: 0;
    top: 55px;
    width: 200px;
    min-height: calc(100% - 55px);
    padding: 20px 0;
    background: #fcf8e8;
  }
  .main-wrapper {
    position: absolute;
    width: calc(100vw - 200px);
    min-height: calc(100% - 100px);
    left: 200px;
    top: 55px;
  }
}
</style>
