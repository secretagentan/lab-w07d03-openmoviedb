# 🎬 Open Movie DB

Let's practice making calls to the OMDbAPI.
This API is free and open so we can try hitting it from the client side with AJAX.

# Setup

No need for an express server just yet!
Just run `http-server` from inside `public`

Read through the usage of the OMDB Api here

https://www.omdbapi.com/#parameters

# User Stories

When a user enters a search term and clicks search
    - Use AJAX to search OMDB's database by title
    - Render a list of results in `#results`

When a user clicks on a search result
    - Use AJAX to search OMDB's database by IMDb ID
    - Render the title, plot and poster in `#detail`

# ✋ But wait!

With Node we wrote small modules using the Request module to make HTTP requests.
Could you apply this idea to your client-side code as well?

Create a `omdbapi.js` file and write two methods

```
OMDB.search(title, callback)
OMDB.find(imdbID, callback)
```

# 🖼 What about rendering?

Can you use new template strings to render to the DOM?

# Resources
- https://www.omdbapi.com/#parameters
- http://api.jquery.com/jquery.ajax/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
