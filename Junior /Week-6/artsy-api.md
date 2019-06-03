Artsy API Notes

MY APP:
Name Warhol
Client Id 3cd3b6cd2843afb58f84
Client Secret 9202fee943284d637a946d5495b40600

Current Token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU1ODk4NDc5NywiaWF0IjoxNTU4Mzc5OTk3LCJhdWQiOiI1Y2QyMWQ4YWJlYTcwNTMyNjdlNjQzOWYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWNlMmZkZGRiNGZiYTQ2ZTliYTZjM2M2In0.5bP9rQZb1HoQlUpxElO6eTLZLlQdGMPS6uWKIhG8Ml4clea

-   artsy uses k-nearest-neighbor graph and data from art genome project to retrieve similar artists / artworks

-   use `sample` to get a random element from a collection

## Example of Curl Request:

curl -L https://api.artsy.net/api/artworks?sample=1 -H 'X-Xapp-Token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU1ODk4NDc5NywiaWF0IjoxNTU4Mzc5OTk3LCJhdWQiOiI1Y2QyMWQ4YWJlYTcwNTMyNjdlNjQzOWYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWNlMmZkZGRiNGZiYTQ2ZTliYTZjM2M2In0.5bP9rQZb1HoQlUpxElO6eTLZLlQdGMPS6uWKIhG8Ml4'
