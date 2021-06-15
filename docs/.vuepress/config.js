module.exports = {
    title: 'mypui',
    description: '基于nvue的全端组件与模版库，支持编译到所有APP/小程序/H5',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
    ],
    theme: 'antdocs',
    plugins: [
        ['vuepress-plugin-code-copy', true],
    ],
    themeConfig: {
        backToTop: true,
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '组件文档', link: '/guide/why',
            },
            {
                text: '知识分享', link: '/cookbook/introduce',
            },
            {
                text: '认识团队', link: '/guide/team',
            },
            {
                text: '支持 mypUI', link: '/support-mypui/',
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '基础',
                    children: [
                        '/guide/why',
                        '/guide/getting-started',
                        '/guide/global',
                        '/guide/theme',
                        '/guide/design',
                    ]
                },
                {
                    title: '布局',
                    children: [
                        '/guide/myp-flex',
                        '/guide/myp-wing',
                        '/guide/myp-space',
                    ]
                },
                {
                    title: '列表与盒子',
                    children: [
                        '/guide/myp-list',
                        '/guide/myp-list-cell',
                        '/guide/myp-list-header',
                        '/guide/myp-waterfall',
                        '/guide/myp-waterfall-view',
                        '/guide/myp-scroll-h',
                        '/guide/myp-scroll-inline',
                        '/guide/myp-gallery',
                        '/guide/myp-gallery-item',
                        '/guide/myp-list-index',
                        '/guide/myp-content-box',
                        '/guide/myp-tab-container',
                        '/guide/myp-swiper',
                        '/guide/myp-swiper-item',
                        '/guide/myp-height',
                        '/guide/myp-status',
                        '/guide/myp-xbar',
                        '/guide/myp-position',
                    ]
                },
                {
                    title: '导航',
                    children: [
                        '/guide/myp-navbar',
                        '/guide/myp-tabbar',
                        '/guide/myp-tabs-h',
                        '/guide/myp-tabs-v',
                        '/guide/myp-drawer',
                        '/guide/myp-popover',
                    ]
                },
                {
                    title: '数据输入',
                    children: [
                        '/guide/myp-button',
                        '/guide/myp-button-raw',
                        '/guide/myp-input',
                        '/guide/myp-input-one',
                        '/guide/myp-switch',
                        '/guide/myp-check',
                        '/guide/myp-check-item',
                        '/guide/myp-check-static',
                        '/guide/myp-select',
                        '/guide/myp-stepper',
                        '/guide/myp-slider-bar',
                        '/guide/myp-search',
                        '/guide/myp-picker-time',
                        '/guide/myp-picker-time-content',
                        '/guide/myp-picker',
                        '/guide/myp-picker-content',
                        '/guide/myp-grid-static',
                    ]
                },
                {
                    title: '数据展示',
                    children: [
                        '/guide/myp-cell',
                        '/guide/myp-item',
                        '/guide/myp-icon',
                        '/guide/myp-title',
                        '/guide/myp-tag',
                        '/guide/myp-tag-group',
                        '/guide/myp-badge',
                        '/guide/myp-countdown',
                        '/guide/myp-divider',
                        '/guide/myp-progress-circle',
                        '/guide/myp-progress',
                        '/guide/myp-result',
                        '/guide/myp-timeline-item',
                    ]
                },
                {
                    title: '反馈互动',
                    children: [
                        '/guide/myp-popup',
                        '/guide/myp-popup-always',
                        '/guide/myp-toast',
                        '/guide/myp-loading',
                        '/guide/myp-notice',
                        '/guide/myp-notice-dynamic',
                        '/guide/myp-loading-indicator',
                        '/guide/myp-fold',
                        '/guide/myp-overlay',
                    ]
                },
                {
                    title: '手势',
                    children: [
                        '/guide/myp-refresher',
                        '/guide/myp-refresher-n',
                        '/guide/myp-loader',
                        '/guide/myp-loader-n',
                    ]
                },
                {
                    title: '请求与工具',
                    children: [
                        '/guide/request',
                        '/guide/validator',
                        '/guide/time',
                        '/guide/utils',
                        '/guide/system',
                    ]
                },
                {
                    title: '规模化',
                    children: [
                        '/guide/routing',
                        '/guide/share',
                        '/guide/scene',
                        '/guide/contentBoxMixin',
                        '/guide/loading',
                        '/guide/toast',
                    ]
                },
                {
                    title: '更多',
                    children: [
                        '/guide/team',
                        '/guide/history',
                        '/guide/faq',
                    ]
                },
            ],
            '/cookbook/': [
                {
                    title: '分享',
                    children: [
                        '/cookbook/introduce',
                        '/cookbook/autoHeight',
                        '/cookbook/bubble',
                        '/cookbook/created',
                        '/cookbook/css',
                        '/cookbook/globalVar',
                        '/cookbook/icon',
                        '/cookbook/nvueMargin',
                        '/cookbook/nvueOrVue',
                        '/cookbook/provideInject',
                        '/cookbook/radius',
                        '/cookbook/scroll',
                        '/cookbook/sort',
                        '/cookbook/string',
                        '/cookbook/textarea',
                        '/cookbook/v3',
                        '/cookbook/windowScreen',
                        '/cookbook/git',
                        '/cookbook/bindingx',
                        '/cookbook/app',
                        '/cookbook/confirmType',
                        '/cookbook/lifecycle',
                        '/cookbook/weexAnimation',
                    ]
                },
            ]
        },
    }
}