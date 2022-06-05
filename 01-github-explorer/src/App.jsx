import { Counter } from "./components/Couter.jsx";
import { RepositoryList } from "./components/RepositoryList.jsx";
import './styles/global.scss';
export function App (){
    return (
    <>
        <RepositoryList />
        <br />
        <Counter/>
    </>
)
}