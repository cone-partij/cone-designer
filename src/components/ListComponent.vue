<template>
  <b-container>
    <b-button variant="link" block squared v-b-toggle.my-component>
      <span class="when-opened"><b-icon icon="caret-up-fill"></b-icon></span>
      <span class="when-closed"><b-icon icon="caret-down-fill"></b-icon></span> Components
    </b-button>

    <!-- Elements to collapse -->
    <div class="collapse-wrapper">
      <b-collapse
        v-for="(c, i) in listComponent"
        :key="i"
        id="my-component"
        class="sidebar-btn-collapse"
      >
        <b-button variant="light" size="sm" class="sidebar-btn">{{ c.item }}</b-button>
      </b-collapse>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      listComponent: [
        {
          id: 1,
          item: "Input"
        },
        {
          id: 2,
          item: "Button"
        },
        {
          id: 3,
          item: "Container"
        },
        {
          id: 4,
          item: "Select"
        }
      ]
    };
  }
};
</script>

<style lang="css">
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>

<style lang="scss" scoped>
.btn-link {
  text-align: left;
  color: #df7861;
  text-decoration: none;
}
.collapse-wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  .sidebar-btn-collapse {
    width: 50%;
    .sidebar-btn {
      background: #df7861;
      color: #e6e6e6;
      width: 100%;
      &:hover {
        color: white;
      }
    }
  }
}
</style>
