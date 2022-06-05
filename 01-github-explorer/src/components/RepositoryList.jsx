import { RepositoryItem } from "./repositoryItem.jsx";

const repository = {
    name: 'Ignite React',
    description: 'Estudando React',
    link: 'https://github.com/Andrezz64/React-ignite'
}

export function RepositoryList(){
return(
    <section className="repository-list">
        <h1>Lista de repositórios</h1>
        <ul> 
            <RepositoryItem batata={repository}/>
            <RepositoryItem batata={repository}/>
            <RepositoryItem batata={repository}/>
            <RepositoryItem batata={repository}/>
        </ul>
    </section>
);
}
