<script>
  import { verbs } from "./verbs"
  let q = "";
  function findWord(name, word) {
    return word.simple.includes(name) || word.participle.includes(name) || word.rus.includes(name)
  }
</script>

<style>
  .list {
      width: 535px;
      margin: auto;
  }
  .list p span {
      margin-right: 10px;
      display: inline-block;
      word-wrap: break-word;
      text-align: left;
  }
  .list p span.w1 {
      width: 100px;
  }
  .list p span.w2 {
      width: 200px;
  }
</style>

<div class="list">
  <input type="text" bind:value={q}>
  {#each verbs.filter(w => findWord(q, w)) as word}
    <p><span class="w1">{word.simple}</span><span class="w2">{word.participle}</span><span class="w2">{word.rus}</span></p>
  {/each}
</div>
