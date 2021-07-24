<script>
  export let href;
  export let secondary;

</script>

<style>
  
</style>

<a
  href={href}
  class={`
    flex
    justify-center
    rounded-full
    border-2
    border-blue-500
    py-2
    px-6
    my-1
    text-sm
    shadow-sm
    
    md: mr-2

    ${secondary && `
      border-gray-300
    `}
  `}
>
  <slot />
</a>
