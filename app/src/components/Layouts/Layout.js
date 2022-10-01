import Header from "./Header";
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <Header />
      <main className="flex-grow" style={{paddingBottom: "2rem"}}>{props.children}</main>
      <Footer/>
    </>
  );
}

export default Layout;
