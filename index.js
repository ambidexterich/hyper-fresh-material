
const {defaultConfig} = require('./default.config');
const { themes } = require('./themes');

exports.decorateConfig = config => {
    const themeConfig = config.FreshMaterial || {};
    const choosenTheme = (themeConfig.theme && themeConfig.theme.toLowerCase()) || 'default';
    const accentColor = themeConfig.accentColor || themes[choosenTheme];

    config.backgroundColor = defaultConfig.backgroundColor;
    config.colors = defaultConfig.colors;
    config.cursorColor = accentColor;
    config.cursorShape = themeConfig.cursorShape || defaultConfig.cursorShape;

    config.padding = config.padding || defaultConfig.padding;
    config.foregroundColor = config.foregroundColor || defaultConfig.foregroundColor;
    config.selectionColor = '#FFFFFF1D';

    config.termCSS = `
        .xterm-text-layer a {
            text-decoration: underline !important;
            color: ${accentColor} !important;
        }

        *::-webkit-scrollbar {
            width: 4px;
            height: 4px;
            background-color: transparent;
        }

        *::-webkit-scrollbar-track {
            background-color: transparent;
        }

        *::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
        }

        *::-webkit-scrollbar-thumb:window-inactive {
            background: transparent;
        }

        ${config.termCSS || ''}
    `;

    config.css = `
        .hyper_main {
            border: none;
            background-color: ${config.backgroundColor};
        }

        .tabs_borderShim {
            display: none;
        }

        .tabs_list .tab_tab {
            border: none;
            color: rgba(255, 255, 255, 0.4);
            background-color: transparent;
        }

        .tabs_list .tab_tab:hover {
            background-color:  ${accentColor}66;
        }

        .tab_tab::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background-color: ${accentColor};
            transform: scaleX(0);
            transition: none;
        }

        .tab_tab.tab_active {
            color: #FFF;
        }

        .tab_tab.tab_active::before {
            transform: scaleX(1);
            transition: all 300ms cubic-bezier(0.0, 0.0, 0.2, 1)
        }

        .tab_textInner {
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 100%;
            padding: 0px 24px 0 8px;
        }

        .splitpane_divider {
            background-color: rgba(0, 0, 0, 0.2) !important;
        }

        ${config.css || ''}
    `;

    return { ...config };
};
