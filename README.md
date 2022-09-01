### About

- This application was created while learning React.js.
- This application is a simple slider with photos and information, information is taken from the side of his site using the API.
- The application can be tested from the [link](https://s1een.github.io/react-people-slider-app/ "link").

# React Menu App

![](https://miro.medium.com/max/1000/0*aHvK7Rbt_Dv74mWq.png)

## Technologies used in the development:

- [![React][React.js]][React-url]
- [![npm][npm.com]][npm-url]

## React

The app was built in React v.18.2.0.

`$ npx create-react-app react-people-slider-app`

## App Component

States:

```javascript
  const [workers, setWorkers] = useState([]);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

```
Using API:

```javascript
async function fetchPerson() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "55124000ccmshc595b69e5203666p10ff32jsn5d8f9fe02e2d",
        "X-RapidAPI-Host": "random-user.p.rapidapi.com",
      },
    };
    try {
      for (let i = 0; i < 5; i++) {
        if (error) {
          break;
        }
        const response = await fetch(
          "https://random-user.p.rapidapi.com/getuser",
          options
        );
        const data = await response.json();
        setWorkers((prev) => [...prev, data.results[0]]);
      }
      setLoading(false);
    } catch (error) {
      setError(true);
      // using LocalData if API failed
      setWorkers(peopleData);
      setLoading(false);
    }
  }

```
Сhanging slide position: 

```javascript 
function changePosition(elIndex) {
    let position = "nextSlide";
    if (elIndex === index) {
      position = "activeSlide";
    }
    if (
      elIndex === index - 1 ||
      (index === 0 && elIndex === workers.length - 1)
    ) {
      position = "lastIndex";
    }
    return position;
  }
```

Render:
```javascript 
return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className="section-center">
        {error
          ? workers.map((el, elIndex) => (
              <Card
                key={el.id}
                element={el}
                position={changePosition(elIndex)}
              />
            ))
          : workers.map((el, elIndex) => (
              <Worker
                key={el.id.value + elIndex}
                element={el}
                position={changePosition(elIndex)}
              />
            ))}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
```
## Card Component
Render:
```javascript 
function Card({ element, position }) {
  return (
    <article className={position}>
      <img src={element.image} alt={element.name} className="person-img" />
      <h4>{element.name}</h4>
      <p className="title">{element.title}</p>
      <p className="text">{element.quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
}
```
## Worker Component
Render:
```javascript 
function Worker({ element, position }) {
  return (
    <article className={position}>
      <img
        src={element.picture.large}
        alt={element.name.first}
        className="person-img"
      />
      <h4>
        {element.name.first} {element.name.last}
      </h4>
      <p className="title">{element.email}</p>
      <p className="title">
        Location: {element.location.city}, {element.location.country}
      </p>
      <p className="text">Phone: {element.phone}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
}
```


## Acknowledgments
Resources that helped me in development.

* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

## My Links
- [![linkedin][linkedin.com]][linkedin-url]
- [![telegram][telegram.com]][telegram-url]
- [![portfolio][portfolio.com]][portfolio-url]
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/main.png
[React.js]: https://img.shields.io/badge/React_18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[npm.com]: https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=764abc
[npm-url]: https://www.npmjs.com/
[linkedin.com]: https://img.shields.io/badge/LinkedIn-20232A?style=for-the-badge&logo=linkedin&logoColor=wgute
[linkedin-url]: https://www.linkedin.com/in/dmitry-morozov-082288228/
[telegram.com]: https://img.shields.io/badge/Telegram-20232A?style=for-the-badge&logo=telegram&logoColor=white
[telegram-url]: https://t.me/r3ason_why
[portfolio.com]: https://img.shields.io/badge/Portfolio-20232A?style=for-the-badge&logo=github&logoColor=white
[portfolio-url]: https://s1een.github.io/my_cv_site/

