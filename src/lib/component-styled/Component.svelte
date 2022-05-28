<div class="wrapper">
    <div class="imageContainer">
        <img src="../aap2.webp" alt="Auto-Align Post 2" />
    </div>
    <div class="information">
        <div class="text">
            <a href="https://www.soundradix.com/products/auto-align-post/" class="title">Auto-Align Post 2</a>
            <p class="description">
                Adaptive time-alignment and spectral phase-correction plug-in, reducing comb-filtering and phase artifacts.
            </p>
        </div>
        <button class="button">Add to Basket</button>
    </div>
</div>

<style lang="stylus">
    img
        /* Better defaults */
        max-width 100%
        height auto
        display block
        vertical-align middle

    a
        /* Better defaults */
        color inherit
        text-decoration inherit

    button
        /* Better defaults */
        background none
        color inherit
        border none
        padding 0
        font inherit
        cursor pointer
        outline inherit

    .wrapper
        border-radius 1.5rem
        overflow hidden
        box-shadow 0 25px 50px -12px rgba(0 0 0 0.25)
        background-color #fcfcfc
        display flex
        flex-direction column
        margin 1rem

        @media (min-width 640px)
            width 400px

    .imageContainer
        margin 1.5rem
        margin-bottom 0.75rem
        overflow hidden
        box-shadow 0 25px 50px -12px rgba(0 0 0 0.25)
        border-radius 0.75rem

    .information
        display flex
        flex-direction column
        justify-content space-between
        flex-grow 1
        margin 1.5rem
        margin-top 0.75rem
        .text
            margin-bottom 2.5rem
            .title
                font-size 1.25rem
                line-height 1.75rem
                font-weight bold
                text-decoration none
                &:hover
                    text-decoration underline
            .description
                font-size 0.875rem
                line-height 1.25rem
                margin-top 0.5rem

    .button
        width 100%
        font-weight bold
        color white
        border-radius 10000rem
        background-color #333
        line-height 24px
        padding 0.5rem
        transition-property all
        transition-timing-function cubic-bezier(0.4, 0, 0.2, 1)
        transition-duration 150ms
        &:hover
            transform translateY(-0.25rem)
            opacity 0.9

    :global(.dark)
        .button
            color black
            background-color white
        .information
            .text
                color white
        .wrapper
            background-color #222
</style>
