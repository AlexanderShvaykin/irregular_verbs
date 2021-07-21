<script>
    import { verbs } from "../verbs";
    import { getRandom } from "../../scripts/utils"
    let words = getRandom(verbs, 15)

    function reload() {
      words = getRandom(verbs, 15)
      let elemets = document.getElementsByClassName("form-control")
      for (let i = 0; i < elemets.length; i++) {
        elemets[i].classList.remove("is-invalid", "is-valid")
        elemets[i].value = ""
       }
    }

    function saveAnswer(input, word, key) {
      if (word.answers === undefined) {
        word.answers = {}
      }
      word.answers[key] = { input }
    }

    function check() {
      words.forEach((w, i) => {
        let simple_input = w.answers?.simple?.input
        if (simple_input && w.simple === simple_input.value) {
          console.log('valid')
          simple_input.classList.remove("is-invalid")
          simple_input.classList.add("is-valid")
        } else {
          if (simple_input) {
            document.getElementById(`${i}-simple-word`).innerHTML = w.simple
            simple_input.classList.add("is-invalid")
          }
        }

        let participle_input = w.answers?.participle?.input
        if (participle_input && w.participle === participle_input.value) {
          participle_input.classList.remove("is-invalid")
          participle_input.classList.add("is-valid")
        } else {
          if (participle_input) {
            document.getElementById(`${i}-participle-word`).innerHTML = w.participle
            participle_input.classList.add("is-invalid")
          }
        }
      })
    }

    document.onkeydown = e => {
      if (e.key === "Enter") {
        document.activeElement?.blur()
        check()
      }
    }
  </script>

  <div class="container">
    <div class="logo"><img src="logo.png" alt="Logo" width="100px" height="100px"></div>
    <div class="row">
        <div class="col-9">
            <table class="table">
                <tbody>
                {#each words as word, i}
                  <tr>
                    <td>{word.imperative}</td>
                    <td>
                      <input type="text" class="form-control" on:change={saveAnswer(this, word, "simple")}>
                      <div class="invalid-feedback" id="{i}-simple-word"></div>
                    </td>
                    <td>
                      <input type="text" class="form-control" on:change={saveAnswer(this, word, "participle")}>
                      <div class="invalid-feedback" id="{i}-participle-word"></div>
                    </td>
                    <td>{word.rus}</td>
                  </tr>
                {/each}
                </tbody>
              </table>
        </div>
        <div class="col">
          <button class="btn btn-success" on:click={check}>Check</button>
          <button class="btn btn-warning" on:click={reload}>Reload</button>
        </div>
    </div>
  </div>
