export function RepositoryItem(props){
    return(
    <li>
        <strong>{props.batata?.name ?? 'Default'}</strong>
        <p>{props.batata?.description ?? 'Repositório do Github'}</p>

        <a href={props.batata?.link ?? "Sorry. Could not found this"}>
                Acessar repositório
        </a>
    </li>
    )
}