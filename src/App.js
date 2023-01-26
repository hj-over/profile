//common
import { Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
//main
import Content from "./components/main/Content";
import Visual from "./components/main/Visual";
import Community from "./components/sub/Community";

//sub
import Department from "./components/sub/Department";
import Gallery from "./components/sub/Gallery";
import Join from "./components/sub/Join";
import Location from "./components/sub/Location";
import Youtube from "./components/sub/Youtube";

function App() {
  return (
    <>
      <Header />
      {/* 
      화면별  Link 에 의해 출력될 단위 => Route 
      path = 연결할 주소
      exact = 정확하게 path 가 같을 때만 보여준다.
      */}
      <Route exact path="/">
        <Visual />
        <Content />
      </Route>

      {/* 화면별  Link 에 의해 출력될 단위 => Route */}

      {/* Route 1번 방식 */}
      {/* <Route path="/department">
        <Department />
      </Route> */}

      {/* Route 1번 방식 : 인라인 방식의 Route 적용 */}
      <Route path="/department" component={Department} />
      <Route path="/community" component={Community} />
      <Route path="/join" component={Join} />
      <Route path="/location" component={Location} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/gallery" component={Gallery} />
      <Footer />
    </>
  );
}

export default App;
