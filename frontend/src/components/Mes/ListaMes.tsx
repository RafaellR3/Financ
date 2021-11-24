import axios from "axios";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { MesPage } from "types/Mes";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

function ListaMes() {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<MesPage>({
        content: [],
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/mes/recuperartodos?page=${activePage}&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data)
            });
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    }
    return (
        <>
            <Pagination page={page} onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-dark table-sm  text-center">
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.idmes} >
                                <td className = "btn btn-primary btn-lg center" width= "200px">
                                    {item.nome}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListaMes;