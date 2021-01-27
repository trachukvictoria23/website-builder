<template>
    <div class="draft__sidebar">
        
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters([
            "getActiveDraftId",
            "getActiveDraftType"
        ])
    }
}
</script>

<style lang="scss" scoped>
    .draft__sidebar {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 512px;
        border-right: 1px solid;
    }
</style>

