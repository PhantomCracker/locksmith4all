<template>
  <div class="locksmith-near-me">
    <LocksmithContent />
  </div>
</template>

<script>
import LocksmithContent from "@/components/locksmith-near-me/LocksmithContent";
export default {
  name: "LocksmithNearMe",
  components: {LocksmithContent},
  mounted() {
    let whatConvertsScript = document.createElement('script')
    whatConvertsScript.setAttribute('src', '//scripts.iconnode.com/95446.js')
    document.head.appendChild(whatConvertsScript)
  },
  metaInfo: {
    title: 'Locksmith4All - Locksmith cities',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: '24/7 emergency locksmith services. Locksmith4All also provide a range of services and supplies designed to improve the security of your home or business'
      }
    ]
  }
}
</script>

<style scoped>

</style>