import { Dashboard } from '@mui/icons-material';
import React from 'react'
// import { useIntl } from 'react-intl';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaidIcon from '@mui/icons-material/Paid';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { FaHome as Home } from 'react-icons/fa'
import { Link } from 'react-router-dom';
function Aside({collapsed}) {
    // const intl = useIntl();

    return (
        <ProSidebar
            collapsed={collapsed}
            breakPoint="md"
            // image='https://i.pinimg.com/736x/1f/4e/f8/1f4ef82e452d6d3c29c5869b425333a6.jpg'
            style={{
                backgroundColor:'#E5E5E5 !important'
            }}
        >
            <SidebarHeader>
                <div
                    style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    }}
                >
                    <h1>SM</h1>
                    {/* <h2>{intl.formatMessage({ id: 'sidebarTitle' })}</h2> */}
                </div>
                
            </SidebarHeader>
            <Menu iconShape="circle">
                <MenuItem icon={<Home style={{fontSize:22}} />}>
                    Home
                    <Link to="/" />
                </MenuItem>
                <MenuItem icon={<Dashboard />}>
                    Dashboard
                    <Link to="/app/dashboard" />
                </MenuItem>
                <MenuItem icon={<AssignmentIcon />}>
                    Task
                    <Link to="/app/task" />
                </MenuItem>
                <MenuItem icon={<PaidIcon />}>
                    Expenses
                    <Link to="/app/expense" />
                </MenuItem>
                <MenuItem icon={<HealthAndSafetyIcon />}>
                    Health
                    <Link to="/app/health" />
                </MenuItem>
            </Menu>
            <SidebarFooter style={{ textAlign: 'center',bottom:0 }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                        position:'relative',
                    }}
                >
                <h2>Helel</h2>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default Aside