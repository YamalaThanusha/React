import toy from '../../assets/stufftoy.jpeg';;
import './Cardbc.css';
function Cardbc(){
    return(
        <>
        <div className="card">
            <img  className="card-image"src={toy} alt="photo"/>
            <h2 className="card-title">Thanusha</h2>
            <p className="card-content">Iam currently studying MCA</p>
        </div>
        </>
    )
}
export default Cardbc