import {pageArrays} from "../../utils";
import {useMemo} from "react";


export const usePagination = (totalPages:number) =>{
    const pageArr = useMemo(()=>

        pageArrays(totalPages)
    ,[totalPages])
    return pageArr
}