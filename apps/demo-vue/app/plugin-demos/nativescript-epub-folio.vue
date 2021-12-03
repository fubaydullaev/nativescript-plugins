<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-epub-folio"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptEpubFolio } from '@demo/shared';
  import { } from '@fubaydullaev/nativescript-epub-folio';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-epub-folio";
      }
    }
  });
</script>

<style scoped lang="scss">

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
