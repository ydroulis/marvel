import React, { Dispatch, SetStateAction } from 'react';
import * as S from './styles';

interface PaginationProps {
    limit: number;
    total: number;
    offset: number;
    setOffset: Dispatch<SetStateAction<number>>;
}

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;



const Pagination: React.FC<PaginationProps> = ({ limit, total, offset, setOffset }) => {
    const currentPage = offset ? (offset / limit) + 1 : 1;
    const totalPages = Math.ceil(total / limit);
    const firstPage = Math.max(currentPage - MAX_LEFT, 1);

    const handleNextPage = (page: React.SetStateAction<number>) => {
        setOffset(page);
    }

    return (
        <S.PaginationContainer>
            {Array.from({ length: Math.min(MAX_ITEMS, totalPages) }).map((_, i) => i + firstPage)
                .map((page, i) => {
                    const nextPage = (page - 1) * limit;
                    return (
                        <li key={i}>
                            <button
                                onClick={() => handleNextPage(nextPage)}
                                className={page === currentPage ? 'paginationActive' : ''}
                            >
                                {page}
                            </button>
                        </li>)
                })
            }
        </S.PaginationContainer>
    );
}

export default Pagination;