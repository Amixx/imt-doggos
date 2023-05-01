<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>
<script lang="ts" setup>
import { usePageContext } from './usePageContext'
const pageContext = usePageContext()
</script>

<style scoped lang="scss">
a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);

  &:first-of-type {
    border: 0;
  }

  &.active {
    color: var(--color-text);
    &:hover {
      background-color: transparent;

    }
  }
}
</style>
