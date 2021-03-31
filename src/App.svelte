<script>
  import { verbs } from "./verbs"
  let q;
  function findWord(name, word) {
    return word.simple.includes(name) || word.participle.includes(name) || word.rus.includes(name)
  }
</script>

<input type="text" bind:value={q}>
<ul>
  {#each verbs.filter(w => findWord(q, w)) as word}
    <li>{word.simple} {word.participle} {word.rus}</li>
  {/each}
</ul>
