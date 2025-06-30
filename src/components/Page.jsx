import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Card title="Card 1">This is some content.</Card>
        <Card title="Card 2">This is more content.</Card>
      </main>
      <Footer />
    </>
  );
}
