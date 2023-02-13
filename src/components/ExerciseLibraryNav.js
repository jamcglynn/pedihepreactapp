import { useState } from 'react';
import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink
} from 'reactstrap';

const ExerciseLibraryNav = () => {
    const [dropdownOpenUE, setDropdownOpenUE] = useState(false);
    const toggleUE = () => setDropdownOpenUE(!dropdownOpenUE);
    const [dropdownOpenLE, setDropdownOpenLE] = useState(false);
    const toggleLE = () => setDropdownOpenLE(!dropdownOpenLE);
    const [dropdownOpenDS, setDropdownOpenDS] = useState(false);
    const toggleDS = () => setDropdownOpenDS(!dropdownOpenDS);

    return(
        <Nav tabs>
            <NavItem>
                <NavLink href="#" active>
                    Exercise Library
                </NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpenUE} toggle={toggleUE}>
                <DropdownToggle nav caret>
                    Upper Extremity
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>Shoulder</DropdownItem>
                    <DropdownItem>Elbow</DropdownItem>
                    <DropdownItem>Wrist/Hand</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown nav isOpen={dropdownOpenLE} toggle={toggleLE}>
                <DropdownToggle nav caret>
                        Lower Extremity
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Hip</DropdownItem>
                    <DropdownItem>Knee</DropdownItem>
                    <DropdownItem>Ankle/Foot</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavItem>
                <NavLink href="#">Core</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpenDS} toggle={toggleDS}>
                <DropdownToggle nav caret>
                    Developmental Skills
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Supine</DropdownItem>
                    <DropdownItem>Prone</DropdownItem>
                    <DropdownItem>Sitting</DropdownItem>
                    <DropdownItem>Standing</DropdownItem>
                    <DropdownItem>Transitions</DropdownItem>
                    <DropdownItem>Higher Gross Motor Skills</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Nav>
    );
}

export default ExerciseLibraryNav;