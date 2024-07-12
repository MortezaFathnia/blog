export default function LightTheme() {
  return (
    <style jsx global>{`
      :root {
        --bg: #fff;
        --bg-secondary: #f9fafb;
        --text:#222;
        --header: var(--lightpink);
        --textNormal: #222;
        --textTitle: #fff;
        --textLink: #d23669;
        --nav-link:#fff;
        --hr: rgba(0, 0, 0, 0.2);
        --inlineCode-bg: rgba(255, 229, 100, 0.2);
        --pink: lab(63 59.32 -1.47);
        --purple: lab(33 42.09 -43.19);
      }
    `}</style>
  );
}
