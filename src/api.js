import 'isomorphic-fetch';

export default resourceType => fetch(`http://api.openweathermap.org/data/2.5/weather?q=${resourceType},dk&appid=166d00e26d3ff2c6149e89feccc5c59a&units=metric`).then(res => res.json())