import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Page = (props) => {
    const {paginationRecord : {
        firstPage,
        lastPage,
        currentPage,
        nextPage,
        prevPage,
        totalPages,
        studentLength},
        clickOnChangePage
        } = props;
    return (
        <div>
            <div>
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink first
                                onClick = {() => clickOnChangePage(firstPage)}
                                disabled = {firstPage === currentPage ? true : false}
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous
                                onClick = {() => clickOnChangePage(prevPage)}
                                disabled = {prevPage === currentPage ? true : false}
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink>
                    {currentPage}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next
                                onClick = {(event) => clickOnChangePage(nextPage)}
                                disabled = {nextPage === currentPage ? true : false}
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last
                                onClick = {() => clickOnChangePage(lastPage)}
                                disabled = {lastPage === currentPage ? true : false}
                />
            </PaginationItem>
        </Pagination>
            </div>
            <div>
                <span>{`${currentPage} page out Off ${totalPages}`}</span><br/>
                <span>{`total record is ${studentLength}`}</span>
            </div>
        </div>
    );
}

export default Page;