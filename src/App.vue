<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component
        :is="Component"
        v-if="route.meta && route.meta.keepAlive"
        :key="route.meta.usePathKey ? route.fullPath : undefined"
      />
    </keep-alive>
    <component
      :is="Component"
      v-if="!(route.meta && route.meta.keepAlive)"
      :key="route.meta.usePathKey ? route.fullPath : undefined"
    />
  </router-view>
</template>
<script setup></script>
