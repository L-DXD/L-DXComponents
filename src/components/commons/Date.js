// Date.js
const DateUtils = {

    RANGE_INFIX : 'to',

    getDefaultFormat(type = this.DATE_TYPE.DATE) {
        switch (type) {
            case this.DATE_TYPE.DATE:
                return 'Y-m-d';
            case this.DATE_TYPE.MONTH:
                return 'Y-m';
            case this.DATE_TYPE.YEAR:
                return 'Y';
        }
    },

    DATE_TYPE: {
        DATE: 'date',
        MONTH: 'month',
        YEAR: 'year'
    },
    getDateFormatRegex(format) {
        switch (format) {
            case 'Y-m-d':
                return /^\d{4}-\d{2}-\d{2}$/;
            case 'Y/m/d':
                return /^\d{4}\/\d{2}\/\d{2}$/;
            case 'Ymd':
                return /^\d{8}$/;
            case 'Ym':
                return /^\d{6}$/;
            case 'Y-m':
                return /^\d{4}-\d{2}$/;
            case 'Y/m':
                return /^\d{4}\/\d{2}$/;
            case 'Y.m':
                return /^\d{4}\.\d{2}$/;
            case 'Y.m.d':
                return /^\d{4}\.\d{2}\.\d{2}$/;
            case 'Y':
                return /^\d{4}$/;
            default:
                console.error(`Unsupported format: ${format}`);
                return null;
        }
    },

    parseDateStrByFormat(value, format, type = this.DATE_TYPE.DATE) {
        let parts = null;

        switch (format) {
            case 'Y-m-d':
            case 'Y-m':
                parts = value.split('-');
                break;
            case 'Y/m/d':
            case 'Y/m':
                parts = value.split('/');
            case 'Y.m.d':
            case 'Y.m':
                parts = value.split('.');
                break;
            case 'Ymd':
                parts = [
                    value.substring(0, 4),
                    value.substring(4, 6),
                    value.substring(6, 8)
                ];
                break;
            case 'Ym':
                parts = [
                    value.substring(0, 4),
                    value.substring(4, 6)
                ];
                break;
            case 'Y':
                parts = [value, '01'];
                break;
            default:
                console.error(`Unsupported format: ${format}`);
                return null;
        }

        switch (type) {
            case this.DATE_TYPE.DATE:
                return new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
            case this.DATE_TYPE.MONTH:
                return new Date(parts[0], (parts[1] || 1) - 1, 1);
            case this.DATE_TYPE.YEAR:
                return new Date(parts[0], 0, 1);
            default:
                return null;
        }
    },

    parseDateByFormat(date, format, type = this.DATE_TYPE.DATE) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        switch (type) {
            case this.DATE_TYPE.DATE:
                switch (format) {
                    case 'Y-m-d':
                        return `${year}-${month}-${day}`;
                    case 'Y/m/d':
                        return `${year}/${month}/${day}`;
                    case 'Y.m.d':
                        return `${year}.${month}.${day}`;
                    case 'Y.m':
                        return `${year}.${month}`;
                    case 'Ymd':
                        return `${year}${month}${day}`;
                    default:
                        return '';
                }

            case this.DATE_TYPE.MONTH:
                switch (format) {
                    case 'Y-m':
                        return `${year}-${month}`;
                    case 'Y/m':
                        return `${year}/${month}`;
                    case 'Y.m':
                        return `${year}.${month}`;
                    case 'Ym':
                        return `${year}${month}`;
                    default:
                        return '';
                }

            case this.DATE_TYPE.YEAR:
                return `${year}`;

            default:
                console.error(`Unsupported type: ${type}`);
                return '';
        }
    },

    formatDate(date, type = this.DATE_TYPE.DATE) {
        switch (type) {
            case this.DATE_TYPE.DATE:
                return this.parseDateByFormat(date, 'Ymd', type);
            case this.DATE_TYPE.MONTH:
                return this.parseDateByFormat(date, 'Ym', type);
            case this.DATE_TYPE.YEAR:
                return this.parseDateByFormat(date, 'Y', type);
            default:
                return '';
        }
    }
};

export default DateUtils;
