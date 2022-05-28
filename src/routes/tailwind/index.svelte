<script>
    import ProConTable from '$lib/ProConTable.svelte'
    import Title from '$lib/Title.svelte'
    import Component from '$lib/tailwind/Component.svelte'
</script>

<Title>Tailwind (Utility-first framework)</Title>
<Component />
<ProConTable
    pros={[
        'Fastest way to style',
        'Good unopinionated defaults',
        'Small in size, only imports the styles you use or define',
        'CSS close to your HTML',
        'Extendable and configurable, (container widths, colors, fonts,...)'
    ]}
    cons={[
        'Requires extra (small) learning step',
        'Requires build step',
        'HTML tends to grow horizontally fast',
    ]}
/>