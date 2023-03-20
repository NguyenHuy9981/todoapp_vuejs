import moment from 'moment';

export default {
  filters: {
    formatDate(input) {
      return (input) ? moment(input).format('DD/MM/YYYY  hh:mm') : '';
    },
  },
};
