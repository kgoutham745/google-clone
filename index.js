const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.co.in/search?q=" + input + "&sxsrf=APq-WBvaIn4e6s-cMWmUjhPt9KFDUcpZ4A%3A1647102708937&source=hp&ei=9MosYriQN9nFhwP3sbeICA&iflsig=AHkkrS4AAAAAYizZBNlJ6J-UWMdSdruGFenm_rZsUgff&ved=0ahUKEwi42v3e_8D2AhXZ4mEKHffYDYEQ4dUDCAc&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgsILhCABBCxAxDUAjIFCC4QgAQyCAgAEIAEELEDMggILhCABBCxAzIICC4QgAQQ1AIyBQgAEIAEMggIABCABBCxAzILCC4QgAQQsQMQgwEyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6CAgAELEDEIMBOgcIABCxAxAKOggILhCxAxCDAToICAAQgAQQyQM6BQgAEJIDUJoGWNAcYPoeaAFwAHgAgAGdA4gB1guSAQkwLjEuMS4yLjGYAQCgAQGwAQo&sclient=gws-wiz"
}