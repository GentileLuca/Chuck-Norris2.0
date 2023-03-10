import '../styles/EditorialContent.css'

function EditorialContent({title, content}){
    return (
        <div className="EditorialContent">
        <h1>{title}</h1>
        <p>{content}</p>
        </div>
    )
}

export default EditorialContent