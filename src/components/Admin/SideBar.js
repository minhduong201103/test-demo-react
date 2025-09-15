import 'react-pro-sidebar/dist/css/style.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar = () => {
    return (
        <div>
            <ProSidebar>
                <Menu iconShape='square'>
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>;
        </div>
    )
}

export default SideBar;