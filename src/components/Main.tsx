export function Main() {
  return (
    <section className="pros-cons">
      <header>
        <h1>Fordele og ulemper ved React</h1>
      </header>
      <article>
        <h2>Fordele:</h2>
        <ul>
          <li>
            <b>Komponentbaseret arkitektur:</b> React gør det nemt at opdele UI i genanvendelige komponenter, hvilket
            forbedrer vedligeholdelse og skalerbarhed.
          </li>
          <li>
            <b>Effektiv DOM-håndtering:</b> Reacts virtuelle DOM minimerer direkte manipulation af browserens DOM,
            hvilket kan forbedre ydeevnen ved hyppige opdateringer.
          </li>
          <li>
            <b>Rigt økosystem:</b> Adgang til et stort udvalg af biblioteker, værktøjer og community-støtte, der kan
            fremskynde udviklingen.
          </li>
        </ul>
      </article>
      <article>
        <h2>Ulemper</h2>
        <ul>
          <li>
            <b>Læringskurve:</b> Kræver forståelse for JSX, state management og Reacts livscyklus, hvilket kan være en
            barriere for nybegyndere.
          </li>
          <li>
            <b>Yderligere afhængigheder:</b> React er kun et UI-bibliotek, så du skal ofte tilføje ekstra biblioteker
            (f.eks. til routing eller state management), hvilket kan øge projektets kompleksitet.
          </li>
          <li>
            <b>Performance overhead:</b> For meget små projekter kan Reacts abstraktion og bundling føles unødvendig og
            tilføje ekstra loadtid.
          </li>
        </ul>
      </article>
    </section>
  );
}
