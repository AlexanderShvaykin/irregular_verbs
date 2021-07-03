<script>
    import { verbs } from "../verbs";
    import { getRandom } from "../../scripts/utils"
    let words = getRandom(verbs, 15)
    function reload() {
      console.log(123);
      words = getRandom(verbs, 15)
    }
  </script>
  
  <div class="container">
    <div class="logo"><img src="logo.png" alt="Logo" width="100px" height="100px"></div>
    <div class="row">
        <div class="col-9">
            <table class="table">
                <tbody>
                {#each words as word}
                  <tr>
                    <td>{word.imperative}</td>
                    <td><input type="text" class="form-control"></td>
                    <td><input type="text" class="form-control"></td>
                    <td>{word.rus}</td>
                  </tr>
                {/each}
                </tbody>
              </table>
        </div>
        <div class="col">
          <button class="btn btn-success">Check</button>
          <button class="btn btn-warning" on:click={reload}>Reload</button>
        </div>
    </div>
  </div>