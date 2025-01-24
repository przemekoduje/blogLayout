// src/data/posts.js

const initialPosts = [
  {
    id: "1",
    src: "images/21.png",
    w: 2,
    h: 2,
    title: "Magiczne Poranki: Jak Zacząć Dzień Pełen Energii",
    type: "StandardPost",
    hasSvg: true,
    categories: ["Styl", "Zdrowie"],
    date: "2024-12-11",
    borderRadius: "25px",
  },
  {
    id: "2",
    src: "images/2.jpg",
    w: 2,
    h: 2,
    title: "Zdrowe Przepisy: Śniadanie, Które Zmieni Twój Dzień",
    content: `
    Śniadanie to najważniejszy posiłek dnia. Przygotowaliśmy dla Ciebie kilka zdrowych i smacznych przepisów, które dostarczą Ci energii na cały dzień.
    `,

    content2: ` 
    <h2>Śniadanie – najważniejszy posiłek dnia</h2>
    <p>Śniadanie jest nie tylko pierwszym posiłkiem dnia, ale także kluczowym momentem, który determinuje nasze samopoczucie, poziom energii i koncentrację na kolejne godziny. To właśnie od śniadania zależy, czy nasz organizm będzie w stanie sprostać wyzwaniom codzienności. Niestety, wiele osób pomija ten posiłek, tłumacząc się brakiem czasu, brakiem apetytu rano lub przekonaniem, że poranny posiłek nie jest konieczny. W rzeczywistości regularne spożywanie śniadania ma ogromne korzyści zdrowotne i odgrywa kluczową rolę w utrzymaniu zdrowego stylu życia.</p>
    
    Dlaczego śniadanie jest takie ważne?
    Podczas snu nasz organizm odpoczywa i regeneruje się, zużywając zapasy energii zgromadzonej poprzedniego dnia. Rano, po przebudzeniu, poziom cukru we krwi jest niski, a nasze ciało potrzebuje paliwa, aby uruchomić metabolizm i rozpocząć dzień z energią. Pominięcie śniadania może prowadzić do:
    
    Obniżonego poziomu koncentracji i energii – Mózg, aby pracować efektywnie, potrzebuje glukozy. Jej brak może skutkować trudnościami w skupieniu i uczuciem zmęczenia.
    Zwiększonego apetytu w ciągu dnia – Osoby, które nie jedzą śniadań, mają tendencję do podjadania niezdrowych przekąsek i spożywania większych porcji podczas kolejnych posiłków.
    Zaburzeń metabolizmu – Regularne pomijanie śniadania może wpłynąć negatywnie na funkcjonowanie metabolizmu, prowadząc do nadwagi i problemów zdrowotnych.
    Zdrowe i smaczne śniadania – klucz do sukcesu
    Przygotowanie zdrowego śniadania nie musi być skomplikowane ani czasochłonne. Kluczem jest wybór odpowiednich składników, które dostarczą organizmowi niezbędnych wartości odżywczych, takich jak białko, węglowodany złożone, zdrowe tłuszcze, błonnik oraz witaminy i minerały. Oto kilka inspiracji na pełnowartościowe śniadania, które dodadzą Ci energii na cały dzień.
    
    1. Owsianka z owocami i orzechami
    Owsianka to klasyk wśród zdrowych śniadań. Jest bogata w błonnik, który wspiera trawienie i pomaga utrzymać uczucie sytości na dłużej.
    
    Przepis:
    
    1/2 szklanki płatków owsianych
    1 szklanka mleka lub napoju roślinnego (np. migdałowego, owsianego)
    Garść świeżych owoców (np. borówek, truskawek, banana)
    1 łyżeczka miodu
    Garść orzechów lub migdałów
    Przygotowanie:
    Płatki owsiane zagotuj z mlekiem, mieszając do uzyskania kremowej konsystencji. Dodaj owoce, miód i posyp orzechami.
    
    2. Kanapki z awokado i jajkiem
    Kanapki z pełnoziarnistego pieczywa to świetny wybór na szybkie, a jednocześnie wartościowe śniadanie.
    
    Przepis:
    
    2 kromki pełnoziarnistego chleba
    1 dojrzałe awokado
    1 ugotowane na miękko jajko
    Szczypta soli, pieprzu i papryki wędzonej
    Kilka listków rukoli lub szpinaku
    Przygotowanie:
    Rozgnieć awokado widelcem i rozsmaruj na chlebie. Na wierzch połóż plasterki jajka, dopraw i dodaj zieleninę.
    
    3. Koktajl białkowy z owocami
    Idealny dla osób, które rano mają niewiele czasu lub wolą coś lekkiego.
    
    Przepis:
    
    1 banan
    1/2 szklanki mrożonych owoców (np. malin, truskawek)
    1 szklanka mleka lub jogurtu naturalnego
    1 łyżka masła orzechowego
    1 miarka białka w proszku (opcjonalnie)
    Przygotowanie:
    Wszystkie składniki zmiksuj na gładką konsystencję i od razu podawaj.
    
    4. Jajecznica z warzywami i serem feta
    Jajka są doskonałym źródłem białka i zdrowych tłuszczów.
    
    Przepis:
    
    2-3 jajka
    Garść pokrojonych warzyw (np. papryki, cukinii, szpinaku)
    30 g sera feta
    1 łyżeczka oliwy z oliwek
    Przygotowanie:
    Na patelni podsmaż warzywa na oliwie, a następnie wlej roztrzepane jajka. Dodaj fetę i smaż do momentu, aż jajka się zetną.
    
    5. Chia pudding z mlekiem kokosowym
    Chia pudding to nie tylko pyszny, ale także pełen wartości odżywczych deser, który można przygotować wieczorem.
    
    Przepis:
    
    3 łyżki nasion chia
    1 szklanka mleka kokosowego
    1 łyżka syropu klonowego
    Owoce do dekoracji (np. mango, kiwi, maliny)
    Przygotowanie:
    Wymieszaj nasiona chia z mlekiem kokosowym i syropem klonowym. Odstaw na noc do lodówki. Rano udekoruj owocami.
    
    Korzyści z regularnego spożywania śniadań
    Regularne jedzenie zdrowych śniadań może przynieść wiele korzyści:
    
    Lepsza koncentracja i produktywność – Badania pokazują, że osoby jedzące śniadania lepiej radzą sobie w pracy i szkole.
    Utrzymanie zdrowej wagi – Śniadania wspierają metabolizm i pomagają uniknąć napadów głodu.
    Wspieranie zdrowia serca – Śniadania bogate w błonnik mogą obniżać poziom cholesterolu.
    Podsumowanie
    Śniadanie to coś więcej niż tylko posiłek – to inwestycja w zdrowie i dobre samopoczucie. Dzięki różnorodnym przepisom można dostosować śniadanie do własnych preferencji, potrzeb i trybu życia. Czy to owsianka, kanapka, koktajl, czy jajecznica – każdy znajdzie coś dla siebie. Pamiętaj, aby nie pomijać tego kluczowego posiłku i czerpać radość z jego przygotowywania. Twoje ciało i umysł na pewno Ci za to podziękują! `,
    type: "TextPost",
    categories: ["Jedzenie", "Zdrowie"],
    date: "2024-10-18",
    borderRadius: "25px",
    specialCorner: true,
  },
  {
    id: "3",
    src: "images/3.jpg",
    w: 1,
    h: 2,
    title: "Podróże Marzeń: Najpiękniejsze Miejsca na Świecie",
    content:
      "Marzysz o podróżach? Poznaj najpiękniejsze miejsca na świecie, które warto odwiedzić przynajmniej raz w życiu. Od malowniczych plaż po majestatyczne góry – odkryj świat na nowo.",
    type: "TextPost",
    categories: ["Podróże", "Styl życia"],
    date: "2024-12-10",
    borderRadius: "25px",
    specialCorner: true,
  },
  {
    id: "4",
    src: "images/4.jpg",
    w: 1,
    h: 1,
    title: "Minimalizm w Życiu Codziennym",
    content:
      "Minimalizm to nie tylko trend, ale styl życia, który może przynieść wiele korzyści. Dowiedz się, jak wprowadzić minimalizm do swojej codzienności i czerpać z tego pełnię szczęścia.",
    type: "StandardPost",
    categories: ["Styl życia", "Edukacja", "Podróże", "Zdrowie", "Ekologia"],
    date: "2024-08-08",
    borderRadius: "25px",
  },
  {
    id: "5",
    w: 1,
    h: 1,
    type: "CategoriesPost",
    categories: [
      "Technologia",
      "Styl życia",
      "Edukacja",
      "Podróże",
      "Zdrowie",
      "Ekologia",
    ],
    date: "2024-04-031",
    borderRadius: "25px",
  },
  {
    id: "6",
    src: "images/6.jpg",
    w: 1,
    h: 2,
    title: "Sztuka Relaksu: Jak Znaleźć Spokój w Zgiełku Miasta",
    content:
      "Życie w mieście potrafi być stresujące. Oto kilka sprawdzonych metod, które pomogą Ci znaleźć spokój i zrelaksować się nawet w najbardziej zabieganym otoczeniu.",
    type: "StandardPost",
    categories: ["Zdrowie", "Styl życia"],
    date: "2024-01-10",
    borderRadius: "25px",
  },
  {
    id: "7",
    src: "images/7.jpg",
    w: 1,
    h: 1,
    title: "Ekologia na Co Dzień: Proste Kroki dla Środowiska",
    content:
      "Dbając o środowisko, możemy zrobić wiele dobrego. Dowiedz się, jakie proste zmiany możesz wprowadzić do swojego życia, aby przyczynić się do ochrony naszej planety.",
    type: "StandardPost",
    categories: ["Ekologia", "Styl życia"],
    date: "2024-08-05",
    borderRadius: "25px",
  },
  {
    id: "8",
    src: "images/8.jpg",
    w: 1,
    h: 1,
    title: "Rozwój Osobisty: Jak Osiągnąć Swoje Cele",
    content:
      "Chcesz osiągnąć swoje cele, ale nie wiesz, od czego zacząć? Oto kilka skutecznych strategii, które pomogą Ci w drodze do sukcesu.",
    type: "TextPost",
    categories: ["Edukacja", "Finanse"],
    date: "2024-10-03",
    borderRadius: "25px",
    specialCorner: true,
  },
  {
    id: "9",
    src: "images/9.jpg",
    w: 2,
    h: 2,
    title: "Fitness dla Każdego: Treningi, Które Możesz Zrobić w Domu",
    content:
      "Nie masz czasu na siłownię? Oto zestaw treningów, które możesz wykonać w domu, aby utrzymać formę i zdrowie bez wychodzenia z domu.",
    content2: `
    Dlaczego warto ćwiczyć w domu?
    Treningi w domu to wygodny sposób na utrzymanie dobrej kondycji fizycznej bez potrzeby wychodzenia na siłownię. Możesz dostosować ćwiczenia do własnych potrzeb i harmonogramu, oszczędzając czas i pieniądze.
    
    Przykładowe ćwiczenia do wykonania w domu:
    - Pompki: Wzmocnij mięśnie klatki piersiowej, ramion i tricepsów.
    - Przysiady: Popraw kondycję mięśni nóg i pośladków.
    - Plank: Wzmocnij mięśnie brzucha i pleców.
    - Wykroki: Dopracuj mięśnie nóg i równowagę.
    - Skakanka: Popraw wydolność serca i spalenie kalorii.
    
    Jak zacząć?
    Przygotuj miejsce do ćwiczeń, zaopatrz się w matę i zacznij od krótkich sesji 10-15 minut dziennie. Stopniowo zwiększaj intensywność i czas treningów, pamiętając o rozgrzewce i rozciąganiu po treningu.
    
    Podsumowanie:
    Ćwiczenia w domu to świetny sposób na poprawę zdrowia i samopoczucia. Wystarczy trochę motywacji i regularności, aby osiągnąć zauważalne efekty.
  `,
    type: "StandardPost",
    categories: ["Zdrowie", "Sport"],
    date: "2024-07-17",
    borderRadius: "25px",
  },
  {
    id: "10",
    src: "images/10.jpg",
    w: 1,
    h: 2,
    title: "Kreatywność w Pracy: Jak Być Twórczym w Środowisku Zawodowym",
    content:
      "Kreatywność to klucz do sukcesu w wielu zawodach. Dowiedz się, jak rozwijać swoją kreatywność i wprowadzać innowacje w miejscu pracy.",
    type: "TextPost",
    categories: ["Edukacja", "Technologia"],
    date: "2024-03-19",
    borderRadius: "25px",
  },
  {
    id: "11",
    src: "images/11.jpg",
    w: 1,
    h: 1,
    title: "Moda na Minimalizm: Styl, Który Trwa",
    content:
      "Minimalistyczny styl to połączenie elegancji i funkcjonalności. Poznaj zasady minimalizmu w modzie i odkryj, jak stworzyć garderobę pełną ponadczasowych ubrań.",
    type: "StandardPost",
    categories: ["Moda", "Styl życia"],
    date: "2024-04-11",
    borderRadius: "25px",
  },
  {
    id: "12",
    src: "images/12.jpg",
    w: 1,
    h: 2,
    title: "Zdrowie Psychiczne: Jak Zadbać o Swoje Umysł",
    content:
      "Zdrowie psychiczne jest równie ważne jak fizyczne. Oto kilka praktycznych wskazówek, które pomogą Ci zadbać o swój umysł i emocje.",
    type: "StandardPost",
    categories: ["Zdrowie", "Styl życia"],
    date: "2024-05-22",
    borderRadius: "25px",
  },
  {
    id: "13",
    src: "images/13.jpg",
    w: 1,
    h: 1,
    title: "Kuchnia Świata: Smaki, Które Musisz Spróbować",
    content:
      "Podróże kulinarne to doskonały sposób na odkrywanie nowych kultur. Przedstawiamy przepisy na dania z różnych zakątków świata, które warto wypróbować.",
    type: "TextPost",
    categories: ["Jedzenie", "Podróże"],
    date: "2024-09-30",
    borderRadius: "25px",
  },
  {
    id: "14",
    src: "images/14.jpg",
    w: 1,
    h: 1,
    title: "Techniki Medytacji: Jak Zacząć Praktykę Medytacji",
    content:
      "Medytacja to skuteczny sposób na redukcję stresu i poprawę koncentracji. Dowiedz się, jak rozpocząć swoją przygodę z medytacją i czerpać z niej pełne korzyści.",
    type: "StandardPost",
    categories: ["Zdrowie", "Edukacja"],
    date: "2024-06-02",
    borderRadius: "25px",
  },
  {
    id: "15",
    src: "images/15.jpg",
    w: 1,
    h: 2,
    title: "Praca Zdalna: Jak Być Produktywnym w Domowym Biurze",
    content:
      "Praca zdalna staje się coraz bardziej popularna. Oto kilka wskazówek, które pomogą Ci zachować produktywność i równowagę między życiem zawodowym a prywatnym.",
    type: "StandardPost",
    categories: ["Finanse", "Edukacja"],
    date: "2024-06-03",
    borderRadius: "25px",
  },
  {
    id: "16",
    src: "images/16.jpg",
    w: 1,
    h: 2,
    title: "DIY: Kreatywne Projekty na Weekend",
    content:
      "Lubisz tworzyć coś własnymi rękami? Przygotowaliśmy dla Ciebie kilka inspirujących projektów DIY, które możesz wykonać w weekend.",
    type: "StandardPost",
    categories: ["DIY", "Styl życia"],
    date: "2024-02-11",
    borderRadius: "25px",
  },
  {
    id: "17",
    src: "images/17.jpg",
    w: 1,
    h: 2,
    title: "Zarządzanie Czasem: Jak Efektywnie Planować Swój Dzień",
    content:
      "Zarządzanie czasem to klucz do sukcesu zarówno w życiu zawodowym, jak i prywatnym. Poznaj techniki, które pomogą Ci lepiej planować i wykorzystać każdą godzinę.",
    type: "TextPost",
    categories: ["Edukacja", "Finanse"],
    date: "2024-03-17",
    borderRadius: "25px",
  },
  {
    id: "18",
    src: "images/18.jpg",
    w: 1,
    h: 2,
    title: "Eko-życie: Jak Żyć Bardziej Świadomie i Odpowiedzialnie",
    content:
      "Świadome życie to styl życia, który uwzględnia wpływ naszych działań na środowisko. Oto kilka prostych kroków, które możesz podjąć, aby żyć bardziej ekologicznie.",
    type: "StandardPost",
    categories: ["Ekologia", "Styl życia"],
    date: "2024-05-28",
    borderRadius: "25px",
  },
  {
    id: "19",
    src: "images/19.jpg",
    w: 1,
    h: 1,
    title: "Sztuka Organizacji: Jak Utrzymać Porządek w Domu",
    content:
      "Utrzymanie porządku w domu może być wyzwaniem. Poznaj sprawdzone metody organizacji przestrzeni, które pomogą Ci stworzyć harmonijną i uporządkowaną przestrzeń życiową.",
    type: "StandardPost",
    categories: ["Organizacja", "Styl życia"],
    date: "2024-12-23",
    borderRadius: "25px",
  },
  {
    id: "20",
    src: "images/20.jpg",
    w: 2,
    h: 2,
    title: "Inspiracje Literackie: Książki, Które Musisz Przeczytać",
    content:
      "Miłośnicy literatury, ten wpis jest dla Was! Przedstawiamy listę książek, które warto przeczytać, aby poszerzyć swoje horyzonty i czerpać inspirację z różnych gatunków.",
    type: "TextPost",
    categories: ["Edukacja", "Rozrywka"],
    date: "2024-12-18",
    borderRadius: "25px",
  },
];

export default initialPosts;
