<script>
    import ProConTable from '$lib/ProConTable.svelte'
    import Title from '$lib/Title.svelte'
    import Component from '$lib/component-styled/Component.svelte'
</script>

<Title>Svelte (Component Styles)</Title>
<Component />
<ProConTable
    pros={[
        'Not Global, locally scoped',
        'CSS and HTML are closer together',
        'Opens the door for building components',
        'Unused styles raise a warning'
    ]}
    cons={['Build steps required', 'Bad defaults']}
/>
