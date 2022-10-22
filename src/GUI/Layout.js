import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div>
      <div className="section">
        <Header />
      </div>
      <div className="section">{children}</div>
    </div>
  );
}
export default Layout;
