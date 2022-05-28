<script>
    export let pros = []
    export let cons = []

    const zip = (a, b) => Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]])
    $: rows = zip(pros, cons)
</script>

<table>
    <tr>
        <th>+</th>
        <th>-</th>
    </tr>
    {#each rows as row}
        <tr>
            <td>{row[0] || ''}</td>
            <td>{row[1] || ''}</td>
        </tr>
    {/each}
</table>

<style lang="stylus">
    table
        margin 2rem 0
        width 100%

        th 
            text-align left
            padding 1rem

        td
            padding 0 1rem

    :global(.dark)
        color white
</style>
