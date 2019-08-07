Intro Web Scraping and Crawling

1. What is the difference?

## Web Scraping

    - Pulls specific content from a page (eg prices for things, names and birth years of presidents, keywords on Craigslist) - _Sometimes_ identifies itself as a browser (by setting the 'User:Agent' property in the HTTP header to something like "Mozilla" or another browser, so that the server thinks you are a browswer) (??? What is a browser?) - Submits forms with data? - Executes JS if necessary (for SPAs)

## Web Crawling - Follows links to reach numerous pages - Uses collected data from a web scraper - Useful for indexing words to build a search index of a search engine

## Cheerio

    - an npm library to parse html
    - usually imported as `$` (in a nod to JQuery)
