export const Item = ({ obra }) => {

    return (
        <div>
            <h1>{obra.nombre}</h1>
            <h2>{obra.año}</h2>
            <h3>{obra.autor}</h3>
        </div>
    )
}