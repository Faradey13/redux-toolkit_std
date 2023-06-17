import React, {FC} from 'react';
import {IPost} from "../types/posts";

interface PaginationProps {
    changePage: (arg0:number) => void;
    pageArray: number[];
    page: number
}
const Pagination:FC<PaginationProps> = ({changePage, pageArray, page}) => {
    return (
        <div className={'page_arr_wrapp'}>
            {pageArray.map(pg => <span onClick={() => changePage(pg)}
                                       className={pg === page ? 'page_arr_span_active' : 'page_arr_span'} key={pg}
                                       children={pg}/>)}
        </div>
    );
};

export default Pagination;