import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EvStationIcon from '@mui/icons-material/EvStation';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';




export const SidebarData = [
    {
        title:'Users',
        icon:<PersonIcon/>,
        link:"/home"
    },
    {
        title:'Vehicles',
        icon:<LocalShippingIcon/>,
        link:"/home"
    },
    {
        title:'Charging Station',
        icon:<EvStationIcon/>,
        link:"/home"
    },
    {
        title:'Machine',
        icon:<PrecisionManufacturingIcon/>,
        link:"/home"
    },
    {
        title:'Offer',
        icon:<LocalOfferIcon/>,
        link:"/home"
    },
    {
        title:'Amenity',
        icon:<LocalActivityIcon/>,
        link:"/home"
    },
];