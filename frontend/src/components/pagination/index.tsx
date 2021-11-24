import {MesPage} from"types/Mes";

type Props = {
    page: MesPage;
    onPageChange: Function;
}

const Pagination = ({page, onPageChange} : Props) => {
    return (
        <div className="row d-flex justify-content-center" >
            <nav>
                <ul className="pagination" >
                    <li >
                        <button className="page-link"  > Anterior </button>
                    </li>
                    <li className="page-item disabled" >
                        <span className="page-link" >0</span>
                    </li>
                    <li  >
                        <button className="page-link"> Próxima </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;