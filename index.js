const foregroundColor = '#A6ADC0';
const backgroundColor = '#282C34';

const themes = {
    blue: "#1D8CEB",
    cyan: "#6FD8E5",
    green: "#9FD067",
    indigo: "#4B5DB6",
    pink: "#E72E6B",
    red: "#EA3E3F",
    default: "#7049B8"
}

const colors = {
    black: '#2E3D51',
    red: '#B9362B',
    green: '#36A252',
    yellow: '#EC9F12',
    blue: '#3E7DBB',
    magenta: '#8D35B0',
    cyan: '#34A284',
    white: '#BEC3C7',
    lightBlack: '#2C3B4D',
    lightRed: '#DF483C',
    lightGreen: '#3BB15A',
    lightYellow: '#EBC807',
    lightBlue: '#4B92DB',
    lightMagenta: '#964AB6',
    lightCyan: '#3EBE99',
    lightWhite: '#ECF0F1',
    lightWhite: '#FFFFFF',
    limeGreen: '#32CD32',
    lightCoral: '#F08080',
};
const accentColor = colors.magenta;

exports.decorateConfig = config => {
    return Object.assign({}, config, {
        backgroundColor,
        cursorColor: '#964AB6CD',
        foregroundColor,
        selectionColor: '#964AB64D',
        css: `
            ${config.css || ''}
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
        `
    });
}
