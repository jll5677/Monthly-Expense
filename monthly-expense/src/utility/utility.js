import moment from 'moment';

export function getDate(){
    let date = new Date();
    return moment(date).format("YYYY-MM-DD");;
}