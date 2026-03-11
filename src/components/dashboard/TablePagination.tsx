"use client"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";

interface ITablePagination {
  pages: number[];
  activePage:number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export function TablePagination({
  pages,
  activePage,
  setActivePage,
}: ITablePagination) {
  const [initialPage, setInitialPage] = useState(0)
  const [endPage, setEndPage] = useState(5)

  const handelNextPagination = () =>{
    setActivePage(activePage+1)
    if(activePage === endPage){
      setInitialPage(initialPage+1)
      setEndPage(endPage+1)
    }
  }

  const handelPreviousPagination = () =>{
    setActivePage(activePage-1)
    if(activePage === endPage){
      setInitialPage(initialPage-1)
      setEndPage(endPage-1)
    }

    if(activePage === 5){
      setInitialPage(0)
      setEndPage(5)
 
    }
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className={cn({ "pointer-events-none opacity-50": activePage === 1 })} onClick={handelPreviousPagination}>
          <PaginationPrevious />
        </PaginationItem>

        {pages?.slice(initialPage,endPage).map((page, index) => (
          <PaginationItem className={cn("cursor-pointer", {
            "bg-white rounded-md" : page+1 === activePage
          })} key={index} onClick={()=>setActivePage(page+1)}>
            <PaginationLink >
              {page+1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className={cn({ "pointer-events-none opacity-50": activePage === pages?.length })}  onClick={handelNextPagination}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
