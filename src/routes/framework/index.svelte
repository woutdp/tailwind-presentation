<script>
    import ProConTable from '$lib/ProConTable.svelte'
    import Title from '$lib/Title.svelte'
    import Component from '$lib/framework/Component.svelte'
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous" />
</svelte:head>

<Title>Foundation (Framework)</Title>
<Component />
<ProConTable
    pros={[
        'Quick setup',
        "Good if you don't care about the looks (Admin panels, non user facing content, etc..)",
        'Has (good?) defaults',
        'No build step required'
    ]}
    cons={[
        'Painful in the long run when styles change',
        'Have to override them in most cases',
        'What about unused styles?',
        'End up battling your framework'
    ]}
/>
