<script>
  import { verbs } from "./verbs"
  let q = "";
  function findWord(query, word) {
    let text = query.toLowerCase()
    return word.imperative.includes(text) || 
            word.simple.includes(text) || 
            word.participle.includes(text) || 
            word.rus.includes(text)
  }
</script>

<style>
  .list {
      width: 650px;
      margin: auto;
  }
  .list p {
    border-bottom: 0.1rem solid gainsboro;
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
  <div class="logo"><img src="logo.png" alt="Logo" width="100px" height="100px"></div>
  <input type="text" bind:value={q} placeholder="Type your word..">
  {#each verbs.filter(w => findWord(q, w)) as word}
    <p><span class="w1">{word.imperative}</span><span class="w1">{word.simple}</span><span class="w1">{word.participle}</span><span class="w2">{word.rus}</span></p>
  {/each}
</div>
