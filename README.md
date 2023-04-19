# UI_API_Assignment

This project is created for UI and API assignment 
I have used cypress for testing below URLs
a. http://wave-trial.getbynder.com/ (for UI)
b. https://developers.themoviedb.org/3/movies/get-top-rated-movies/ (for API)
c. https://developers.themoviedb.org/3/movies/rate-movie/ (for API)

Please do below after cloning this repository on local machine :-
1. npm install 
2. npm cypress run / npm cypress open
3. npm i --g docker
4. run below in terminal/command prompt/shell
docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:3.4.0 run
