<script>
  import { Router, Link, Route } from "svelte-routing";
  import Test from "./pages/test.svelte";
  import Home from "./pages/home.svelte";
  export let url = "";
</script>

<div class="container">
  <Router url="{url}">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">Words</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="test" class="nav-link">Test</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <Route path="/"><Home/></Route>
      <Route path="/test"><Test/></Route>
    </div>
  </Router>
</div>