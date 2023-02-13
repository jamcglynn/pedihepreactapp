import { PaginationLink, Pagination, PaginationItem } from "reactstrap";

const SavedProgramsNav = () => {
    return(
        <Pagination>
            <PaginationItem>
                <PaginationLink
                    href="#"
                    previous
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" next />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" last />
            </PaginationItem>
        </Pagination>
    );
}

export default SavedProgramsNav;