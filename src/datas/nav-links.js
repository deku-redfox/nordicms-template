import AppRoutes from "../routes"

export const mainLinks = [
    {
        title: 'About NMS',
        route: AppRoutes.about
    },
    {
        title: 'Aesthetic medicals',
        route: AppRoutes.aesthetics
    },
    {
        title: 'Orthopedics',
        route: AppRoutes.orthopedics
    },
    {
        title: 'Skincare',
        route: AppRoutes.skincares
    },
    {
        title: 'Miscellaneous',
        route: AppRoutes.miscellaneous
    }
]

export const topLinks = [
    {
        title: 'Terms & Conditions', 
        route: AppRoutes.termsAndConditions,
        subLinks: [
            {
                title: 'Terms and Conditions of Sale', 
                route: AppRoutes.conditionsOfSale
            },
            {
                title: 'Terms and Conditions of Purchase', 
                route: AppRoutes.conditionsOfPurchase
            },
            {
                title: 'Cookie & Privacy Policy', 
                route: AppRoutes.cookies
            },
        ]
    },
    {
        title: 'Login', 
        route: AppRoutes.login
    },
    {
        title: 'Warehouse/Logistics', 
        route: AppRoutes.warehouseAndLogistics
    },
    {
        title: 'Quality/Regulatory', 
        route: AppRoutes.qualityAndRegulatory
    },
    {
        title: 'FAQ', 
        route: AppRoutes.faq
    },
    {
        title: 'WeChat',
        route: AppRoutes.wechat,
        extern: true,
        icon: '/wechat-menu.png'
    },
    {
        title: 'Whatsapp',
        route: AppRoutes.whatsapp,
        extern: true,
        icon: '/whatsapp-menu.png'
    },
    {
        title: 'Contact', 
        route: AppRoutes.contact
    },
]