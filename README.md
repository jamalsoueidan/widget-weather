# Weather widget 

Implement a simple weather widget-like application for web browser.

The widget shows basic weather information (temperature, humidity, wind) for a given city. 

## Done

* On the initial page load, the default city should be Copenhagen.	
* The widget for any given city should be sharable with a url like http://widget.example/?city=Odense
* When the user selects a new city, the new data should be fetched by the browser and thus not require a page reload. Despite not reloading the page, the url should still be updated to match the selected city.
* The widget should retain its basic functionality even if the user disables JavaScript in their browser.
* The application should be robust, scalable as well as easy to test, maintain and extend.

## Run

```javascript
npm install
npm run dev
```

Go to http://localhost:3000

## Tech

* Express
* React
* React Router
* Redux
* Isomorphic Fetch
* Bootstrap
* Babel
* Webpack