<script>
    import { verbs } from "../verbs"
    let q = "";
    function findWord(query, word) {
      let text = query.toLowerCase()
      return word.imperative.includes(text) || 
              word.simple.includes(text) || 
              word.participle.includes(text) || 
              word.rus.includes(text)
    }
  </script>
  
  <div class="container">
    <div class="logo"><img src="logo.png" alt="Logo" width="100px" height="100px"></div>
    <input type="text" bind:value={q} placeholder="Type your word.." class="form-control">
    <table class="table">
      <tbody>
      {#each verbs.filter(w => findWord(q, w)) as word}
        <tr>
          <td>{word.imperative}</td>
          <td>{word.simple}</td>
          <td>{word.participle}</td>
          <td>{word.rus}</td>
        </tr>
      {/each}
      </tbody>
    </table>
  </div>
  