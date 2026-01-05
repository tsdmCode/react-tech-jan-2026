import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

function App() {
  return (
    <>
      <section className="pros-cons">
        <header>
          <h1>Fordele og ulemper ved React</h1>
        </header>
        <article>
          <h2>Fordele:</h2>
          <ul>
            <li>
              Komponentbaseret arkitektur: React gør det nemt at opdele UI i genanvendelige komponenter, hvilket
              forbedrer vedligeholdelse og skalerbarhed.
            </li>
            <li>
              Effektiv DOM-håndtering: Reacts virtuelle DOM minimerer direkte manipulation af browserens DOM, hvilket
              kan forbedre ydeevnen ved hyppige opdateringer.
            </li>
            <li>
              Rigt økosystem: Adgang til et stort udvalg af biblioteker, værktøjer og community-støtte, der kan
              fremskynde udviklingen.
            </li>
          </ul>
        </article>
        <article>
          <h2>Ulemper</h2>
          <ul>
            <li>
              Læringskurve: Kræver forståelse for JSX, state management og Reacts livscyklus, hvilket kan være en
              barriere for nybegyndere.
            </li>
            <li>
              Yderligere afhængigheder: React er kun et UI-bibliotek, så du skal ofte tilføje ekstra biblioteker (f.eks.
              til routing eller state management), hvilket kan øge projektets kompleksitet.
            </li>
            <li>
              Performance overhead: For meget små projekter kan Reacts abstraktion og bundling føles unødvendig og
              tilføje ekstra loadtid.
            </li>
          </ul>
        </article>
      </section>
      {/* <Header></Header> */}
      {/* <Main></Main> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
