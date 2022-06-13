export default{
    parseYear(date){
        return date.substring(0,4)
    },
    parseMonth(date){
        return date.substring(5,7)
    },
    isValidDate(date_from,date_to){
        if( (date_from === undefined && date_to===undefined) || (date_from === "" && date_to === "")){
            return true
        }
        else if(date_from > date_to){
            return false
        }
        else if(this.parseYear(date_to)-this.parseYear(date_from)!=0 && this.parseMonth(date_from)-this.parseMonth(date_to) < 0){
            return false
        }
        else{
            return true
        }
    },
    parser(date){
        if(date!==undefined){
            return date.substring(0,16).replace("T"," ");
        }
    },
    parseDate(date){
        if(date!==undefined){
            return date.substring(0,10).replace("T"," ");
        }
    }
}