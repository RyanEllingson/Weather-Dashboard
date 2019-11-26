# Weather-Dashboard
Unit 06 homework

See the deployed app here:
https://ryanellingson.github.io/Weather-Dashboard/

# Project Description

![Screenshot of weather dashboard](https://github.com/RyanEllingson/Weather-Dashboard/blob/master/assets/images/weather-dashboard-snip.JPG)

In this app, the user enters the name of a city (either just the city name, or "city, state") in the search field, then clicks the search button.  The app will display the current weather conditions in that city, including temperature, humidity, UV index, and a picture representing whether it is clear, cloudy, raining, etc.  Additionally, a 5-day forecast for that city is displayed below the current conditions showing similar information (predicted at 12:00 PM on each day).

Every time a user searches for a city, a button displaying that search information is created underneath the search field.  When the user clicks on that button, a new search is executed for that location.  Additionally, if the user closes the window or refreshes the browser, the search history buttons remain, and the app will open up with weather results for the last city the user searched for.  Finally, clicking the "Clear History" button clears the user's local storage and removes the history buttons from the page.

# Challenges, Opportunities for Improvement

This app was created using the Open Weather Map data API.  In order to get all the information needed, a good deal of manipulation of the response from the get request was needed, including taking information from one response to generate a new request.  For example, the initial search based on city name returns latitude and longitude coordinates, and these coordinates are used in the UV Index get request.

Another technology used in this app is the javascript Date object.  In order to display dates on the current condition and forecasts, the timestamp returned by the Open Weather Map response is converted into a Date, then the getDate, getMonth, and getFullYear methods are used to generate the date strings displayed on the page.

One problem with the app is if the Open Weather Map fails to find a city that matches what the user typed, no feedback is provided to the user.  I tried to write code that displays a message if a 404 error code is returned, but the javascript just doesn't execute, so the only way to know when that happens is the error message logged in the console.