<script lang="ts">
    import Example from '$lib/Example.svelte'
</script>

<div style="display: flex; flex-direction: column;">
    <div
        style="display: flex; flex-direction: column; background-color: #999; padding: 20px; border-radius: 2rem; padding-left: 30px; color: black; font-size: 2em; justify-content: center; text-align: center; margin: 1rem;"
    >
        <ul style="list-style: none;">
            <li><a href="/raw-css/">Raw CSS</a></li>
            <li><a href="/preprocessing/">Stylus - Preprocessing</a></li>
            <li><a href="/component-styled/">Svelte - Component Styles</a></li>
            <li><a href="/framework/">Foundation - Framework</a></li>
            <li><a href="/tailwind/">Tailwind - Utility-first framework</a></li>
        </ul>
    </div>
    <Example />
</div>
