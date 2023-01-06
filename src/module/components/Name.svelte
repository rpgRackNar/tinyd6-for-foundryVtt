<script lang="ts">
    import {localize} from '../localize';

    export let actor;
</script>

<label for="name">{localize("NAME")}</label>
<input type="text" name="name" value="{actor.name}"/>
