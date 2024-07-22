import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Panel de control', icon: 'bi bi-house-door', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/default', title: 'Default1', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'RFQs', icon: 'lni lni-money-location', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/default', title: 'Default1', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Tus Compras', icon: 'lni lni-cart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/default', title: 'Default1', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Tus Proyectos', icon: 'lni lni-grid-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/default', title: 'Default1', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Facturas', icon: 'lni lni-folder', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [        
        ]
    },
    {
        path: '', title: 'Term. & Condiciones', icon: 'lni lni-highlight-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [            
        ]
    },
    {
        path: '', title: 'Preguntas frecuentes', icon: 'lni lni-question-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
        ]
    },
    {
        path: '', title: 'Contactanos', icon: 'bi bi-headset', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [            
        ]
    }

    ,
    {
        path: '', title: '', icon: 'lni lni-windows', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [            
        ]
    },

    {
        path: '', title: 'Dashboard1', icon: 'bi bi-house-door', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/default', title: 'Default', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/eCommerce', title: 'eCommerce', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/sales', title: 'Sales', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/analytics', title: 'Analytics', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/alternate', title: 'Alternate', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/digital-marketing', title: 'Digital Marketing', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/human-resources', title: 'Human Resources', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Application', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/application/email-app', title: 'Email', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/chat-box', title: 'Chat Box', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/file-manager', title: 'File Manager', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/invoice', title: 'Invoice', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/calendar', title: 'Calendar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/widgets', title: 'Widgets', icon: 'bi bi-award', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {
        path: '', title: 'eCommerce', icon: 'bi bi-bag-check', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/ecommerce/products-list', title: 'Products List', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/products-grid', title: 'Products Grid', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/categories', title: 'Categories', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/orders', title: 'Orders', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/orders-details', title: 'Orders Details', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/add-new-product', title: 'Add New Product', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/add-new-product-2', title: 'Add New Product 2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/transations', title: 'Transations', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Components', icon: 'bi bi-bookmark-star', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/components/alerts', title: 'Alerts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/badge', title: 'Badge', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/buttons', title: 'Buttons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/cards', title: 'Cards', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/carousel', title: 'Carousel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/acordians', title: 'Accordion', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/list-groups', title: 'List Groups', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/media-objects', title: 'Media Objects', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/modals', title: 'Modals', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/navs', title: 'Navs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/navbar', title: 'Navbar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/pagination', title: 'Pagination', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/progress-bar', title: 'Progress Bars', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/spinners', title: 'Spinners', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/avtars-chips', title: 'Avatrs & Chips', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'ng-Components', icon: 'bx bx-layer', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/ng-components/accordion', title: 'Accordion', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/ng-components/alert', title: 'Alert', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/buttons', title: 'Buttons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/carousel', title: 'Carousel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/collapse', title: 'Collapse', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/ng-components/datepicker', title: 'Datepicker', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/dropdown', title: 'Dropdown', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/modal', title: 'Modal', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/nav', title: 'Nav', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/pagination', title: 'Pagination', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/popovers', title: 'Popovers', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/progress-bar', title: 'Progressbar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/table', title: 'Table', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/timepicker', title: 'Timepicker', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/ng-components/toast', title: 'Toast', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/tooltip', title: 'Tooltip', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Content', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/content/grid-system', title: 'Grid System', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/content/typography', title: 'Typography', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/content/text-utilities', title: 'Text Utilities', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Icons', icon: 'bi bi-cloud-arrow-down', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/icons/line-icons', title: 'Line Icons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/icons/boxicons', title: 'Boxicons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Form', icon: 'bi bi-file-earmark-break', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/form/form-elements', title: 'Form Elements', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/input-groups', title: 'Input Groups', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-layouts', title: 'Forms Layouts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-validation', title: 'Form Validation', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-wizard', title: 'Form Wizard', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/text-editor', title: 'Text Editor', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/file-upload', title: 'File Upload', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/select2', title: 'Select2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           ]
    },
    {
        path: '/table/table', title: 'Table', icon: 'bi bi-file-earmark-spreadsheet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Authentication', icon: 'bi bi-lock', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            
            { path: '/auth/sign-in', title: 'Sign In', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/sign-up', title: 'Sign Up', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/signin-with-header-footer', title: 'SignIn With Header Footer', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/signup-with-header-footer', title: 'SignUp With Header Footer', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/forgot-password', title: 'Forgot Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/reset-password', title: 'Reset Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/lock-screen', title: 'Lock Screen', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            
        ]
    },
    { path: '/user-profile', title: 'User Profile', icon: 'bi bi-person-check', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    { path: '/timeline', title: 'Timeline', icon: 'bi bi-collection-play', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {
        path: '', title: 'Errors', icon: 'bx bx-error', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/error/error-404', title: '404 Error', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/error/error-500', title: '500 Error', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/error/coming-soon', title: 'Coming Soon', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
           ]
    },
    { path: '/faq', title: 'FAQ', icon: 'bi bi-exclamation-triangle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/pricing', title: 'Pricing', icon: 'bi bi-credit-card-2-front', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    // { path: '/earnings', title: 'Earnings', icon: 'bx bx-dollar-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/downloads', title: 'Downloads', icon: 'bx bx-download', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Charts', icon: 'bi bi-graph-down', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/charts/apex-chart', title: 'Apex Charts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/chartjs', title: 'ChartJs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/highcharts', title: 'Highcharts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    // {
    //     path: '', title: 'Maps', icon: 'bi bi-pin-map', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/maps/google-maps', title: 'Google Maps', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/maps/fullscreen', title: 'Fullscreen Map', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
    {
        path: 'javascript:;', title: 'Menu Levels', icon: 'bx bx-menu', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
            submenu: [
                { path: 'javascript:;', title: 'Level 1', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: 'javascript:;', title: 'Level 1', icon: 'bx bx-right-arrow-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
                        submenu: [
                            { path: 'javascript:;', title: 'level 2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: 'javascript:;', title: 'level 2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

                        ] },
            ]
    },
    { path: 'https://codervent.com/dashtreme-angular/demo/vertical/docs', title: 'Documentation', icon: 'bi bi-file-earmark-code', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://themeforest.net/user/codervent/portfolio', title: 'Support', icon: 'bi bi-headset', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }

    
];